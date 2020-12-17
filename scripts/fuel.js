var fuel = 0
var fuelPerSecond = 0

function fuelClick() {
    fuel++
    console.log(fuel)
}

function updateCounters()
{    
    var fuelcount = document.getElementById('fuelcount');
    fuelcount.innerHTML = "fuel: " + fuel;
    var fuelsecond = document.getElementById('fuelpersecond')
    fuelsecond.innerHTML = "Fuel per Second: " + fuelPerSecond
}

function begin()
{
    updateCounters();
    setTimeout(begin, 10, window);
}

document.addEventListener('DOMContentLoaded', function () {    
    begin();
});