let currentUser = null;

// Initial Clickers & AutoClickers
const Clickers = [ 
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
  { name: "Poseidon", effect: 250000, cost: 500000, level: 0 },
  { name: "Ocean Colossus", effect: 500000, cost: 1000000, level: 0 },
  { name: "Maelstrom Titan", effect: 1000000, cost: 2500000, level: 0 },
  { name: "Typhoon King", effect: 2500000, cost: 5000000, level: 0 },
  { name: "Infinity Surge", effect: 5000000, cost: 10000000, level: 0 },
  { name: "Abyssal Wave", effect: 1e7, cost: 2e7, level: 0 },
  { name: "Cosmic Tide", effect: 2e7, cost: 5e7, level: 0 },
  { name: "Galactic Flood", effect: 5e7, cost: 1e8, level: 0 },
  { name: "Eternal Stream", effect: 1e8, cost: 2e8, level: 0 },
  { name: "Leviathan Prime", effect: 2e8, cost: 5e8, level: 0 },
  { name: "Poseidon Ultima", effect: 5e8, cost: 1e9, level: 0 },
  { name: "Omega Wave", effect: 1e9, cost: 2e9, level: 0 },
  { name: "Tidal Titan", effect: 2e9, cost: 5e9, level: 0 },
  { name: "Supernova Flood", effect: 5e9, cost: 1e10, level: 0 },
  { name: "Cosmic Maelstrom", effect: 1e10, cost: 2e10, level: 0 },
  { name: "Infinity Tsunami", effect: 2e10, cost: 5e10, level: 0 },
  { name: "Omega Leviathan", effect: 5e10, cost: 1e11, level: 0 },
  { name: "Eternal Wave", effect: 1e11, cost: 2e11, level: 0 },
  { name: "Poseidon King", effect: 2e11, cost: 5e11, level: 0 },
  { name: "Abyssal Titan", effect: 5e11, cost: 1e12, level: 0 },
  { name: "Galactic Leviathan", effect: 1e12, cost: 2e12, level: 0 },
  { name: "Omega Tide", effect: 2e12, cost: 5e12, level: 0 },
  { name: "Infinity Wave", effect: 5e12, cost: 1e13, level: 0 },
  { name: "Supernova Tide", effect: 1e13, cost: 2e13, level: 0 },
  { name: "Cosmic Ocean", effect: 2e13, cost: 5e13, level: 0 },
  { name: "Eternal Leviathan", effect: 5e13, cost: 1e14, level: 0 },
  { name: "Omega Ocean", effect: 1e14, cost: 2e14, level: 0 },
  { name: "Infinity Flood", effect: 2e14, cost: 5e14, level: 0 },
  { name: "Galactic Ocean", effect: 5e14, cost: 1e15, level: 0 },
  { name: "Tsunami King", effect: 1e15, cost: 2e15, level: 0 },
  { name: "Abyssal Leviathan Prime", effect: 2e15, cost: 5e15, level: 0 },
  { name: "Poseidon Emperor", effect: 5e15, cost: 1e16, level: 0 },
  { name: "Omega Leviathan Prime", effect: 1e16, cost: 2e16, level: 0 },
  { name: "Infinity Ocean Prime", effect: 2e16, cost: 5e16, level: 0 },
  { name: "Supernova Leviathan", effect: 5e16, cost: 1e17, level: 0 },
  { name: "Cosmic Leviathan Prime", effect: 1e17, cost: 2e17, level: 0 },
  { name: "Eternal Flood", effect: 2e17, cost: 5e17, level: 0 },
  { name: "Omega Flood Prime", effect: 5e17, cost: 1e18, level: 0 },
  { name: "Infinity Leviathan Prime", effect: 1e18, cost: 2e18, level: 0 },
  { name: "Supernova Ocean Prime", effect: 2e18, cost: 5e18, level: 0 },
  { name: "Cosmic Flood Prime", effect: 5e18, cost: 1e19, level: 0 },
  { name: "Omega Ocean Prime", effect: 1e19, cost: 2e19, level: 0 },
  { name: "Infinity Tsunami Prime", effect: 2e19, cost: 5e19, level: 0 },
  { name: "Eternal Leviathan Prime", effect: 5e19, cost: 1e20, level: 0 },
  { name: "Supernova Flood Prime", effect: 1e20, cost: 2e20, level: 0 },
  { name: "Omega Leviathan Emperor", effect: 2e20, cost: 5e20, level: 0 },
  { name: "Infinity Ocean Emperor", effect: 5e20, cost: 1e21, level: 0 }
];
const AutoClickers = [
  { name: "Drizzle", effect: 5, cost: 10, level: 0 },
  { name: "Trickle", effect: 15, cost: 30, level: 0 },
  { name: "Rill", effect: 50, cost: 120, level: 0 },
  { name: "Brooklet", effect: 120, cost: 300, level: 0 },
  { name: "Creek", effect: 300, cost: 750, level: 0 },
  { name: "Stream", effect: 750, cost: 1500, level: 0 },
  { name: "River", effect: 2000, cost: 4000, level: 0 },
  { name: "Rapids", effect: 5000, cost: 10000, level: 0 },
  { name: "Waterfall", effect: 12000, cost: 25000, level: 0 },
  { name: "Wave", effect: 30000, cost: 60000, level: 0 },
  { name: "Tide", effect: 75000, cost: 150000, level: 0 },
  { name: "Whirlpool", effect: 200000, cost: 400000, level: 0 },
  { name: "Flood", effect: 500000, cost: 1e6, level: 0 },
  { name: "Monsoon", effect: 1.2e6, cost: 2.5e6, level: 0 },
  { name: "Tsunami", effect: 3e6, cost: 6e6, level: 0 },
  { name: "Leviathan", effect: 7.5e6, cost: 1.5e7, level: 0 },
  { name: "Poseidon", effect: 2e7, cost: 4e7, level: 0 },
  { name: "Ocean Colossus", effect: 5e7, cost: 1e8, level: 0 },
  { name: "Maelstrom Titan", effect: 1.2e8, cost: 2.5e8, level: 0 },
  { name: "Typhoon King", effect: 3e8, cost: 6e8, level: 0 },
  { name: "Abyssal Wave", effect: 7.5e8, cost: 1.5e9, level: 0 },
  { name: "Cosmic Tide", effect: 2e9, cost: 4e9, level: 0 },
  { name: "Galactic Flood", effect: 5e9, cost: 1e10, level: 0 },
  { name: "Eternal Stream", effect: 1.2e10, cost: 2.5e10, level: 0 },
  { name: "Leviathan Prime", effect: 3e10, cost: 6e10, level: 0 },
  { name: "Poseidon Ultima", effect: 7.5e10, cost: 1.5e11, level: 0 },
  { name: "Omega Wave", effect: 2e11, cost: 4e11, level: 0 },
  { name: "Tidal Titan", effect: 5e11, cost: 1e12, level: 0 },
  { name: "Supernova Flood", effect: 1.2e12, cost: 2.5e12, level: 0 },
  { name: "Cosmic Maelstrom", effect: 3e12, cost: 6e12, level: 0 },
  { name: "Infinity Tsunami", effect: 7.5e12, cost: 1.5e13, level: 0 },
  { name: "Omega Leviathan", effect: 2e13, cost: 4e13, level: 0 },
  { name: "Eternal Wave", effect: 5e13, cost: 1e14, level: 0 },
  { name: "Poseidon King", effect: 1.2e14, cost: 2.5e14, level: 0 },
  { name: "Abyssal Titan", effect: 3e14, cost: 6e14, level: 0 },
  { name: "Galactic Leviathan", effect: 7.5e14, cost: 1.5e15, level: 0 },
  { name: "Omega Tide", effect: 2e15, cost: 4e15, level: 0 },
  { name: "Infinity Wave", effect: 5e15, cost: 1e16, level: 0 },
  { name: "Supernova Tide", effect: 1.2e16, cost: 2.5e16, level: 0 },
  { name: "Cosmic Ocean", effect: 3e16, cost: 6e16, level: 0 },
  { name: "Eternal Leviathan", effect: 7.5e16, cost: 1.5e17, level: 0 },
  { name: "Omega Ocean", effect: 2e17, cost: 4e17, level: 0 },
  { name: "Infinity Flood", effect: 5e17, cost: 1e18, level: 0 },
  { name: "Galactic Ocean", effect: 1.2e18, cost: 2.5e18, level: 0 },
  { name: "Tsunami King", effect: 3e18, cost: 6e18, level: 0 },
  { name: "Abyssal Leviathan Prime", effect: 7.5e18, cost: 1.5e19, level: 0 },
  { name: "Poseidon Emperor", effect: 2e19, cost: 4e19, level: 0 },
  { name: "Omega Leviathan Prime", effect: 5e19, cost: 1e20, level: 0 },
  { name: "Infinity Ocean Prime", effect: 1.2e20, cost: 2.5e20, level: 0 },
  { name: "Supernova Leviathan", effect: 3e20, cost: 6e20, level: 0 },
  { name: "Cosmic Leviathan Prime", effect: 7.5e20, cost: 1.5e21, level: 0 },
  { name: "Eternal Flood", effect: 2e21, cost: 4e21, level: 0 },
  { name: "Omega Flood Prime", effect: 5e21, cost: 1e22, level: 0 },
  { name: "Infinity Leviathan Prime", effect: 1.2e22, cost: 2.5e22, level: 0 },
  { name: "Supernova Ocean Prime", effect: 3e22, cost: 6e22, level: 0 }
  { name: "infinity tide", effect: 1e23, cost: 1e24, level: 0 }
];

