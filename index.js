let zufallszahl;
let GewählteOption;
let Geld = 100;
let Einsatz;
let Gewinnermodus;





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
    Gewinnermodus = false;
}

function Bestätigung() {
    //Die Geldmenge kommt in die Variable Einsatz.
    Einsatz = document.getElementById('Einsatz').value;

    if (Einsatz > Geld) {
        alert('Du kannst nicht mehr Geld einsetzen als du hast.')
    }

    //Hier beginnen die normalen Ifs.
    else {
        //Gewinnermodus wird aktiviert für die 21.
        if (Einsatz === '21') {
            Gewinnermodus = true;
            console.log('Gewinnermodus aktiviert')
        }
        if (Einsatz === '30') {
            Gewinnermodus = false;
            console.log(Gewinnermodus)
        }
        if (Gewinnermodus === true) {
            ZufallObGewinner = Math.floor(Math.random() * 1.5) + 1;
            console.log(ZufallObGewinner);
            if (ZufallObGewinner === 1) {
                console.log('Du musst gewinnen.');
                zufallszahl = GewählteOption;
                console.log(zufallszahl);
            }
            else {
                zufallszahl = Math.floor(Math.random() * 3) + 1;
            }
        }

        else {
            zufallszahl = Math.floor(Math.random() * 3) + 1;
            console.log(zufallszahl);
        }

        //Die nächsten 3 ifs sind für die dunkle Farbe des richten Kasten da.
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
        //Die nächsten 3 ifs werten das Geld aus und machen die Töne.
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