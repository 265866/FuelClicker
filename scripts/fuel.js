var fuel = 0
var fuelPerSecond = 0

function begin()
{
    updateCounters();
    giveFuel();
}

function fuelClick() {
    fuel++
    console.log(fuel)
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

document.addEventListener('DOMContentLoaded', function () {    
    begin();
});