let count = 1;
let powerOfDig = 50;
let pickaxeCost = 10;
let amountOfPickaxe = 0;
let dwarfCost = 500;
let amountOfDwarfs = 0;
let passiveDig = 0;
let upgrade1cost = 10;
let amountOfUpgrades1 = 0;
let amountOfUpgrades2 = 0;
let upgrade2cost = 100;
const popUp = document.querySelector("div.popup");
popUp.addEventListener("click", function () {
  popUp.style.zIndex = "-1";
});

function dig() {
  count = count + powerOfDig;
  document.getElementById("count").innerHTML = count; // mozna przez query selector zby nie uzywac id ale nie ma
  //roznicy czy dodam id czy classe divowi a zadnej nie posiada
  //czysty js
  if (count >= 10) {
    document.querySelector(".s2").classList.remove("hiddenTop");
    document.querySelector(".s4").classList.remove("hiddenBottom");
    document.querySelector(".s4").classList.add("show");
    if (count >= 200) {
      document.querySelector(".s3").classList.remove("hiddenTop");
    }
  }
}

function buyPickaxe() {
  if (count >= pickaxeCost) {
    count = count - pickaxeCost;
    pickaxeCost = pickaxeCost + 2;
    amountOfPickaxe++;
    document.getElementById("pickaxeCost").innerHTML = "koszt:" + pickaxeCost;
    document.getElementById("count").innerHTML = count;
    powerOfDig += 1;
  } else {
    popUp.style.zIndex = "2";
    popUp.textContent = "za mało dutków";
  }
}

function upgradePickaxe() {
  if (amountOfPickaxe == 0) {
    popUp.style.zIndex = "2";
    popUp.textContent = "nie masz czego ulepszać !";
  } else if (amountOfUpgrades1 > 3) {
    popUp.style.zIndex = "2";
    popUp.textContent = "posiadasz już najlepsze kilofy koleszko!";
  } else if (count >= upgrade1cost) {
    count = count - upgrade1cost;
    powerOfDig = powerOfDig + amountOfPickaxe;
    upgrade1cost = upgrade1cost * 2;
    amountOfUpgrades1++;
    document.getElementById("upgrade1cost").innerHTML = "koszt:" + upgrade1cost;
  } else {
    popUp.style.zIndex = "2";
    popUp.textContent = "za mało dutków";
  }
}

function buyDwarf() {
  if (count >= dwarfCost) {
    count = count - dwarfCost;
    dwarfCost = dwarfCost + 100;
    amountOfDwarfs++;
    document.getElementById("dwarfCost").innerHTML = "koszt:" + dwarfCost;
    document.getElementById("count").innerHTML = count;
    passiveDig += 10;
  } else {
    popUp.style.zIndex = "2";
    popUp.textContent = "za mało dutków";
  }
}

function upgradeDwarfs() {
  if (amountOfDwarfs == 0) {
    popUp.style.zIndex = "2";
    popUp.textContent = "nie masz krasnali !";
  } else if (amountOfUpgrades2 > 3) {
    popUp.style.zIndex = "2";
    popUp.textContent = "twoje krasnale już niczego nie potrzebują !";
  } else if (count >= upgrade2cost) {
    count = count - upgrade2cost;
    passiveDig = passiveDig + amountOfDwarfs * 10;
    upgrade2cost = upgrade2cost * 2;
    amountOfUpgrades2++;
    document.getElementById("upgrade2cost").innerHTML = "koszt:" + upgrade2cost;
  } else {
    popUp.style.zIndex = "2";
    popUp.textContent = "za mało dutków";
  }
  if (amountOfUpgrades2 == 1) {
    document.getElementById("text").innerHTML = "premia dla kazdego !";
  } else if (amountOfUpgrades2 == 2) {
    document.getElementById("text").innerHTML = "obiecaj 13stki";
  } else if (amountOfUpgrades2 == 3) {
    document.getElementById("text").innerHTML = "zapowiedz 500+!!!!";
  } else if (amountOfUpgrades2 == 4) {
    document.getElementById("text").innerHTML = "zrob fikołka";
  }
}

function atention() {
  if (count < 100000) {
    popUp.style.zIndex = "2";
    popUp.textContent = "nie stac cie na taki sprzęt";
  } else {
    alert("wykopales dol gleboki ze ja hej ho !");
    alert("dokopales sie do piekla gratulacje");
    alert("wygrales ić stont");
  }
}
window.setInterval(function () {
  count = count + passiveDig;
  document.getElementById("count").innerHTML = count;
  if (count > 5000) {
    document.querySelector(".s6").classList.remove("hiddenBottom");
    document.querySelector(".s6").classList.add("show");
  } else if (count > 80) {
    document.querySelector(".s5").classList.remove("hiddenBottom");
    document.querySelector(".s5").classList.add("show");
  }
}, 1000);
