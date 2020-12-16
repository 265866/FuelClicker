var fuel = 0

function fuelClick() {
    fuel++
    console.log(fuel)
}

function lemath()
{    
    var stuff = document.getElementById('fuelcount');
    stuff.innerHTML = "fuel: " + fuel;
}

function begin()
{
    lemath();
    setTimeout(begin, 1000, window);
}

document.addEventListener('DOMContentLoaded', function () {    
    begin();
});