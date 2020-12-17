var fuel = 0
var fuelPerSecond = 0

function begin()
{
    updateCounters();
    setTimeout(begin, 10, window);
}

function fuelClick() {
    fuel++
    console.log(fuel)
}

function updateCounters() {    
    var fuelcount = document.getElementById('fuelcount');
    fuelcount.innerHTML = "fuel: " + fuel;
    var fuelsecond = document.getElementById('fuelpersecond')
    fuelsecond.innerHTML = "Fuel per Second: " + fuelPerSecond
}

function giveFuel() {
    fuel = fuel + fuelPerSecond
    setTimeout(giveFuel, 1000)
}

document.addEventListener('DOMContentLoaded', function () {    
    begin();
});