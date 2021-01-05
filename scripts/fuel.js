//TO DO TOMORROW

//TUTORIAL (using alerts; have to figure out options and stuff)
//DOWNLOAD 10 MUSIC TRACKS
//ADD PLAY/PAUSE BUTTON (actual icon lol - also positioning)
//RANDOMIZE TRACKS & PLAY (see startMusic())
//ADD A NOWPLAYING TEXTBOX


var fuel = 0
var fuelPerSecond = 0
var pickaxes = 0
var pickaxeCost = 100
var miners = 0
var minerCost = 500
var armyOfMiners = 0
var armyOfMinerCost = 2000
var fuelMines = 0
var fuelMineCost = 5000
var fuelFactories = 0
var fuelFactoryCost = 10000
var fuelBank = 0
var fuelBankCost = 20000
var fuelTemple = 0
var fuelTempleCost = 50000
var fuelTimeMachine = 0
var fuelTimeMachineCost = 100000
var javascriptConsole = 0
var javascriptConsoleCost = 500000
var sellSound = new Audio('./sfx/SellSound.mp3')
var click = new Audio('./sfx/click.mp3')
var cantafford = new Audio('./sfx/cantafford.mp3')
var intro = document.querySelector('.intro')
var logo = document.querySelector('.logo-header')
var logoSpan = document.querySelectorAll('.logo')
var song1 = new Audio('./music/Astroblk - Nothing Really matters that much to me anymore.mp3')
var song2 = new Audio('./music/Astroblk - Vancouver.mp3')
var song3 = new Audio('./music/Aviscerall - Sanctuary.mp3')
var song4 = new Audio('./music/Aviscerall - Coffee Shop.mp3')
var song5 = new Audio('./music/Aviscerall - Sanctuary.mp3')
var song6 = new Audio('./music/Whatever You Want (feat. Astroblk).mp3')
var sound = false

//function svglength() {
//    const logo = document.querySelectorAll('#logo path');
//    for (let i = 0; i < logo.length; i++){
//        console.log('Letter ' + i + ' is ' + logo[i].getTotalLength());
//    }
//}

function begin() {
    updateStuff();
    giveFuel();
    checkForAfford();
    cheatPrevention();
    tutorial();
    //svglength();
}

function fuelClick() {
    fuel++
    click.play()
}

function tutorial() {
    setTimeout(() => {
        alert("Welcome to Space Clicker!");
        if (confirm("Would you like a tutorial?")) {
            alert("Okay, to get started, click on the fuel icon a few times")
            alert("When you get to 100 fuel, click on the Pickaxe upgrade.")
            alert("The goal of this game is to get as much fuel as possible.")
            alert("Now that you've learned the basics, it's time for you to get started!")
          } else {
            txt = "You pressed Cancel!";
          }
    }, 10000)
}

function cheatPrevention() {
    console.log("Ahh, well you came here to cheat.")
    console.log("We expected that, and there's really nothing we can do to stop you")
    console.log("So, we made it easier for you...")
    console.log("Actually, we have a full function dedicated to you!")
    console.log("Use the function 'ruinTheFun()' to unlock everything")
}

function ruinTheFun() {
    console.log(".")
    console.log(".")
    console.log(".")
    console.log("You actually expected that to work??")
    console.log("Instead- we destroyed all of your work!")
    console.log("Here are your current stats:")
    console.log(".")
    console.log("Fuel: " + fuel)
    console.log("Fuel Per Second: " + fuelPerSecond)
    console.log("Pickaxes: " + pickaxes)
    console.log("Miners: " + miners)
    console.log("Army Of Miners: " + armyOfMiners)
    console.log("Fuel Mines: " + fuelMines)
    console.log("Fuel Factories: " + fuelFactories)
    console.log("Fuel Banks: " + fuelBank)
    console.log("Fuel Temple: " + fuelTemple)
    console.log("Fuel Time Machines: " + fuelTimeMachine)
    console.log("Javascript Consoles: " + javascriptConsole)
    console.log(".")
    console.log("And here are your new and improved stats!")
    console.log(".")
    fuel = 0
    fuelPerSecond = 0
    pickaxes = 0
    miners = 0
    armyOfMiners = 0
    fuelMines = 0
    fuelFactories = 0
    fuelBank = 0
    fuelTemple = 0
    fuelTimeMachine = 0
    javascriptConsole = 0
    console.log("Fuel: " + fuel)
    console.log("Fuel Per Second: " + fuelPerSecond)
    console.log("Pickaxes: " + pickaxes)
    console.log("Miners: " + miners)
    console.log("Army Of Miners: " + armyOfMiners)
    console.log("Fuel Mines: " + fuelMines)
    console.log("Fuel Factories: " + fuelFactories)
    console.log("Fuel Banks: " + fuelBank)
    console.log("Fuel Temple: " + fuelTemple)
    console.log("Fuel Time Machines: " + fuelTimeMachine)
    console.log("Javascript Consoles: " + javascriptConsole)
    return ("have fun :)")
}

