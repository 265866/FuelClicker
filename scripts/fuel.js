var fuel = 0
var fuelPerSecond = 0
var pickaxes = 0
var pickaxeCost = 50
var miners = 0
var minerCost = 200
var armyOfMiners = 0
var armyOfMinerCost = 750
var fuelMines = 0
var fuelMineCost = 1250
var fuelFactories = 0
var fuelFactoryCost = 1750
var fuelBank = 0
var fuelBankCost = 2500
var fuelTemple = 0
var fuelTempleCost = 5000
var fuelTimeMachine = 0
var fuelTimeMachineCost = 12500
var javascriptConsole = 0
var javascriptConsoleCost = 50000

//upgrade checklist:
// create new variable
// make a new function for upgrade
// add to function "roundAll()"
// add to function "checkForAfford"

function begin() {
    updateCounters();
    giveFuel();
    roundAll();
    checkForAfford();
    updateTitle();
}

function fuelClick() {
    fuel++
}

function updateTitle() {
    document.title = "Fuel: " + fuel
    setTimeout(updateTitle, 100)
}

function updateCounters() {
    var fuelcount = document.getElementById('fuelcount');
    fuelcount.innerHTML = "Fuel: " + fuel;
    var fuelsecond = document.getElementById('fuelpersecond')
    fuelsecond.innerHTML = "Fuel Per Second: " + fuelPerSecond
    setTimeout(updateCounters, 100)
}

function roundAll() {
    fuel = Math.round(fuel)
    pickaxeCost = Math.round(pickaxeCost)
    pickaxebutton.innerHTML = 'Pickaxe: +1 FPS<br/>Cost: ' + pickaxeCost + '<br/>Obtained: ' + pickaxes
    minerCost = Math.round(minerCost)
    minerbutton.innerHTML = 'Miner: +5 FPS<br/>Cost: ' + minerCost + '<br/>Obtained: ' + miners
    armyOfMinerCost = Math.round(armyOfMinerCost)
    armyofminersbutton.innerHTML = 'Armies Of Miners: +20 FPS<br/>Cost: ' + armyOfMinerCost + '<br/>Obtained: ' + armyOfMiners
    fuelMineCost = Math.round(fuelMineCost)
    fuelminebutton.innerHTML = 'Fuel Mines: +50 FPS<br/>Cost: ' + fuelMineCost + '<br/>Obtained: ' + fuelMines
    fuelFactoryCost = Math.round(fuelFactoryCost)
    fuelfactorybutton.innerHTML = 'Fuel Factories: +100 FPS<br/>Cost: ' + fuelFactoryCost + '<br/>Obtained: ' + fuelFactories
    fuelBankCost = Math.round(fuelBankCost)
    fuelbankbutton.innerHTML = 'Fuel Banks: +200 FPS<br/>Cost: ' + fuelBankCost + '<br/>Obtained: ' + fuelBank
    fuelTempleCost = Math.round(fuelTempleCost)
    fueltemplebutton.innerHTML = 'Fuel Temples: +500 FPS<br/>Cost: ' + fuelTempleCost + '<br/>Obtained: ' + fuelTemple
    fuelTimeMachineCost = Math.round(fuelTimeMachineCost)
    fueltimemachinebutton.innerHTML = 'Time Machines: +1000 FPS<br/>Cost: ' + fuelTimeMachineCost + '<br/>Obtained: ' + fuelTimeMachine
    fuelTempleCost = Math.round(fuelTempleCost)
    javascriptconsolebutton.innerHTML = 'Javascript Consoles: +5000 FPS<br/>Cost: ' + javascriptConsoleCost + '<br/>Obtained: ' + javascriptConsole
    setTimeout(roundAll, 100)
}

