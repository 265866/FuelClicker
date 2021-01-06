//TO DO TOMORROW

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
var fuelWizard = 0
var fuelWizardCost = 75000
var fuelShipment = 0
var fuelShipmentCost = 75000
var fuelPortal = 0
var fuelPortalCost = 75000
var fuelLab = 0
var fuelLabCost = 75000
var fuelTimeMachine = 0
var fuelTimeMachineCost = 100000
var prism = 0
var prismCost = 1500000
var javascriptConsole = 0
var javascriptConsoleCost = 2500000
var sellSound = new Audio('./sfx/SellSound.mp3')
var click = new Audio('./sfx/click.mp3')
var cantafford = new Audio('./sfx/cantafford.mp3')
var intro = document.querySelector('.intro')
var logo = document.querySelector('.logo-header')
var logoSpan = document.querySelectorAll('.logo')
var song0 = new Audio('./music/Astroblk - Nothing Really matters that much to me anymore.mp3')
var song1 = new Audio('./music/Astroblk - Vancouver.mp3')
var song2 = new Audio('./music/Aviscerall - Sanctuary.mp3')
var song3 = new Audio('./music/Aviscerall - Coffee Shop.mp3')
var song4 = new Audio('./music/Whatever You Want (feat. Astroblk).mp3')
var song5 = new Audio("./music/Iam6teen - i'm fine, just tired.mp3")
var song6 = new Audio('./music/Linearwave - blossoming.mp3')
var song7 = new Audio('./music/Tune in with Chewie - Night Sky.mp3')
var song8 = new Audio('./music/Tune in With Chewie - Sweet Lullaby.mp3')
var song9 = new Audio('./music/Astroblk - Geneva.mp3')
var sound = false
var donetutorial = false

//function svglength() {
//    const logo = document.querySelectorAll('#logo path');
//    for (let i = 0; i < logo.length; i++){
//        console.log('Letter ' + i + ' is ' + logo[i].getTotalLength());
//    }
//}

function begin() {
    tutorial();
    updateStuff();
    giveFuel();
    checkForAfford();
    cheatPrevention();
    load();
    save();
    roundAll();
    //svglength();
}

function fuelClick() {
    fuel++
    click.play()
}

