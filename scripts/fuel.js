//Declares all variables
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
var fuelShipmentCost = 100000
var fuelPortal = 0
var fuelPortalCost = 500000
var fuelLab = 0
var fuelLabCost = 750000
var fuelTimeMachine = 0
var fuelTimeMachineCost = 1000000
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
var sfx = false
var donetutorial = false
var banned = false

//-----------------------------------------------------------------------------------------------------------------------------------------
//Matisse and Colton made this section

// Other Random Stuff

// This was used to find the lengths of the SVG intro
//function svglength() {
//    const logo = document.querySelectorAll('#logo path');
//    for (let i = 0; i < logo.length; i++){
//        console.log('Letter ' + i + ' is ' + logo[i].getTotalLength());
//    }
//}

// Function that happens on startup - Calls a bunch of other functions
function begin() {
    load();
    checkForBan();
    tutorial();
    updateStuff();
    giveFuel();
    checkForAfford();
    cheatPrevention();
    saveInterval();
    //svglength();
}

// Gives fuel when fuel icon is clicked
function fuelClick() {
    if (fuelPerSecond >= 10) {
        fuel = fuel + (fuelPerSecond/2)
    }
    else {
        fuel++
    }
    clickSound();
}

// Shows tutorial if they haven't seen it already
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
            }
        } else {
            donetutorial = true
        }
    }, 10000)
}

//-----------------------------------------------------------------------------------------------------------------------------------------
// Colton made this section
// Cheat Prevention

// Logs some stuff in console at the beginning
function cheatPrevention() {
    console.log("Ahh, well you came here to cheat.")
    console.log("We expected that, and there's really nothing we can do to stop you")
    console.log("So, we made it easier for you...")
    console.log("Actually, we have a full function dedicated to you!")
    console.log("Use the function 'ruinTheFun()' to unlock everything")
}

// If they run the function, resets all progress, bans them from playing
function ruinTheFun() {
    banned = true
    resetNoConf();
    forceSave();
    document.title = "Banned."
    console.log("Banned.")
    document.body.innerHTML = '';
    return ("You have been banned from accessing Fuel Clicker -- Next time don't cheat.");
}

// Checks to see if user is banned
function checkForBan() {
    if (banned == true) {
        ruinTheFun();
    }
}

//--------------------------------------------------------------------------------------------------------------------------------------------------
// Colton Made this section
// Repeating Functions

// Updates webpage title, fuel counter, fuel per second counter.
function updateStuff() {
    fuel = Math.round(fuel)
    var fuelcount = document.getElementById('fuelcount');
    fuelcount.innerHTML = "Fuel: " + fuel;
    var fuelsecond = document.getElementById('fuelpersecond')
    fuelsecond.innerHTML = "Fuel Per Second: " + fuelPerSecond
    document.title = fuel
    setTimeout(updateStuff, 100)
}

