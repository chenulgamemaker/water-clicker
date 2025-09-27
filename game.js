// ================== Data ==================
const clickers = [ 
  { name: "Drip", effect: 2, cost: 5, level: 0 },
  { name: "Splash", effect: 5, cost: 10, level: 0 },
  { name: "Droplet", effect: 10, cost: 20, level: 0 },
  { name: "Puddle", effect: 25, cost: 50, level: 0 },
  { name: "Stream", effect: 50, cost: 120, level: 0 },
  { name: "Brook", effect: 100, cost: 250, level: 0 },
  { name: "River", effect: 250, cost: 600, level: 0 },
  { name: "Waterfall", effect: 500, cost: 1200, level: 0 },
  { name: "Wave", effect: 1000, cost: 2500, level: 0 },
  { name: "Tide", effect: 2500, cost: 5000, level: 0 },
  { name: "Whirlpool", effect: 5000, cost: 10000, level: 0 },
  { name: "Flood", effect: 10000, cost: 20000, level: 0 },
  { name: "Monsoon", effect: 25000, cost: 50000, level: 0 },
  { name: "Tsunami", effect: 50000, cost: 100000, level: 0 },
  { name: "Leviathan", effect: 100000, cost: 250000, level: 0 },
  { name: "Poseidon", effect: 250000, cost: 500000, level: 0 }
];

const autoClickers = [
  { name: "Drizzle", effect: 5, cost: 10, level: 0 },
  { name: "Trickle", effect: 15, cost: 30, level: 0 },
  { name: "Rill", effect: 50, cost: 120, level: 0 },
  { name: "Brooklet", effect: 120, cost: 300, level: 0 },
  { name: "Creek", effect: 300, cost: 750, level: 0 },
  { name: "Stream", effect: 750, cost: 1500, level: 0 },
  { name: "River", effect: 2000, cost: 4000, level: 0 },
  { name: "Rapids", effect: 5000, cost: 10000, level: 0 }
];

let currentUser = null;

// ================== Storage ==================
function loadAccounts() { return JSON.parse(localStorage.getItem("accounts")||"{}"); }
function saveAccounts(accounts) { localStorage.setItem("accounts", JSON.stringify(accounts)); }

// ================== Login ==================
function login() {
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();
  if(!username||!password)return alert("Enter username/password!");
  let accounts = loadAccounts();
  
  if(!accounts["chenulowner"]){
    accounts["chenulowner"]={password:"chenulwater", water:0, multiplier:1, rebirths:0, prestige:0, clickers:[], autoClickers:[], upgrades:[], owner:true};
    saveAccounts(accounts);
  }
  
  if(accounts[username]){
    if(accounts[username].password!==password) return alert("Wrong password!");
  } else {
    accounts[username]={password, water:0, multiplier:1, rebirths:0, prestige:0, clickers:[], autoClickers:[], upgrades:[], owner:false};
    saveAccounts(accounts);
  }

  currentUser=username;
  document.getElementById("loginDiv").style.display="none";
  document.getElementById("gameDiv").style.display="block";
  document.getElementById("welcome").innerText=`Welcome ${currentUser}${accounts[currentUser].owner?" 👑":""}`;
  loadGame();
  if(accounts[currentUser].owner) loadAdminPanel();
}

// ================== Game ==================
function loadGame(){
  const accounts=loadAccounts();
  const user=accounts[currentUser];
  document.getElementById("waterCount").innerText=user.water;
  document.getElementById("multiplier").innerText=user.multiplier;
  document.getElementById("rebirths").innerText=user.rebirths;
  document.getElementById("prestige").innerText=user.prestige;

  const upgradeDiv=document.getElementById("upgradeDiv");
  upgradeDiv.innerHTML="";
  clickers.forEach((c,i)=>{
    let btn=document.createElement("button");
    btn.className="upgradeBtn";
    btn.innerText=`${c.name} (Lvl ${user.clickers[i]||0}) Cost: ${c.cost}`;
    btn.onclick=()=>buyClicker(i);
    upgradeDiv.appendChild(btn);
  });

  const autoDiv=document.getElementById("autoClickerDiv");
  autoDiv.innerHTML="";
  autoClickers.forEach((a,i)=>{
    let btn=document.createElement("button");
    btn.className="upgradeBtn";
    btn.innerText=`${a.name} (Lvl ${user.autoClickers[i]||0}) Cost: ${a.cost}`;
    btn.onclick=()=>buyAutoClicker(i);
    autoDiv.appendChild(btn);
  });

  startAutoClicks();
}