// LocalStorage handling
function loadAccounts() {
  return JSON.parse(localStorage.getItem("accounts")||"{}");
}
function saveAccounts(accounts){
  localStorage.setItem("accounts", JSON.stringify(accounts));
}

// Show register/login
function showRegister(){document.getElementById("loginDiv").style.display="none";document.getElementById("registerDiv").style.display="block";}
function showLogin(){document.getElementById("registerDiv").style.display="none";document.getElementById("loginDiv").style.display="block";}

// Register
function register(){
  let username=document.getElementById("regUsername").value.trim();
  let password=document.getElementById("regPassword").value.trim();
  if(!username||!password)return alert("Enter username/password!");
  
  let accounts = loadAccounts();
  if(accounts[username]) return alert("Username already exists!");
  if(username==="chenulowner") return alert("Reserved username!");
  
  accounts[username]={password, water:0, multiplier:1, clickers:[], autoClickers:[], owner:false};
  saveAccounts(accounts);
  alert("Account created!");
  showLogin();
}

// Login
function login(){
  let username=document.getElementById("username").value.trim();
  let password=document.getElementById("password").value.trim();
  if(!username||!password)return alert("Enter username/password!");

  let accounts=loadAccounts();
  // Ensure owner exists
  if(!accounts["chenulowner"]) accounts["chenulowner"]={password:"chenulwater", water:0, multiplier:1, clickers:[], autoClickers:[], owner:true};

  if(accounts[username]){
    if(accounts[username].password!==password) return alert("Wrong password!");
  } else return alert("Account does not exist!");

  currentUser=username;
  document.getElementById("loginDiv").style.display="none";
  document.getElementById("gameDiv").style.display="block";
  document.getElementById("welcome").innerText=`Welcome ${currentUser}${accounts[currentUser].owner?" 👑":""}`;
  loadGame();
}

