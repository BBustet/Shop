var vWarenkorb = [];
var vAusgabe = "";
var vSumme = 0;

function fAusklappen() {
    /*Dafür hab ich 5 Stunden gebraucht um diese scheiße herauszufinden. Man muss aber2s beim ersten mal den Korb 2x klicken*/

    if (document.getElementById("idWarenkorb").style.visibility === "hidden") {
        document.getElementById("idWarenkorb").style.visibility = "visible";
    } else {
        document.getElementById("idWarenkorb").style.visibility = "hidden";
    }
}

/*Gibt sicher einfachere Wege aber der war für den Anfang am einfachsten*/
function fAddApfel() {
    vWarenkorb.push("1x Apfel.......................................................................1,50€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 1.5;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}

function fAddBananen() {
    vWarenkorb.push("1x Bananen................................................................0,28€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 0.28;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}

function fAddErdbeeren() {
    vWarenkorb.push("1x Erdbeeren.............................................................3,29€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 3.29;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}

function fAddBrötchen() {
    vWarenkorb.push("1x Sonntags Brötchen..........................................1,19€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 1.19;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}

function fAddToast() {
    vWarenkorb.push("1x American Sandwich.........................................1,39€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 1.39;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}

function fAddBrot() {
    vWarenkorb.push("1x Bauernbrot..........................................................0,99€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 0.99;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}

function fAddKinderriegel() {
    vWarenkorb.push("1x Kinder Riegel......................................................1,69€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 1.69;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}

function fAddPopcorn() {
    vWarenkorb.push("1x Popcorn süß........................................................1,89€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 1.89;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}

function fAddHaribo() {
    vWarenkorb.push("1x Haribo Goldbären.............................................1,19€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 1.19;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}

function fAddMilch() {
    vWarenkorb.push("1x Frische Vollmilch 3,5%.....................................0,99€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 0.99;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}

function fAddJoghurt() {
    vWarenkorb.push("1x Joghurt 3,5%.......................................................0,89€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 0.89;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}

function fAddActimel() {
    vWarenkorb.push("1x Actimel Classic....................................................2,29€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 2.29;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}

function fAddEis() {
    vWarenkorb.push("1x Mandel-Eis am Stiel........................................2,79€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 2.79;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}

function fAddPizza() {
    vWarenkorb.push("1x Pizza Pepperoni-Salame...............................1,99€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 1.99;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}

function fAddSpinat() {
    vWarenkorb.push("1x Rahmspinat........................................................0,79€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 0.79;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}

function fAddSalzstangen() {
    vWarenkorb.push("1x Salzstangen........................................................2,19€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 2.19;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}

function fAddChips() {
    vWarenkorb.push("1x Chipsfrisch Gesalzen.......................................1,99€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 1.99;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}

function fAddNüsse() {
    vWarenkorb.push("1x Erdnüsse geröstet & gesalzen....................4,69€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 4.69;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}

function fAddSchinkenwurst() {
    vWarenkorb.push("1x Schinkenwurst...................................................0,99€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 0.99;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}

function fAddFertiggericht() {
    vWarenkorb.push("1x Mettwurst mit Grünkohl Fertiggericht.....4,79€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 4.79;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}

function fAddLachs() {
    vWarenkorb.push("1x Räucherlachs......................................................4,79€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 4.79;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}

function fAddWasser() {
    vWarenkorb.push("1x Mineralwasser Classic.....................................0,27€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 0.27;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}

function fAddCola() {
    vWarenkorb.push("1x Coca-Cola............................................................1,49€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 1.49;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}

function fAddSaft() {
    vWarenkorb.push("1x Multivitamin-Saft..............................................1,45€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 1.45;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}

function fAddBier() {
    vWarenkorb.push("1x Diebels Alt Dose................................................0,99€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 0.99;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}

function fAddBerentzen() {
    vWarenkorb.push("1x Berentzen Saurer Apfel...................................7,99€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 7.99;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}

function fAddWhiskey() {
    vWarenkorb.push("1x Jack Daniel's Tennessee Whiskey.............22,99€");
    console.log(vWarenkorb);
    vAusgabe = vWarenkorb.join("<br />");
    vSumme = vSumme + 22.99;
    document.getElementById("WAusgabe").innerHTML = vAusgabe + "<br/><br/>-----------------------------------------------------<br/>SUMME:..................................................................." + vSumme.toFixed(2) + "€";
}