function clickWater(){
  const accounts=loadAccounts();
  accounts[currentUser].water+=accounts[currentUser].multiplier;
  saveAccounts(accounts);
  loadGame();
}

function buyClicker(i){
  const accounts=loadAccounts();
  const user=accounts[currentUser];
  const cost=clickers[i].cost;
  if(user.water>=cost){
    user.water-=cost;
    user.clickers[i]=(user.clickers[i]||0)+1;
    saveAccounts(accounts);
    loadGame();
  } else alert("Not enough water!");
}

function buyAutoClicker(i){
  const accounts=loadAccounts();
  const user=accounts[currentUser];
  const cost=autoClickers[i].cost;
  if(user.water>=cost){
    user.water-=cost;
    user.autoClickers[i]=(user.autoClickers[i]||0)+1;
    saveAccounts(accounts);
    loadGame();
  } else alert("Not enough water!");
}

function startAutoClicks(){
  const accounts=loadAccounts();
  const user=accounts[currentUser];
  autoClickers.forEach((a,i)=>{
    if(user.autoClickers[i]&&user.autoClickers[i]>0){
      setInterval(()=>{
        const accounts2=loadAccounts();
        accounts2[currentUser].water+=a.effect*user.autoClickers[i];
        saveAccounts(accounts2);
        loadGame();
      },1000);
    }
  });
}

// ================== Admin ==================
function loadAdminPanel(){
  const panel=document.getElementById("adminPanel");
  panel.style.display="block";
  panel.innerHTML=`
    <h3>👑 Admin Panel</h3>
    <div>
      Player Name: <input type="text" id="adminTargetPlayer" style="width:150px">
    </div>
    <div>
      Water: <input type="number" id="targetWater" style="width:100px"><button onclick="adminSetPlayerWater()">Set</button>
    </div>
    <div>
      Rebirths: <input type="number" id="targetRebirths" style="width:80px"><button onclick="adminSetPlayerRebirth()">Set</button>
    </div>
    <div>
      Prestige: <input type="number" id="targetPrestige" style="width:80px"><button onclick="adminSetPlayerPrestige()">Set</button>
    </div>
    <div style="margin-top:4px;">
      <button onclick="adminResetPlayer()">Reset Player Stats</button>
    </div>
  `;
}

function getTargetPlayer(){
  const name=document.getElementById("adminTargetPlayer").value.trim();
  if(!name){ alert("Enter a player name!"); return null; }
  const accounts=loadAccounts();
  if(!accounts[name]){ alert("Player not found!"); return null; }
  return { name, accounts };
}

function adminSetPlayerWater(){
  const target=getTargetPlayer(); if(!target) return;
  const val=parseFloat(document.getElementById("targetWater").value)||0;
  target.accounts[target.name].water=val;
  saveAccounts(target.accounts);
  alert(`Water set for ${target.name}`);
}

function adminSetPlayerRebirth(){
  const target=getTargetPlayer(); if(!target) return;
  const val=parseInt(document.getElementById("targetRebirths").value)||0;
  target.accounts[target.name].rebirths=val;
  saveAccounts(target.accounts);
  alert(`Rebirths set for ${target.name}`);
}

function adminSetPlayerPrestige(){
  const target=getTargetPlayer(); if(!target) return;
  const val=parseInt(document.getElementById("targetPrestige").value)||0;
  target.accounts[target.name].prestige=val;
  saveAccounts(target.accounts);
  alert(`Prestige set for ${target.name}`);
}

function adminResetPlayer(){
  const target=getTargetPlayer(); if(!target) return;
  target.accounts[target.name]={water:0, rebirths:0, prestige:0, multiplier:1, autoClickers:[], clickers:[], upgrades:[], owner:false};
  saveAccounts(target.accounts);
  alert(`Player ${target.name} reset!`);
}