// Game logic
function loadGame(){
  let accounts = loadAccounts();
  updateWaterDisplay();
  createUpgrades();
  if(accounts[currentUser].owner) loadAdminPanel();
  updateLeaderboard();
  setInterval(autoClick, 1000); // AutoClicker every 1s
  setInterval(saveGame,5000); // Auto save
}

function clickWater(){
  let accounts=loadAccounts();
  accounts[currentUser].water+=(accounts[currentUser].multiplier||1);
  saveAccounts(accounts);
  updateWaterDisplay();
  updateLeaderboard();
}

function updateWaterDisplay(){
  let accounts=loadAccounts();
  document.getElementById("waterCount").innerText=`${accounts[currentUser].water} 💧`;
}

// Upgrades
function createUpgrades(){
  const div=document.getElementById("upgrades");
  div.innerHTML="";
  Clickers.forEach((u,i)=>{
    const btn=document.createElement("button");
    btn.innerText=`${u.name} (Level ${u.level||0}) - ${u.cost} 💧`;
    btn.onclick=()=>buyUpgrade(i);
    div.appendChild(btn);
  });
}

function buyUpgrade(i){
  let accounts=loadAccounts();
  const u=Clickers[i];
  if(accounts[currentUser].water<u.cost)return alert("Not enough water!");
  accounts[currentUser].water-=u.cost;
  u.level=(u.level||0)+1;
  accounts[currentUser].multiplier+=(u.effect);
  saveAccounts(accounts);
  createUpgrades();
  updateWaterDisplay();
  updateLeaderboard();
}

// AutoClickers
function autoClick(){
  let accounts=loadAccounts();
  AutoClickers.forEach((ac)=>{
    accounts[currentUser].water+=ac.effect*(ac.level||0);
  });
  saveAccounts(accounts);
  updateWaterDisplay();
  updateLeaderboard();
}

// Admin panel
function loadAdminPanel(){
  const div=document.getElementById("adminPanel");
  div.style.display="block";
  div.innerHTML="<h3>Admin Panel</h3>";

  const setWater=document.createElement("input");
  setWater.placeholder="Set player water";
  const btnSetWater=document.createElement("button");
  btnSetWater.innerText="Set Water";
  btnSetWater.onclick=()=>{
    const val=Number(setWater.value);
    const target=prompt("Enter player username:");
    if(!target||!loadAccounts()[target]) return alert("Player not found!");
    let accounts=loadAccounts();
    accounts[target].water=val;
    saveAccounts(accounts);
    updateLeaderboard();
    updateWaterDisplay();
  };
  div.appendChild(setWater);
  div.appendChild(btnSetWater);
}

// Leaderboard
function updateLeaderboard(){
  const accounts=loadAccounts();
  const sorted=Object.entries(accounts).filter(([n,d])=>!d.owner).sort((a,b)=>b[1].water-a[1].water).slice(0,10);
  const lb=document.getElementById("leaderboard");
  lb.innerHTML="<h3>🏆 Leaderboard</h3>";
  sorted.forEach(([name,data],i)=>{
    lb.innerHTML+=`${i+1}. ${name} - ${data.water} 💧<br>`;
  });
}

// Save
function saveGame(){saveAccounts(loadAccounts());}