function checkForAfford() {
    if (fuel < pickaxeCost) {
        document.getElementById("pickaxebutton").style.opacity = '0.6'
        document.getElementById("pickaxebutton").style.cursor = 'not-allowed'
    } else {
        document.getElementById("pickaxebutton").style.opacity = '1'
        document.getElementById("pickaxebutton").style.cursor = 'pointer'
    }
    if (fuel < minerCost) {
        document.getElementById("minerbutton").style.opacity = '0.6'
        document.getElementById("minerbutton").style.cursor = 'not-allowed'
    } else {
        document.getElementById("minerbutton").style.opacity = '1'
        document.getElementById("minerbutton").style.cursor = 'pointer'
    }
    if (fuel < armyOfMinerCost) {
        document.getElementById("armyofminersbutton").style.opacity = '0.6'
        document.getElementById("armyofminersbutton").style.cursor = 'not-allowed'
    } else {
        document.getElementById("armyofminersbutton").style.opacity = '1'
        document.getElementById("armyofminersbutton").style.cursor = 'pointer'
    }
    if (fuel < fuelMineCost) {
        document.getElementById("fuelminebutton").style.opacity = '0.6'
        document.getElementById("fuelminebutton").style.cursor = 'not-allowed'
    } else {
        document.getElementById("fuelminebutton").style.opacity = '1'
        document.getElementById("fuelminebutton").style.cursor = 'pointer'
    }
    if (fuel < fuelFactoryCost) {
        document.getElementById("fuelfactorybutton").style.opacity = '0.6'
        document.getElementById("fuelfactorybutton").style.cursor = 'not-allowed'
    } else {
        document.getElementById("fuelfactorybutton").style.opacity = '1'
        document.getElementById("fuelfactorybutton").style.cursor = 'pointer'
    }
    if (fuel < fuelBankCost) {
        document.getElementById("fuelbankbutton").style.opacity = '0.6'
        document.getElementById("fuelbankbutton").style.cursor = 'not-allowed'
    } else {
        document.getElementById("fuelbankbutton").style.opacity = '1'
        document.getElementById("fuelbankbutton").style.cursor = 'pointer'
    }
    if (fuel < fuelTempleCost) {
        document.getElementById("fueltemplebutton").style.opacity = '0.6'
        document.getElementById("fueltemplebutton").style.cursor = 'not-allowed'
    } else {
        document.getElementById("fueltemplebutton").style.opacity = '1'
        document.getElementById("fueltemplebutton").style.cursor = 'pointer'
    }
    if (fuel < fuelTimeMachineCost) {
        document.getElementById("fueltimemachinebutton").style.opacity = '0.6'
        document.getElementById("fueltimemachinebutton").style.cursor = 'not-allowed'
    } else {
        document.getElementById("fueltimemachinebutton").style.opacity = '1'
        document.getElementById("fueltimemachinebutton").style.cursor = 'pointer'
    }
    if (fuel < javascriptConsoleCost) {
        document.getElementById("javascriptconsolebutton").style.opacity = '0.6'
        document.getElementById("javascriptconsolebutton").style.cursor = 'not-allowed'
    } else {
        document.getElementById("javascriptconsolebutton").style.opacity = '1'
        document.getElementById("javascriptconsolebutton").style.cursor = 'pointer'
    }
    setTimeout(checkForAfford, 1000)
}

function giveFuel() {
    fuel = fuel + fuelPerSecond
    setTimeout(giveFuel, 1000)
}

function pickaxe() {
    if (fuel >= pickaxeCost) {
        fuel = fuel - pickaxeCost;
        pickaxeCost = pickaxeCost * (130 / 100)
        fuelPerSecond = fuelPerSecond + 1
        pickaxes = pickaxes + 1
    } else {}
}

function miner() {
    if (fuel >= minerCost) {
        fuel = fuel - minerCost;
        minerCost = minerCost * (130 / 100)
        fuelPerSecond = fuelPerSecond + 5
        miners = miners + 1
    } else {}
}

function armyofminers() {
    if (fuel >= armyOfMinerCost) {
        fuel = fuel - armyOfMinerCost;
        armyOfMinerCost = armyOfMinerCost * (130 / 100)
        fuelPerSecond = fuelPerSecond + 20
        armyOfMiners = armyOfMiners + 1
    } else {}
}

function fuelmine() {
    if (fuel >= armyOfMinerCost) {
        fuel = fuel - fuelMineCost;
        fuelMineCost = fuelMineCost * (130 / 100)
        fuelPerSecond = fuelPerSecond + 50
        fuelMines = fuelMines + 1
    } else {}
}

function fuelfactory() {
    if (fuel >= fuelFactoryCost) {
        fuel = fuel - fuelFactoryCost;
        fuelFactoryCost = fuelFactoryCost * (130 / 100)
        fuelPerSecond = fuelPerSecond + 100
        fuelFactories = fuelFactories + 1
    } else {}
}

function fuelbank() {
    if (fuel >= fuelBankCost) {
        fuel = fuel - fuelBankCost;
        fuelBankCost = fuelBankCost * (130 / 100)
        fuelPerSecond = fuelPerSecond + 200
        fuelBank = fuelBank + 1
    } else {}
}

function fueltemple() {
    if (fuel >= fuelTempleCost) {
        fuel = fuel - fuelTempleCost;
        fuelTempleCost = fuelTempleCost * (130 / 100)
        fuelPerSecond = fuelPerSecond + 500
        fuelTemple = fuelTemple + 1
    } else {}
}

function fueltimemachine() {
    if (fuel >= fuelTimeMachineCost) {
        fuel = fuel - fuelTimeMachineCost;
        fuelTimeMachineCost = fuelTimeMachineCost * (130 / 100)
        fuelPerSecond = fuelPerSecond + 1000
        fuelTimeMachine = fuelTimeMachine + 1
    } else {}
}

function javascriptconsole() {
    if (fuel >= javascriptConsoleCost) {
        fuel = fuel - javascriptConsoleCost;
        javascriptConsoleCost = javascriptConsoleCost * (130 / 100)
        fuelPerSecond = fuelPerSecond + 5000
        javascriptConsole = javascriptConsole + 1
    } else {}
}

document.addEventListener('DOMContentLoaded', function() {
    begin();
});