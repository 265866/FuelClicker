var fuel = 0
var fuelPerSecond = 0
var pickaxeCost = 50

function begin()
{
    updateCounters();
    giveFuel();
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

function giveFuel() {
    fuel = fuel + fuelPerSecond
    setTimeout(giveFuel, 1000)
}

function pickaxe() {
    if (fuel >= pickaxeCost) {
        console.log("got into if statement")
        fuel - pickaxeCost;
        var pickaxeCost = (30 / 100) * pickaxeCost
        var fuelPerSecond = fuelPerSecond + 1
    }
    else {
        alert("You cannot afford this upgrade!")
    }
}

document.addEventListener('DOMContentLoaded', function () {    
    begin();
});