function updateStuff() {
    var fuelcount = document.getElementById('fuelcount');
    fuelcount.innerHTML = "Fuel: " + fuel;
    var fuelsecond = document.getElementById('fuelpersecond')
    fuelsecond.innerHTML = "Fuel Per Second: " + fuelPerSecond
    document.title = "Fuel: " + fuel
    setTimeout(updateStuff, 100)
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
        pickaxeCost = pickaxeCost * (140 / 100)
        fuelPerSecond = fuelPerSecond + 1
        pickaxes = pickaxes + 1
        sellSound.play()
        pickaxeCost = Math.round(pickaxeCost)
        pickaxebutton.innerHTML = 'Pickaxe: +1 FPS<br/>Cost: ' + pickaxeCost + '<br/>Obtained: ' + pickaxes
    } else {
        cantafford.play()
    }
}

function miner() {
    if (fuel >= minerCost) {
        fuel = fuel - minerCost;
        minerCost = minerCost * (140 / 100)
        fuelPerSecond = fuelPerSecond + 5
        miners = miners + 1
        sellSound.play()
        minerCost = Math.round(minerCost)
        minerbutton.innerHTML = 'Miner: +5 FPS<br/>Cost: ' + minerCost + '<br/>Obtained: ' + miners
    } else {
        cantafford.play()
    }
}

function armyofminers() {
    if (fuel >= armyOfMinerCost) {
        fuel = fuel - armyOfMinerCost;
        armyOfMinerCost = armyOfMinerCost * (140 / 100)
        fuelPerSecond = fuelPerSecond + 20
        armyOfMiners = armyOfMiners + 1
        sellSound.play()
        armyOfMinerCost = Math.round(armyOfMinerCost)
        armyofminersbutton.innerHTML = 'Armies Of Miners: +20 FPS<br/>Cost: ' + armyOfMinerCost + '<br/>Obtained: ' + armyOfMiners
    } else {
        cantafford.play()
    }
}

function fuelmine() {
    if (fuel >= armyOfMinerCost) {
        fuel = fuel - fuelMineCost;
        fuelMineCost = fuelMineCost * (140 / 100)
        fuelPerSecond = fuelPerSecond + 50
        fuelMines = fuelMines + 1
        sellSound.play()
        fuelMineCost = Math.round(fuelMineCost)
        fuelminebutton.innerHTML = 'Fuel Mines: +50 FPS<br/>Cost: ' + fuelMineCost + '<br/>Obtained: ' + fuelMines
    } else {
        cantafford.play()
    }
}

function fuelfactory() {
    if (fuel >= fuelFactoryCost) {
        fuel = fuel - fuelFactoryCost;
        fuelFactoryCost = fuelFactoryCost * (140 / 100)
        fuelPerSecond = fuelPerSecond + 100
        fuelFactories = fuelFactories + 1
        sellSound.play()
        fuelFactoryCost = Math.round(fuelFactoryCost)
        fuelfactorybutton.innerHTML = 'Fuel Factories: +100 FPS<br/>Cost: ' + fuelFactoryCost + '<br/>Obtained: ' + fuelFactories
    } else {
        cantafford.play()
    }
}

function fuelbank() {
    if (fuel >= fuelBankCost) {
        fuel = fuel - fuelBankCost;
        fuelBankCost = fuelBankCost * (140 / 100)
        fuelPerSecond = fuelPerSecond + 200
        fuelBank = fuelBank + 1
        sellSound.play()
        fuelBankCost = Math.round(fuelBankCost)
        fuelbankbutton.innerHTML = 'Fuel Banks: +200 FPS<br/>Cost: ' + fuelBankCost + '<br/>Obtained: ' + fuelBank
    } else {
        cantafford.play()
    }
}

