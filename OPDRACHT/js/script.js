function startGame() {
    console.log("Start van het spel!");
    console.log("------------------------");
    alert("Je speelt als Darwin, een speciale vis die buiten water ook kan leven. Jij bent je vriend Gumball kwijt geraakt, doordat Gumball's vader jou door de wc heeft doorgespoeld, omdat hij dacht dat je niet meer leefde.");
    alert("Je bent in de zee terecht gekomen. Wat doe je?");
    level1(prompt("Zwem verder en ga op zoek naar voedsel om tijdelijk te kunnen overleven. / Je gaat gelijk het strand zoeken om op land te komen, zodat jij naar je vriend Gumball kan gaan.", "\"Keuze 1\" of \"Keuze 2\"").toLowerCase());
}

function level1(data) {
    if (data === "keuze 1") {
        console.log("U heeft " + data + " gekozen.");
        alert("Je kiest ervoor om voedsel te zoeken.");
        alert("Je komt een krab tegen. Het kan zwemmen en valt je aan. Wat doe je?");
        level2(prompt("Je zwemt weg / Je vraagt aan de andere vissen ofdat ze je kunnen helpen", "\"Keuze 1\" of \"Keuze 2\"").toLowerCase());
    } else if (data === "keuze 2") {
        console.log("U heeft " + data + " gekozen.");
        alert("Je kiest ervoor om gelijk het strand te gaan zoeken.");
        alert("Je zwemt een heel groot stuk richting het land. Maar plots komt er een grote witte haai op je afzwemmen. Wat doe je?");
        level3(prompt("Je ontwijkt de aanval van de haai en schuilt in een ijzeren bootje waar de haai niet bij kan komen. / Je vecht terug", "\"Keuze 1\" of \"Keuze 2\"").toLowerCase());
    }
}

function level2(data) {
    if (data === "keuze 1") {
        console.log("U heeft " + data + " gekozen.");
        alert("Je zwemde zo snel als je kon weg, de krab is je hierdoor kwijtgeraakt");
        alert("Je bent ontsnapt en zwemt verder, waarna je een gezonken boot tegen komt. Wat doe je?");
        level4(prompt("Ga in het schip kijken / Niet naar het schip gaan", "\"Keuze 1\" of \"Keuze 2\"").toLowerCase());
    } else if (data === "keuze 2") {
        console.log("U heeft " + data + " gekozen.");
        alert("Je vraagt aan de andere vissen ofdat ze je kunnen komen helpen om de krab te verslaan. Maar tevergeefs de krab haalde zijn kameraden erbij, en nu zijn jullie allemaal opgegeten");
        alert("Je bent dood gegaan.");
        reloadWebPage();
    }
}

function level3(data) {
    if (data === "keuze 1") {
        console.log("U heeft " + data + " gekozen.");
        alert("Je hebt de aanval ontweken en bent onder de boot gaan liggen");
        alert("De haai dwaalt af en je gaat verder met zwemmen naar het land");
        alert("Je bereik het strand, maar je longen zijn nog niet geëvolueerd dat je kan ademen boven water.");
        alert("Je bent dood gegaan.");
        reloadWebPage();
    } else if (data === "keuze 2") {
        console.log("U heeft " + data + " gekozen.");
        alert("Je hebt gewonnen van de haai, maar bent uiteindelijk doodgegaan door de bloedingen die je had gekregen.");
        alert("Je bent dood gegaan.");
        reloadWebPage();
    }
}

function level4(data) {
    if (data === "keuze 1") {
        console.log("U heeft " + data + " gekozen.");
        alert("Je bent bij het schip en gaat nu naar binnen");
        alert("Je bent het schip binnengezwommen en je vind er allerlei kastjes. Darwin maakte de kastjes open en er lag eten en een groot harpoengeweer in met een harpoen. Je neemt dit allemaal mee want het kan van pas komen. Wat doe je nu?");
        level5(prompt("Ga je naar het strand? / Terugzwemmen naar de plek waar de krab zich voor het laatst had laten zien").toLowerCase());
    }
    else if (data === "keuze 2") {
        console.log("U heeft " + data + " gekozen.");
        alert("Je bent verhongerd, en dus doodgegaan.");
        reloadWebPage();
    }
}

function level5(data) {
    if (data === "keuze 1") {
        console.log("U heeft " + data + " gekozen.");
        alert("Je zwemt naar het strand en komt aan land. Je hebt gewonnen!");
    }
    else if (data === "keuze 2") {
        alert("Je bent doodgegaan, de krab zat in zijn camouflage vorm, en je probeerde nog optijd te schieten maar tevergeefs. De krab heeft je gedood.");
        reloadWebPage();
    }
}

function reloadWebPage() {
    window.location.reload();
}