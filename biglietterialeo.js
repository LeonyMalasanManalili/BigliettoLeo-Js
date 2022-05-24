// Creo delle variabili

let percorrenzaKm = parseInt(prompt("Inserisci i kilometraggio del viaggio"))
let etaPasseggero = parseInt(prompt("Inserisci Eta del Passeggero"))

// 0.8 e 0.6 perché verrano moltiplicati per il prezzo abbreviando i passaggi. (anzicché fare prezzo * 20% / 100 e sottrarlo al prezzo)
const scontoMinori = 0.8
const scontoAnziani = 0.6

// Controllo se i valori inseriti sono numeri
if(isNaN(percorrenzaKm) || isNaN(etaPasseggero)) document.getElementById("prezzobiglietto").innerHTML="I valori inseriti non sono dei numeri."

//variabile del prezzo
//let prezzo = (percorrenzaKm)*0.21;

let prezzoKm = 0.21

// if(etaPasseggero < 18) prezzo = prezzo*scontoMinori 

// if(etaPasseggero >= 65) prezzo = prezzo*scontoAnziani

// //stampa del risultato

// document.getElementById("prezzobiglietto").innerHTML=`il costo del biglietto è : ${prezzo}€`



/* Alternativa Corta */

const sconto = etaPasseggero < 18 ? 0.8 : etaPasseggero >= 65 ? 0.6 :1

document.getElementById("prezzobiglietto").innerHTML=`Chilometri da percorrere: ${percorrenzaKm} <br> eta del passeggero: ${etaPasseggero} <br> Sconto applicato = ${Math.ceil((1 - sconto)*100)}% <br> Prezzo Biglietto = ${percorrenzaKm*prezzoKm*sconto}`