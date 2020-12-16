var fuel = 0

function fuelClick() {
    fuel++
    console.log(fuel)
}

function fuelcounterupdate()
{    
    var stuff = document.getElementById('fuelcount');
    stuff.innerHTML = "fuel: " + fuel;
}

function begin()
{
    fuelcounterupdate();
    setTimeout(begin, 10, window);
}

document.addEventListener('DOMContentLoaded', function () {    
    begin();
});