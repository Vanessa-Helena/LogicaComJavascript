function RepeteFrutas() {
    var inFruta = document.getElementById('inFruta')
    var inNumero = document.getElementById('inNumero')
    var outFrutas = document.getElementById('outFrutas')

    var fruta = inFruta.value;
    var numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        alert("Número Inválido...");
        inNumero.focus();
        return;
    }

    var frutas = '';

    for (var i = 1; i <= numero; i++) {
        if (i % 2 == 1) {
            frutas = frutas + fruta; // na posição ímpar do i: fruta
        } else {
            frutas = frutas + "*"; // na posição par: *
        }
    }
    outFrutas.textContent = frutas; 


}
var btPreencher = document.getElementById('btPreencher')
btPreencher.addEventListener('click', RepeteFrutas)