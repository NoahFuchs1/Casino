let zufallszahl;
let GewählteOption;
let Geld = 100;
let Einsatz;



function zufall() {
    zufallszahl = Math.floor(Math.random() * 3) + 1;
    console.log(zufallszahl);
}


function eintrag1() {
    GewählteOption = 1;
}

function eintrag2() {
    GewählteOption = 2;
}

function eintrag3() {
    GewählteOption = 3;
}

function Reset() {
    Geld = 100;
    document.getElementById('heading').innerHTML = 'Dein Geld: ' + Geld + '€';
}

function Bestätigung() {
    Einsatz = document.getElementById('Einsatz').value;
    if (Einsatz > Geld) {
        alert('Du kannst nicht mehr Geld einsetzen als du hast.')
    }
    else {
        zufallszahl = Math.floor(Math.random() * 3) + 1;

        if (zufallszahl === 1) {
            let markierung = document.getElementById('Option1');

            markierung.classList.add('tempStyle');

            setTimeout(function () {
                markierung.classList.remove('tempStyle');
            }, 1000);

        }
        if (zufallszahl === 2) {
            let markierung = document.getElementById('Option2');

            markierung.classList.add('tempStyle');

            setTimeout(function () {
                markierung.classList.remove('tempStyle');
            }, 1000);

        }
        if (zufallszahl === 3) {
            let markierung = document.getElementById('Option3');

            markierung.classList.add('tempStyle');

            setTimeout(function () {
                markierung.classList.remove('tempStyle');
            }, 1000);

        }

        if (zufallszahl === GewählteOption) {
            let audioWin = document.getElementById('audioWin');
            audioWin.play();
            Geld = Geld + Einsatz * 3;
        }
        else {
            let audioFehler = document.getElementById('audioFehler');
            audioFehler.play();
            Geld = Geld - Einsatz;
        }
        if (Geld <= 0) {
            Geld = 0;
            alert('Du hast kein Geld mehr.')
        }
        document.getElementById('heading').innerHTML = 'Dein Geld: ' + Geld + '€';
    }

}