function fueltemple() {
    if (fuel >= fuelTempleCost) {
        fuel = fuel - fuelTempleCost;
        fuelTempleCost = fuelTempleCost * (140 / 100)
        fuelPerSecond = fuelPerSecond + 500
        fuelTemple = fuelTemple + 1
        sellSound.play()
        fuelTempleCost = Math.round(fuelTempleCost)
        fueltemplebutton.innerHTML = 'Fuel Temples: +500 FPS<br/>Cost: ' + fuelTempleCost + '<br/>Obtained: ' + fuelTemple
    } else {
        cantafford.play()
    }
}

function fueltimemachine() {
    if (fuel >= fuelTimeMachineCost) {
        fuel = fuel - fuelTimeMachineCost;
        fuelTimeMachineCost = fuelTimeMachineCost * (140 / 100)
        fuelPerSecond = fuelPerSecond + 1000
        fuelTimeMachine = fuelTimeMachine + 1
        sellSound.play()
        fuelTimeMachineCost = Math.round(fuelTimeMachineCost)
        fueltimemachinebutton.innerHTML = 'Time Machines: +1000 FPS<br/>Cost: ' + fuelTimeMachineCost + '<br/>Obtained: ' + fuelTimeMachine
    } else {
        cantafford.play()
    }
}

function javascriptconsole() {
    if (fuel >= javascriptConsoleCost) {
        fuel = fuel - javascriptConsoleCost;
        javascriptConsoleCost = javascriptConsoleCost * (140 / 100)
        fuelPerSecond = fuelPerSecond + 5000
        javascriptConsole = javascriptConsole + 1
        sellSound.play()
        fuelTempleCost = Math.round(fuelTempleCost)
        javascriptconsolebutton.innerHTML = 'Javascript Consoles: +5000 FPS<br/>Cost: ' + javascriptConsoleCost + '<br/>Obtained: ' + javascriptConsole
    } else {
        cantafford.play()
    }
}

function startMusic() {
    if (sound == true) {
        sound = false
        song1.pause()
        song2.pause()
        song3.pause()
        song4.pause()
        song5.pause()
        song6.pause()
        musicbutton.innerHTML = 'Play Music'
        nowplaying.innerHTML = 'Now Playing: Nothing!'
    }
    else {
    musicbutton.innerHTML = 'Pause Music'
    sound = true
    var x = Math.random()
    x = x * 10
    x = Math.round(x)
    console.log(x)
    if (x == 0) {
        song1.play()
        nowplaying.innerHTML = 'Now Playing: Astroblk - Nothing Really matters that much to me anymore'
    }
    if (x == 1) {
        song2.play()
        nowplaying.innerHTML = 'Now Playing: Astroblk - Vancouver'
    }
    if (x == 2) {
        song3.play()
        nowplaying.innerHTML = 'Now Playing: Aviscerall - Sanctuary'
    }
    if (x == 3) {
        song4.play()
        nowplaying.innerHTML = 'Now Playing: Aviscerall - Coffee Shop'
    }
    if (x == 4) {
        song5.play()
        nowplaying.innerHTML = 'Now Playing: Aviscerall - Sanctuary'
    }
    if (x == 5) {
        song6.play()
        nowplaying.innerHTML = 'Whatever You Want (feat. Astroblk)'
    }
    if (x == 6) {
        song1.play()
        nowplaying.innerHTML = 'Now Playing: Astroblk - Nothing Really matters that much to me anymore'
    }
    if (x == 7) {
        song2.play()
        nowplaying.innerHTML = 'Now Playing: Astroblk - Vancouver'
    }
    if (x == 8) {
        song3.play()
        nowplaying.innerHTML = 'Now Playing: Aviscerall - Sanctuary'
    }
    if (x == 9) {
        song5.play()
        nowplaying.innerHTML = 'Now Playing: Aviscerall - Sanctuary'
    }
    if (x == 10) {
        song4.play()
        nowplaying.innerHTML = 'Now Playing: Aviscerall - Coffee Shop'
    }
}
}

document.addEventListener('DOMContentLoaded', function() {
    begin();
});

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });
        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 8500)
    })
})