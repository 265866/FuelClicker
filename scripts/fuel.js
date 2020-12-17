var fuel = 0
var fuelPerSecond = 0
var pickaxes = 0
var pickaxeCost = 50
var miners = 0
var minerCost = 200
var armyOfMiners = 0
var armyOfMinerCost = 750

function begin()
{
    updateCounters();
    giveFuel();
    roundAll();
}

function fuelClick() {
    fuel++
}

function updateCounters() {    
    var fuelcount = document.getElementById('fuelcount');
    fuelcount.innerHTML = "Fuel: " + fuel;
    var fuelsecond = document.getElementById('fuelpersecond')
    fuelsecond.innerHTML = "Fuel Per Second: " + fuelPerSecond
    setTimeout(updateCounters, 10)
}

function roundAll() {
    fuel = Math.round(fuel)
    pickaxeCost = Math.round(pickaxeCost)
    pickaxebutton.innerHTML = 'Pickaxe: +1 FPS<br/>Cost: ' + pickaxeCost + '<br/>Obtained: ' + pickaxes
    minerCost = Math.round(minerCost)
    minerbutton.innerHTML = 'Miner: +5 FPS<br/>Cost: ' + minerCost + '<br/>Obtained: ' + miners
    armyOfMinerCost = Math.round(armyOfMinerCost)
    armyofminersbutton.innerHTML = 'Armies Of Miners: +20 FPS<br/>Cost: ' + armyOfMinerCost + '<br/>Obtained: ' + armyOfMiners
    setTimeout(roundAll, 10)
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
    }
    else {
        alert("You cannot afford this upgrade!")
    }
}

function miner() {
    if (fuel >= minerCost) {
        fuel = fuel - minerCost;
        minerCost = minerCost * (125 / 100)
        fuelPerSecond = fuelPerSecond + 5
        miners = miners + 1
    }
    else {
        alert("You cannot afford this upgrade!")
    }
}

function armyofminers() {
    if (fuel >= armyOfMinerCost) {
        fuel = fuel - armyOfMinerCost;
        armyOfMinerCost = armyOfMinerCost * (130 / 100)
        fuelPerSecond = fuelPerSecond + 20
        armyOfMiners = armyOfMiners + 1
    }
    else {
        alert("You cannot afford this upgrade!")
    }
}

document.addEventListener('DOMContentLoaded', function () {    
    begin();
});