// Checks to see if you can afford the upgrades, depending on whether you can/cant, different css attributes are applied to the button
function checkForAfford() {
    // checks to see if you can afford the upgrade
    if (fuel < pickaxeCost) {
        // if you cant, it changes the opacity to 0.6 and on mouseover, the not-allowed cursor
        document.getElementById("pickaxebutton").style.opacity = '0.6'
        document.getElementById("pickaxebutton").style.cursor = 'not-allowed'
    } else {
        // if you can afford it, it changes the opacity back to 1 and the cursor back to regular
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
    if (fuel < prismCost) {
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

//gives the fuel per second every second
function giveFuel() {
    fuel = fuel + fuelPerSecond
    setTimeout(giveFuel, 1000)
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------
// Colton Made this section
// Upgrades

// Pickaxe
function pickaxe() {
    // checks if you have more fuel than the cost of the upgrade
    if (fuel >= pickaxeCost) {
        // subtracts the cost of the upgrade
        fuel = fuel - pickaxeCost;
        // raises the price of the upgrade (rounded)
        pickaxeCost = Math.round(pickaxeCost * (200 / 100))
        // adds to fuel per second
        fuelPerSecond = fuelPerSecond + 1
        // adds 1 to the amount currently owned
        pickaxes++
        // calls sellingSound function
        sellingSound();
        // pushes new price to DOM
        pickaxebutton.innerHTML = 'Pickaxe: +1 FPS<br/>Cost: ' + pickaxeCost + '<br/>Obtained: ' + pickaxes
    } else {
        // if the user cant afford the upgrade, it calls the cannotAffordSound function
        cannotAffordSound();
    }
}

// Miner
function miner() {
    if (fuel >= minerCost) {
        fuel = fuel - minerCost;
        minerCost = Math.round(minerCost * (200 / 100))
        fuelPerSecond = fuelPerSecond + 5
        miners++
        minerbutton.innerHTML = 'Miner: +5 FPS<br/>Cost: ' + minerCost + '<br/>Obtained: ' + miners
        sellingSound();
    } else {
        cannotAffordSound();
    }
}

// Army Of Miners
function armyofminers() {
    if (fuel >= armyOfMinerCost) {
        fuel = fuel - armyOfMinerCost;
        armyOfMinerCost = Math.round(armyOfMinerCost * (200 / 100))
        fuelPerSecond = fuelPerSecond + 20
        armyOfMiners++
        armyofminersbutton.innerHTML = 'Armies Of Miners: +20 FPS<br/>Cost: ' + armyOfMinerCost + '<br/>Obtained: ' + armyOfMiners
        sellingSound();
    } else {
        cannotAffordSound();
    }
}

// Fuel Mines
function fuelmine() {
    if (fuel >= fuelMineCost) {
        fuel = fuel - fuelMineCost;
        fuelMineCost = Math.round(fuelMineCost * (200 / 100))
        fuelPerSecond = fuelPerSecond + 50
        fuelMines++
        fuelminebutton.innerHTML = 'Fuel Mines: +50 FPS<br/>Cost: ' + fuelMineCost + '<br/>Obtained: ' + fuelMines
        sellingSound();
    } else {
        cannotAffordSound();
    }
}

// Fuel Factories
function fuelfactory() {
    if (fuel >= fuelFactoryCost) {
        fuel = fuel - fuelFactoryCost;
        fuelFactoryCost = Math.round(fuelFactoryCost * (200 / 100))
        fuelPerSecond = fuelPerSecond + 100
        fuelFactories++
        fuelfactorybutton.innerHTML = 'Fuel Factories: +100 FPS<br/>Cost: ' + fuelFactoryCost + '<br/>Obtained: ' + fuelFactories
        sellingSound();
    } else {
        cannotAffordSound();
    }
}

// Fuel Banks
function fuelbank() {
    if (fuel >= fuelBankCost) {
        fuel = fuel - fuelBankCost;
        fuelBankCost = Math.round(fuelBankCost * (200 / 100))
        fuelPerSecond = fuelPerSecond + 200
        fuelBank++
        fuelbankbutton.innerHTML = 'Fuel Banks: +200 FPS<br/>Cost: ' + fuelBankCost + '<br/>Obtained: ' + fuelBank
        sellingSound();
    } else {
        cannotAffordSound();
    }
}

// Fuel Temples
function fueltemple() {
    if (fuel >= fuelTempleCost) {
        fuel = fuel - fuelTempleCost;
        fuelTempleCost = Math.round(fuelTempleCost * (200 / 100))
        fuelPerSecond = fuelPerSecond + 500
        fuelTemple++
        fueltemplebutton.innerHTML = 'Fuel Temples: +500 FPS<br/>Cost: ' + fuelTempleCost + '<br/>Obtained: ' + fuelTemple
        sellingSound();
    } else {
        cannotAffordSound();
    }
}

// Fuel Wizards
function fuelwizard() {
    if (fuel >= fuelWizardCost) {
        fuel = fuel - fuelWizardCost;
        fuelWizardCost = Math.round(fuelWizardCost * (200 / 100))
        fuelPerSecond = fuelPerSecond + 750
        fuelWizard++
        fuelwizardbutton.innerHTML = 'Fuel Wizards: +750 FPS<br/>Cost: ' + fuelWizardCost + '<br/>Obtained: ' + fuelWizard
        sellingSound();
    } else {
        cannotAffordSound();
    }
}

// Fuel Shipments
function fuelshipment() {
    if (fuel >= fuelShipmentCost) {
        fuel = fuel - fuelShipmentCost;
        fuelShipmentCost = Math.round(fuelShipmentCost * (200 / 100))
        fuelPerSecond = fuelPerSecond + 1000
        fuelShipment++
        fuelshipmentbutton.innerHTML = 'Fuel Shipment: +1000 FPS<br/>Cost: ' + fuelShipmentCost + '<br/>Obtained: ' + fuelShipment
        sellingSound();
    } else {
        cannotAffordSound();
    }
}

// Fuel Portals
function fuelportal() {
    if (fuel >= fuelPortalCost) {
        fuel = fuel - fuelPortalCost;
        fuelPortalCost = Math.round(fuelPortalCost * (200 / 100))
        fuelPerSecond = fuelPerSecond + 5000
        fuelPortal++
        fuelportalbutton.innerHTML = 'Fuel Portals: +5000 FPS<br/>Cost: ' + fuelPortalCost + '<br/>Obtained: ' + fuelPortal
        sellingSound();
    } else {
        cannotAffordSound();
    }
}

// Fuel Labs
function fuellab() {
    if (fuel >= fuelLabCost) {
        fuel = fuel - fuelLabCost;
        fuelLabCost = Math.round(fuelLabCost * (200 / 100))
        fuelPerSecond = fuelPerSecond + 7500
        fuelLab++
        fuellabbutton.innerHTML = 'Fuel Labs: +7500 FPS<br/>Cost: ' + fuelLabCost + '<br/>Obtained: ' + fuelLab
        sellingSound();
    } else {
        cannotAffordSound();
    }
}

// Time Machines
function fueltimemachine() {
    if (fuel >= fuelTimeMachineCost) {
        fuel = fuel - fuelTimeMachineCost;
        fuelTimeMachineCost = Math.round(fuelTimeMachineCost * (200 / 100))
        fuelPerSecond = fuelPerSecond + 10000
        fuelTimeMachine++
        fueltimemachinebutton.innerHTML = 'Time Machines: +10000 FPS<br/>Cost: ' + fuelTimeMachineCost + '<br/>Obtained: ' + fuelTimeMachine
        sellingSound();
    } else {
        cannotAffordSound();
    }
}

// Prisms
function fuelprism() {
    if (fuel >= prismCost) {
        fuel = fuel - prismCost;
        prismCost = Math.round(prismCost * (200 / 100))
        fuelPerSecond = fuelPerSecond + 15000
        prism++
        fuelprismbutton.innerHTML = 'Prisms: +15000 FPS<br/>Cost: ' + prismCost + '<br/>Obtained: ' + prism
        sellingSound();
    } else {
        cannotAffordSound();
    }
}

// Javascript Consoles
function javascriptconsole() {
    if (fuel >= javascriptConsoleCost) {
        fuel = fuel - javascriptConsoleCost;
        javascriptConsoleCost = Math.round(javascriptConsoleCost * (200 / 100))
        fuelPerSecond = fuelPerSecond + 25000
        javascriptConsole++
        javascriptconsolebutton.innerHTML = 'Javascript Consoles: +25000 FPS<br/>Cost: ' + javascriptConsoleCost + '<br/>Obtained: ' + javascriptConsole
        sellingSound();
    } else {
        cannotAffordSound();
    }
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------
// Colton & Matisse made this section
// Music

// Plays/Stops music dependent on whether music is toggled on or off
function startMusic() {
    // if sound is true and the user clicks the sound toggle button, set sound to false, pause all music, change button to say off, and change text to say it's playing nothing
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
        musicbutton.innerHTML = 'Music | Off'
    } else {
        // if sound is false and the user clicks the sound toggle button, change button to say on, set sound to true, pick a random number 0-9, and play the corresponding song
        var songs = [
            song0, song1, song2, song3, song4, song5, song6, song7, song8, song9,
        ];
        musicbutton.innerHTML = 'Music | On'
        sound = true
        var playing = songs[Math.floor(Math.random() * songs.length)]
        playing.currentTime = 0
        playing.play()
    }
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------
//Matisse made this section

// SFX

// Toggles SFX
function startSfx() {
    if (sfx == true) {
        sfx = false
        sfxbutton.innerHTML = 'SFX | Off'
    } else {
        sfx = true
        sfxbutton.innerHTML = 'SFX | On'
    }
}

// Plays click sound dependent on whether SFX is toggled on or off
function clickSound() {
    if (sfx == true) {
        click.play()
    }
}

// Plays sell/buy sound dependent on whether SFX is toggled on or off
function sellingSound() {
    if (sfx == true) {
        sellSound.play()
    }
}

// Plays cannot afford sound dependent on whether SFX is toggled on or off
function cannotAffordSound() {
    if (sfx == true) {
        cantafford.play()
    }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------
// Matisse made this section
// Progress Save/Load

// Force Saves:
function forceSave() {
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
    localStorage.setItem('banned', JSON.stringify(banned));
}

// Saves every 5 seconds:
function saveInterval() {
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
    localStorage.setItem('banned', JSON.stringify(banned));
    setTimeout(saveInterval, 5000)
}

// Load:
function load() {
    if (localStorage.getItem("pickaxeCost") == null) {
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
        fuelShipmentCost = 100000
        fuelPortal = 0
        fuelPortalCost = 500000
        fuelLab = 0
        fuelLabCost = 750000
        fuelTimeMachine = 0
        fuelTimeMachineCost = 1000000
        prism = 0
        prismCost = 1500000
        javascriptConsole = 0
        javascriptConsoleCost = 2500000
        banned = false
        pickaxebutton.innerHTML = 'Pickaxe: +1 FPS<br/>Cost: ' + pickaxeCost + '<br/>Obtained: ' + pickaxes
        minerbutton.innerHTML = 'Miner: +5 FPS<br/>Cost: ' + minerCost + '<br/>Obtained: ' + miners
        armyofminersbutton.innerHTML = 'Armies Of Miners: +20 FPS<br/>Cost: ' + armyOfMinerCost + '<br/>Obtained: ' + armyOfMiners
        fuelminebutton.innerHTML = 'Fuel Mines: +50 FPS<br/>Cost: ' + fuelMineCost + '<br/>Obtained: ' + fuelMines
        fuelfactorybutton.innerHTML = 'Fuel Factories: +100 FPS<br/>Cost: ' + fuelFactoryCost + '<br/>Obtained: ' + fuelFactories
        fuelbankbutton.innerHTML = 'Fuel Banks: +200 FPS<br/>Cost: ' + fuelBankCost + '<br/>Obtained: ' + fuelBank
        fueltemplebutton.innerHTML = 'Fuel Temples: +500 FPS<br/>Cost: ' + fuelTempleCost + '<br/>Obtained: ' + fuelTemple
        fuelwizardbutton.innerHTML = 'Fuel Wizards: +750 FPS<br/>Cost: ' + fuelWizardCost + '<br/>Obtained: ' + fuelWizard
        fuelshipmentbutton.innerHTML = 'Fuel Shipment: +1000 FPS<br/>Cost: ' + fuelShipmentCost + '<br/>Obtained: ' + fuelShipment
        fuelportalbutton.innerHTML = 'Fuel Portals: +5000 FPS<br/>Cost: ' + fuelPortalCost + '<br/>Obtained: ' + fuelPortal
        fuellabbutton.innerHTML = 'Fuel Labs: +7500 FPS<br/>Cost: ' + fuelLabCost + '<br/>Obtained: ' + fuelLab
        fueltimemachinebutton.innerHTML = 'Time Machines: +10000 FPS<br/>Cost: ' + fuelTimeMachineCost + '<br/>Obtained: ' + fuelTimeMachine
        fuelprismbutton.innerHTML = 'Prisms: +15000 FPS<br/>Cost: ' + prismCost + '<br/>Obtained: ' + prism
        javascriptconsolebutton.innerHTML = 'Javascript Consoles: +25000 FPS<br/>Cost: ' + javascriptConsoleCost + '<br/>Obtained: ' + javascriptConsole
    } else {
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
        banned = JSON.parse(localStorage.getItem('banned'));
        pickaxebutton.innerHTML = 'Pickaxe: +1 FPS<br/>Cost: ' + pickaxeCost + '<br/>Obtained: ' + pickaxes
        minerbutton.innerHTML = 'Miner: +5 FPS<br/>Cost: ' + minerCost + '<br/>Obtained: ' + miners
        armyofminersbutton.innerHTML = 'Armies Of Miners: +20 FPS<br/>Cost: ' + armyOfMinerCost + '<br/>Obtained: ' + armyOfMiners
        fuelminebutton.innerHTML = 'Fuel Mines: +50 FPS<br/>Cost: ' + fuelMineCost + '<br/>Obtained: ' + fuelMines
        fuelfactorybutton.innerHTML = 'Fuel Factories: +100 FPS<br/>Cost: ' + fuelFactoryCost + '<br/>Obtained: ' + fuelFactories
        fuelbankbutton.innerHTML = 'Fuel Banks: +200 FPS<br/>Cost: ' + fuelBankCost + '<br/>Obtained: ' + fuelBank
        fueltemplebutton.innerHTML = 'Fuel Temples: +500 FPS<br/>Cost: ' + fuelTempleCost + '<br/>Obtained: ' + fuelTemple
        fuelwizardbutton.innerHTML = 'Fuel Wizards: +750 FPS<br/>Cost: ' + fuelWizardCost + '<br/>Obtained: ' + fuelWizard
        fuelshipmentbutton.innerHTML = 'Fuel Shipment: +1000 FPS<br/>Cost: ' + fuelShipmentCost + '<br/>Obtained: ' + fuelShipment
        fuelportalbutton.innerHTML = 'Fuel Portals: +5000 FPS<br/>Cost: ' + fuelPortalCost + '<br/>Obtained: ' + fuelPortal
        fuellabbutton.innerHTML = 'Fuel Labs: +7500 FPS<br/>Cost: ' + fuelLabCost + '<br/>Obtained: ' + fuelLab
        fueltimemachinebutton.innerHTML = 'Time Machines: +10000 FPS<br/>Cost: ' + fuelTimeMachineCost + '<br/>Obtained: ' + fuelTimeMachine
        fuelprismbutton.innerHTML = 'Prisms: +15000 FPS<br/>Cost: ' + prismCost + '<br/>Obtained: ' + prism
        javascriptconsolebutton.innerHTML = 'Javascript Consoles: +25000 FPS<br/>Cost: ' + javascriptConsoleCost + '<br/>Obtained: ' + javascriptConsole
    }
}

//-------------------------------------------------------------------------------------------------------------------------------------
// Colton Made this section
// Resets

// Resets all data (confirmation)
function reset() {
    // Asks the user if their sure
    if (confirm("Are you sure you want to reset all progress?")) {
        // Removes everything from Local Storage (So user can't restart app and have progress saved)
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
        // Sets all variables back to default (So current game progress is wiped)
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
        fuelShipmentCost = 100000
        fuelPortal = 0
        fuelPortalCost = 500000
        fuelLab = 0
        fuelLabCost = 750000
        fuelTimeMachine = 0
        fuelTimeMachineCost = 1000000
        prism = 0
        prismCost = 1500000
        javascriptConsole = 0
        javascriptConsoleCost = 2500000
        // Pushes new changes to DOM
        pickaxebutton.innerHTML = 'Pickaxe: +1 FPS<br/>Cost: ' + pickaxeCost + '<br/>Obtained: ' + pickaxes
        minerbutton.innerHTML = 'Miner: +5 FPS<br/>Cost: ' + minerCost + '<br/>Obtained: ' + miners
        armyofminersbutton.innerHTML = 'Armies Of Miners: +20 FPS<br/>Cost: ' + armyOfMinerCost + '<br/>Obtained: ' + armyOfMiners
        fuelminebutton.innerHTML = 'Fuel Mines: +50 FPS<br/>Cost: ' + fuelMineCost + '<br/>Obtained: ' + fuelMines
        fuelfactorybutton.innerHTML = 'Fuel Factories: +100 FPS<br/>Cost: ' + fuelFactoryCost + '<br/>Obtained: ' + fuelFactories
        fuelbankbutton.innerHTML = 'Fuel Banks: +200 FPS<br/>Cost: ' + fuelBankCost + '<br/>Obtained: ' + fuelBank
        fueltemplebutton.innerHTML = 'Fuel Temples: +500 FPS<br/>Cost: ' + fuelTempleCost + '<br/>Obtained: ' + fuelTemple
        fuelwizardbutton.innerHTML = 'Fuel Wizards: +750 FPS<br/>Cost: ' + fuelWizardCost + '<br/>Obtained: ' + fuelWizard
        fuelshipmentbutton.innerHTML = 'Fuel Shipment: +1000 FPS<br/>Cost: ' + fuelShipmentCost + '<br/>Obtained: ' + fuelShipment
        fuelportalbutton.innerHTML = 'Fuel Portals: +5000 FPS<br/>Cost: ' + fuelPortalCost + '<br/>Obtained: ' + fuelPortal
        fuellabbutton.innerHTML = 'Fuel Labs: +7500 FPS<br/>Cost: ' + fuelLabCost + '<br/>Obtained: ' + fuelLab
        fueltimemachinebutton.innerHTML = 'Time Machines: +10000 FPS<br/>Cost: ' + fuelTimeMachineCost + '<br/>Obtained: ' + fuelTimeMachine
        fuelprismbutton.innerHTML = 'Prisms: +15000 FPS<br/>Cost: ' + prismCost + '<br/>Obtained: ' + prism
        javascriptconsolebutton.innerHTML = 'Javascript Consoles: +25000 FPS<br/>Cost: ' + javascriptConsoleCost + '<br/>Obtained: ' + javascriptConsole
    }
}

// Resets all data (no confirmation)
function resetNoConf() {
    // Removes everything from Local Storage (So user can't restart app and have progress saved)
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
    // Sets all variables back to default (So current game progress is wiped)
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
    fuelShipmentCost = 100000
    fuelPortal = 0
    fuelPortalCost = 500000
    fuelLab = 0
    fuelLabCost = 750000
    fuelTimeMachine = 0
    fuelTimeMachineCost = 1000000
    prism = 0
    prismCost = 1500000
    javascriptConsole = 0
    javascriptConsoleCost = 2500000
    // Force Saves
    forceSave()
    // Pushes new changes to DOM
    pickaxebutton.innerHTML = 'Pickaxe: +1 FPS<br/>Cost: ' + pickaxeCost + '<br/>Obtained: ' + pickaxes
    minerbutton.innerHTML = 'Miner: +5 FPS<br/>Cost: ' + minerCost + '<br/>Obtained: ' + miners
    armyofminersbutton.innerHTML = 'Armies Of Miners: +20 FPS<br/>Cost: ' + armyOfMinerCost + '<br/>Obtained: ' + armyOfMiners
    fuelminebutton.innerHTML = 'Fuel Mines: +50 FPS<br/>Cost: ' + fuelMineCost + '<br/>Obtained: ' + fuelMines
    fuelfactorybutton.innerHTML = 'Fuel Factories: +100 FPS<br/>Cost: ' + fuelFactoryCost + '<br/>Obtained: ' + fuelFactories
    fuelbankbutton.innerHTML = 'Fuel Banks: +200 FPS<br/>Cost: ' + fuelBankCost + '<br/>Obtained: ' + fuelBank
    fueltemplebutton.innerHTML = 'Fuel Temples: +500 FPS<br/>Cost: ' + fuelTempleCost + '<br/>Obtained: ' + fuelTemple
    fuelwizardbutton.innerHTML = 'Fuel Wizards: +750 FPS<br/>Cost: ' + fuelWizardCost + '<br/>Obtained: ' + fuelWizard
    fuelshipmentbutton.innerHTML = 'Fuel Shipment: +1000 FPS<br/>Cost: ' + fuelShipmentCost + '<br/>Obtained: ' + fuelShipment
    fuelportalbutton.innerHTML = 'Fuel Portals: +5000 FPS<br/>Cost: ' + fuelPortalCost + '<br/>Obtained: ' + fuelPortal
    fuellabbutton.innerHTML = 'Fuel Labs: +7500 FPS<br/>Cost: ' + fuelLabCost + '<br/>Obtained: ' + fuelLab
    fueltimemachinebutton.innerHTML = 'Time Machines: +10000 FPS<br/>Cost: ' + fuelTimeMachineCost + '<br/>Obtained: ' + fuelTimeMachine
    fuelprismbutton.innerHTML = 'Prisms: +15000 FPS<br/>Cost: ' + prismCost + '<br/>Obtained: ' + prism
    javascriptconsolebutton.innerHTML = 'Javascript Consoles: +25000 FPS<br/>Cost: ' + javascriptConsoleCost + '<br/>Obtained: ' + javascriptConsole
}

//-----------------------------------------------------------------------------------------------------------------------------------
// Colton did animation -- Matisse made music checks
// Listeners

// Waits for DOM to be loaded -- does beginning "Clicker" animation
document.addEventListener('DOMContentLoaded', () => {
    begin();
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });
        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 6500)
    })
})

// Checks of song0 (Astroblk - Nothing Really matters that much to me anymore) has ended -- if ended, it starts a new song (startMusic)
song0.addEventListener("ended", function() {
    sound = false
    //console.log('music has ended')
    startMusic()
})

// Checks of song1 (Astroblk - Vancouver) has ended -- if ended, it starts a new song (startMusic)
song1.addEventListener("ended", function() {
    sound = false
    //console.log('music has ended')
    startMusic()
})

// Checks of song2 (Aviscerall - Sanctuary) has ended -- if ended, it starts a new song (startMusic)
song2.addEventListener("ended", function() {
    sound = false
    //console.log('music has ended')
    startMusic();
})

// Checks of song3 (Aviscerall - Coffee Shop) has ended -- if ended, it starts a new song (startMusic)
song3.addEventListener("ended", function() {
    sound = false
    //console.log('music has ended')
    startMusic()
})

// Checks of song4 (Whatever You Want (feat. Astroblk)) has ended -- if ended, it starts a new song (startMusic)
song4.addEventListener("ended", function() {
    sound = false
    //console.log('music has ended')
    startMusic()
})

// Checks of song5 (Iam6teen - i'm fine, just tired) has ended -- if ended, it starts a new song (startMusic)
song5.addEventListener("ended", function() {
    sound = false
    //console.log('music has ended')
    startMusic()
})

// Checks of song6 (Linearwave - blossoming #3) has ended -- if ended, it starts a new song (startMusic)
song6.addEventListener("ended", function() {
    sound = false
    //console.log('music has ended')
    startMusic()
})

// Checks of song7 (Tune in with Chewie - Night Sky) has ended -- if ended, it starts a new song (startMusic)
song7.addEventListener("ended", function() {
    sound = false
    //console.log('music has ended')
    startMusic()
})

// Checks of song8 (Tune in With Chewie - Sweet Lullaby) has ended -- if ended, it starts a new song (startMusic)
song8.addEventListener("ended", function() {
    sound = false
    //console.log('music has ended')
    startMusic()
})

// Checks of song9 (Astroblk - Geneva) has ended -- if ended, it starts a new song (startMusic)
song9.addEventListener("ended", function() {
    sound = false
    //console.log('music has ended')
    startMusic()
})