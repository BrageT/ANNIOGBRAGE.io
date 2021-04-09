var formBestilling = document.getElementById("formBestilling");
var inpNavn = document.getElementById("inpNavn");
var inpAntallPersoner = document.getElementById("inpAntallPersoner");
var inpDato = document.getElementById("inpDato");
var inpMelding = document.getElementById("inpMelding")

formBestilling.onsubmit = function (evt){
    evt.preventDefault();
    console.log("bestillt")
    alert(inpNavn.value + " har nå bestilt for " + inpAntallPersoner.value + " den " + inpDato.value + " med meldingen " + inpMelding.value)
}