function tutorial() {
    setTimeout(() => {
        if (donetutorial == false) {
            donetutorial = true
            alert("Welcome to Space Clicker!");
            if (confirm("We see that you're a first time player -- Would you like a tutorial?")) {
                alert("Okay, to get started, click on the fuel icon a few times")
                alert("When you get to 100 fuel, click on the Pickaxe upgrade.")
                alert("The goal of this game is to get as much fuel as possible.")
                alert("Now that you've learned the basics, it's time for you to get started!")
            } else {}
        } else {
            donetutorial = true
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
    console.log("Here are your new and improved stats!")
    console.log(".")
    resetNoConf()
    console.log("Fuel: " + fuel)
    console.log("Fuel Per Second: " + fuelPerSecond)
    console.log("Pickaxes: " + pickaxes)
    console.log("Miners: " + miners)
    console.log("Army Of Miners: " + armyOfMiners)
    console.log("Fuel Mines: " + fuelMines)
    console.log("Fuel Factories: " + fuelFactories)
    console.log("Fuel Banks: " + fuelBank)
    console.log("Fuel Temples: " + fuelTemple)
    console.log("Fuel Wizards: " + fuelWizard)
    console.log("Fuel Shipments: " + fuelShipment)
    console.log("Fuel Portals: " + fuelPortal)
    console.log("Fuel Labs: " + fuelLab)
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
    if (fuel < fuelWizardCost) {
        document.getElementById("fuelwizardbutton").style.opacity = '0.6'
        document.getElementById("fuelwizardbutton").style.cursor = 'not-allowed'
    } else {
        document.getElementById("fuelwizardbutton").style.opacity = '1'
        document.getElementById("fuelwizardbutton").style.cursor = 'pointer'
    }
    if (fuel < fuelShipmentCost) {
        document.getElementById("fuelshipmentbutton").style.opacity = '0.6'
        document.getElementById("fuelshipmentbutton").style.cursor = 'not-allowed'
    } else {
        document.getElementById("fuelshipmentbutton").style.opacity = '1'
        document.getElementById("fuelshipmentbutton").style.cursor = 'pointer'
    }
    if (fuel < fuelPortalCost) {
        document.getElementById("fuelportalbutton").style.opacity = '0.6'
        document.getElementById("fuelportalbutton").style.cursor = 'not-allowed'
    } else {
        document.getElementById("fuelportalbutton").style.opacity = '1'
        document.getElementById("fuelportalbutton").style.cursor = 'pointer'
    }
    if (fuel < fuelLabCost) {
        document.getElementById("fuellabbutton").style.opacity = '0.6'
        document.getElementById("fuellabbutton").style.cursor = 'not-allowed'
    } else {
        document.getElementById("fuellabbutton").style.opacity = '1'
        document.getElementById("fuellabbutton").style.cursor = 'pointer'
    }
    if (fuel < fuelTimeMachineCost) {
        document.getElementById("fueltimemachinebutton").style.opacity = '0.6'
        document.getElementById("fueltimemachinebutton").style.cursor = 'not-allowed'
    } else {
        document.getElementById("fueltimemachinebutton").style.opacity = '1'
        document.getElementById("fueltimemachinebutton").style.cursor = 'pointer'
    }
    if (fuel < fuelLabCost) {
        document.getElementById("fuelprismbutton").style.opacity = '0.6'
        document.getElementById("fuelprismbutton").style.cursor = 'not-allowed'
    } else {
        document.getElementById("fuelprismbutton").style.opacity = '1'
        document.getElementById("fuelprismbutton").style.cursor = 'pointer'
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

function roundAll() {
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
    fuelWizardCost = Math.round(fuelWizardCost)
    fuelwizardbutton.innerHTML = 'Fuel Wizards: +750 FPS<br/>Cost: ' + fuelWizardCost + '<br/>Obtained: ' + fuelWizard
    fuelShipmentCost = Math.round(fuelShipmentCost)
    fuelshipmentbutton.innerHTML = 'Fuel Shipment: +1000 FPS<br/>Cost: ' + fuelShipmentCost + '<br/>Obtained: ' + fuelShipment
    fuelPortalCost = Math.round(fuelPortalCost)
    fuelportalbutton.innerHTML = 'Fuel Portals: +5000 FPS<br/>Cost: ' + fuelPortalCost + '<br/>Obtained: ' + fuelPortal
    fuelLabCost = Math.round(fuelLabCost)
    fuellabbutton.innerHTML = 'Fuel Labs: +7500 FPS<br/>Cost: ' + fuelLabCost + '<br/>Obtained: ' + fuelLab
    fuelTimeMachineCost = Math.round(fuelTimeMachineCost)
    fueltimemachinebutton.innerHTML = 'Time Machines: +10000 FPS<br/>Cost: ' + fuelTimeMachineCost + '<br/>Obtained: ' + fuelTimeMachine
    prismCost = Math.round(prismCost)
    fuelprismbutton.innerHTML = 'Prisms: +15000 FPS<br/>Cost: ' + prismCost + '<br/>Obtained: ' + prism
    javascriptConsoleCost = Math.round(javascriptConsoleCost)
    javascriptconsolebutton.innerHTML = 'Javascript Consoles: +5000 FPS<br/>Cost: ' + javascriptConsoleCost + '<br/>Obtained: ' + javascriptConsole
    setTimeout(roundAll, 200)
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
    } else {
        cantafford.play()
    }
}

function fuelwizard() {
    if (fuel >= fuelWizardCost) {
        fuel = fuel - fuelWizardCost;
        fuelWizardCost = fuelWizardCost * (140 / 100)
        fuelPerSecond = fuelPerSecond + 750
        fuelWizard = fuelWizard + 1
        sellSound.play()
    } else {
        cantafford.play()
    }
}

function fuelshipment() {
    if (fuel >= fuelShipmentCost) {
        fuel = fuel - fuelShipmentCost;
        fuelShipmentCost = fuelShipmentCost * (140 / 100)
        fuelPerSecond = fuelPerSecond + 1000
        fuelShipment = fuelShipment + 1
        sellSound.play()
    } else {
        cantafford.play()
    }
}

function fuelportal() {
    if (fuel >= fuelPortalCost) {
        fuel = fuel - fuelPortalCost;
        fuelPortalCost = fuelPortalCost * (140 / 100)
        fuelPerSecond = fuelPerSecond + 5000
        fuelPortal = fuelPortal + 1
        sellSound.play()
    } else {
        cantafford.play()
    }
}

function fuellab() {
    if (fuel >= fuelLabCost) {
        fuel = fuel - fuelLabCost;
        fuelLabCost = fuelLabCost * (140 / 100)
        fuelPerSecond = fuelPerSecond + 7500
        fuelLab = fuelLab + 1
        sellSound.play()
    } else {
        cantafford.play()
    }
}

function fueltimemachine() {
    if (fuel >= fuelTimeMachineCost) {
        fuel = fuel - fuelTimeMachineCost;
        fuelTimeMachineCost = fuelTimeMachineCost * (140 / 100)
        fuelPerSecond = fuelPerSecond + 10000
        fuelTimeMachine = fuelTimeMachine + 1
        sellSound.play()
    } else {
        cantafford.play()
    }
}

function fuelprism() {
    if (fuel >= prismCost) {
        fuel = fuel - prismCost;
        prismCost = prismCost * (140 / 100)
        fuelPerSecond = fuelPerSecond + 15000
        prism = prism + 1
        sellSound.play()
    } else {
        cantafford.play()
    }
}

function javascriptconsole() {
    if (fuel >= javascriptConsoleCost) {
        fuel = fuel - javascriptConsoleCost;
        javascriptConsoleCost = javascriptConsoleCost * (140 / 100)
        fuelPerSecond = fuelPerSecond + 25000
        javascriptConsole = javascriptConsole + 1
        sellSound.play()
    } else {
        cantafford.play()
    }
}

function startMusic() {
    if (sound == true) {
        sound = false
        song0.pause()
        song1.pause()
        song2.pause()
        song3.pause()
        song4.pause()
        song5.pause()
        song6.pause()
        song7.pause()
        song8.pause()
        song9.pause()
        musicbutton.innerHTML = 'Play Music'
        nowplaying.innerHTML = 'Now Playing: Nothing!'
    } else {
        musicbutton.innerHTML = 'Pause Music'
        sound = true
        var x = Math.random()
        x = x * 10
        x = Math.round(x)
        //console.log(x)
        if (x == 0) {
            song0.play()
            nowplaying.innerHTML = 'Now Playing: Astroblk - Nothing Really matters that much to me anymore'
        }
        if (x == 1) {
            song1.play()
            nowplaying.innerHTML = 'Now Playing: Astroblk - Vancouver'
        }
        if (x == 2) {
            song2.play()
            nowplaying.innerHTML = 'Now Playing: Aviscerall - Sanctuary'
        }
        if (x == 3) {
            song3.play()
            nowplaying.innerHTML = 'Now Playing: Aviscerall - Coffee Shop'
        }
        if (x == 4) {
            song4.play()
            nowplaying.innerHTML = 'Now Playing: Whatever You Want (feat. Astroblk)'
        }
        if (x == 5) {
            song5.play()
            nowplaying.innerHTML = "Now Playing: Iam6teen - i'm fine, just tired"
        }
        if (x == 6) {
            song6.play()
            nowplaying.innerHTML = 'Now Playing: Linearwave - blossoming #3'
        }
        if (x == 7) {
            song7.play()
            nowplaying.innerHTML = 'Now Playing: Tune in with Chewie - Night Sky'
        }
        if (x == 8) {
            song8.play()
            nowplaying.innerHTML = 'Now Playing: Tune in With Chewie - Sweet Lullaby'
        }
        if (x == 9) {
            song9.play()
            nowplaying.innerHTML = 'Now Playing: Astroblk - Geneva'
        }
        if (x == 10) {
            song9.play()
            nowplaying.innerHTML = 'Now Playing: Astroblk - Geneva'
        }
    }
}

song0.addEventListener("ended", function() {
    sound = false
    //console.log('music has ended')
    startMusic()
})

song1.addEventListener("ended", function() {
    sound = false
    //console.log('music has ended')
    startMusic()
})

song2.addEventListener("ended", function() {
    sound = false
    //console.log('music has ended')
    startMusic();
})

song3.addEventListener("ended", function() {
    sound = false
    //console.log('music has ended')
    startMusic()
})

song4.addEventListener("ended", function() {
    sound = false
    //console.log('music has ended')
    startMusic()
})

song5.addEventListener("ended", function() {
    sound = false
    //console.log('music has ended')
    startMusic()
})

song6.addEventListener("ended", function() {
    sound = false
    //console.log('music has ended')
    startMusic()
})

song7.addEventListener("ended", function() {
    sound = false
    //console.log('music has ended')
    startMusic()
})

song8.addEventListener("ended", function() {
    sound = false
    //console.log('music has ended')
    startMusic()
})

song9.addEventListener("ended", function() {
    sound = false
    //console.log('music has ended')
    startMusic()
})

function save() {
    localStorage.setItem('fuel', JSON.stringify(fuel));
    localStorage.setItem('fuelPerSecond', JSON.stringify(fuelPerSecond));
    localStorage.setItem('pickaxes', JSON.stringify(pickaxes));
    localStorage.setItem('pickaxeCost', JSON.stringify(pickaxeCost));
    localStorage.setItem('miners', JSON.stringify(miners));
    localStorage.setItem('minerCost', JSON.stringify(minerCost));
    localStorage.setItem('armyOfMiners', JSON.stringify(armyOfMiners));
    localStorage.setItem('armyOfMinerCost', JSON.stringify(armyOfMinerCost));
    localStorage.setItem('fuelMines', JSON.stringify(fuelMines));
    localStorage.setItem('fuelMineCost', JSON.stringify(fuelMineCost));
    localStorage.setItem('fuelFactories', JSON.stringify(fuelFactories));
    localStorage.setItem('fuelFactoryCost', JSON.stringify(fuelFactoryCost));
    localStorage.setItem('fuelBank', JSON.stringify(fuelBank));
    localStorage.setItem('fuelBankCost', JSON.stringify(fuelBankCost));
    localStorage.setItem('fuelTemple', JSON.stringify(fuelTemple));
    localStorage.setItem('fuelTempleCost', JSON.stringify(fuelTempleCost));
    localStorage.setItem('fuelWizard', JSON.stringify(fuelWizard));
    localStorage.setItem('fuelWizardCost', JSON.stringify(fuelWizardCost));
    localStorage.setItem('fuelShipment', JSON.stringify(fuelShipment));
    localStorage.setItem('fuelShipmentCost', JSON.stringify(fuelShipmentCost));
    localStorage.setItem('fuelPortal', JSON.stringify(fuelPortal));
    localStorage.setItem('fuelPortalCost', JSON.stringify(fuelPortalCost));
    localStorage.setItem('fuelLab', JSON.stringify(fuelLab));
    localStorage.setItem('fuelLabCost', JSON.stringify(fuelLabCost));
    localStorage.setItem('fuelTimeMachine', JSON.stringify(fuelTimeMachine));
    localStorage.setItem('fuelTimeMachineCost', JSON.stringify(fuelTimeMachineCost));
    localStorage.setItem('prism', JSON.stringify(prism));
    localStorage.setItem('prismCost', JSON.stringify(prismCost));
    localStorage.setItem('javascriptConsole', JSON.stringify(javascriptConsole));
    localStorage.setItem('javascriptConsoleCost', JSON.stringify(javascriptConsoleCost));
    localStorage.setItem('donetutorial', JSON.stringify(donetutorial));
    setTimeout(save, 10000)
}

function load() {
    donetutorial = JSON.parse(localStorage.getItem('donetutorial'));
    fuel = JSON.parse(localStorage.getItem('fuel'));
    fuelPerSecond = JSON.parse(localStorage.getItem('fuelPerSecond'));
    pickaxes = JSON.parse(localStorage.getItem('pickaxes'));
    pickaxeCost = JSON.parse(localStorage.getItem('pickaxeCost'));
    miners = JSON.parse(localStorage.getItem('miners'));
    minerCost = JSON.parse(localStorage.getItem('minerCost'));
    armyOfMiners = JSON.parse(localStorage.getItem('armyOfMiners'));
    armyOfMinerCost = JSON.parse(localStorage.getItem('armyOfMinerCost'));
    fuelMines = JSON.parse(localStorage.getItem('fuelMines'));
    fuelMineCost = JSON.parse(localStorage.getItem('fuelMineCost'));
    fuelFactories = JSON.parse(localStorage.getItem('fuelFactories'));
    fuelFactoryCost = JSON.parse(localStorage.getItem('fuelFactoryCost'));
    fuelBank = JSON.parse(localStorage.getItem('fuelBank'));
    fuelBankCost = JSON.parse(localStorage.getItem('fuelBankCost'));
    fuelTemple = JSON.parse(localStorage.getItem('fuelTemple'));
    fuelTempleCost = JSON.parse(localStorage.getItem('fuelTempleCost'));
    fuelWizard = JSON.parse(localStorage.getItem('fuelWizard'));
    fuelWizardCost = JSON.parse(localStorage.getItem('fuelWizardCost'));
    fuelShipment = JSON.parse(localStorage.getItem('fuelShipment'));
    fuelShipmentCost = JSON.parse(localStorage.getItem('fuelShipmentCost'));
    fuelPortal = JSON.parse(localStorage.getItem('fuelPortal'));
    fuelPortalCost = JSON.parse(localStorage.getItem('fuelPortalCost'));
    fuelLab = JSON.parse(localStorage.getItem('fuelLab'));
    fuelLabCost = JSON.parse(localStorage.getItem('fuelLabCost'));
    fuelTimeMachine = JSON.parse(localStorage.getItem('fuelTimeMachine'));
    fuelTimeMachineCost = JSON.parse(localStorage.getItem('fuelTimeMachineCost'));
    prism = JSON.parse(localStorage.getItem('prism'));
    prismCost = JSON.parse(localStorage.getItem('prismCost'));
    javascriptConsole = JSON.parse(localStorage.getItem('javascriptConsole'));
    javascriptConsoleCost = JSON.parse(localStorage.getItem('javascriptConsoleCost'));
}

function reset() {
    if (confirm("Are you sure you want to reset all progress?")) {
        localStorage.removeItem("donetutorial");
        localStorage.removeItem("fuel");
        localStorage.removeItem("fuelPerSecond");
        localStorage.removeItem("pickaxes");
        localStorage.removeItem("pickaxeCost");
        localStorage.removeItem("miners");
        localStorage.removeItem("minerCost");
        localStorage.removeItem("armyOfMiners");
        localStorage.removeItem("armyOfMinerCost");
        localStorage.removeItem("fuelMines");
        localStorage.removeItem("fuelMineCost");
        localStorage.removeItem("fuelFactories");
        localStorage.removeItem("fuelFactoryCost");
        localStorage.removeItem("fuelBank");
        localStorage.removeItem("fuelBankCost");
        localStorage.removeItem("fuelTemple");
        localStorage.removeItem("fuelTempleCost");
        localStorage.removeItem("fuelWizard");
        localStorage.removeItem("fuelWizardCost");
        localStorage.removeItem("fuelShipment");
        localStorage.removeItem("fuelShipmentCost");
        localStorage.removeItem("fuelPortal");
        localStorage.removeItem("fuelPortalCost");
        localStorage.removeItem("fuelLab");
        localStorage.removeItem("fuelLabCost");
        localStorage.removeItem("fuelTimeMachine");
        localStorage.removeItem("fuelTimeMachineCost");
        localStorage.removeItem("prism");
        localStorage.removeItem("prismCost");
        localStorage.removeItem("javascriptConsole");
        localStorage.removeItem("javascriptConsoleCost");
        fuel = 0
        fuelPerSecond = 0
        pickaxes = 0
        pickaxeCost = 100
        miners = 0
        minerCost = 500
        armyOfMiners = 0
        armyOfMinerCost = 2000
        fuelMines = 0
        fuelMineCost = 5000
        fuelFactories = 0
        fuelFactoryCost = 10000
        fuelBank = 0
        fuelBankCost = 20000
        fuelTemple = 0
        fuelTempleCost = 50000
        fuelWizard = 0
        fuelWizardCost = 75000
        fuelShipment = 0
        fuelShipmentCost = 75000
        fuelPortal = 0
        fuelPortalCost = 75000
        fuelLab = 0
        fuelLabCost = 75000
        fuelTimeMachine = 0
        fuelTimeMachineCost = 100000
        prism = 0
        prismCost = 1500000
        javascriptConsole = 0
        javascriptConsoleCost = 2500000
    }
    else {}
}

function resetNoConf() {
    localStorage.removeItem("donetutorial");
    localStorage.removeItem("fuel");
    localStorage.removeItem("fuelPerSecond");
    localStorage.removeItem("pickaxes");
    localStorage.removeItem("pickaxeCost");
    localStorage.removeItem("miners");
    localStorage.removeItem("minerCost");
    localStorage.removeItem("armyOfMiners");
    localStorage.removeItem("armyOfMinerCost");
    localStorage.removeItem("fuelMines");
    localStorage.removeItem("fuelMineCost");
    localStorage.removeItem("fuelFactories");
    localStorage.removeItem("fuelFactoryCost");
    localStorage.removeItem("fuelBank");
    localStorage.removeItem("fuelBankCost");
    localStorage.removeItem("fuelTemple");
    localStorage.removeItem("fuelTempleCost");
    localStorage.removeItem("fuelWizard");
    localStorage.removeItem("fuelWizardCost");
    localStorage.removeItem("fuelShipment");
    localStorage.removeItem("fuelShipmentCost");
    localStorage.removeItem("fuelPortal");
    localStorage.removeItem("fuelPortalCost");
    localStorage.removeItem("fuelLab");
    localStorage.removeItem("fuelLabCost");
    localStorage.removeItem("fuelTimeMachine");
    localStorage.removeItem("fuelTimeMachineCost");
    localStorage.removeItem("prism");
    localStorage.removeItem("prismCost");
    localStorage.removeItem("javascriptConsole");
    localStorage.removeItem("javascriptConsoleCost");
    fuel = 0
    fuelPerSecond = 0
    pickaxes = 0
    pickaxeCost = 100
    miners = 0
    minerCost = 500
    armyOfMiners = 0
    armyOfMinerCost = 2000
    fuelMines = 0
    fuelMineCost = 5000
    fuelFactories = 0
    fuelFactoryCost = 10000
    fuelBank = 0
    fuelBankCost = 20000
    fuelTemple = 0
    fuelTempleCost = 50000
    fuelWizard = 0
    fuelWizardCost = 75000
    fuelShipment = 0
    fuelShipmentCost = 75000
    fuelPortal = 0
    fuelPortalCost = 75000
    fuelLab = 0
    fuelLabCost = 75000
    fuelTimeMachine = 0
    fuelTimeMachineCost = 100000
    prism = 0
    prismCost = 1500000
    javascriptConsole = 0
    javascriptConsoleCost = 2500000
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