// Ler um número
// Informar se o número é par ou impar
function parImpar() {
	var inNumber = document.getElementById('inNumber');
	var outResposta = document.getElementById('outResposta');

	num = Number(inNumber.value); 

	if (inNumber.value == "" || isNaN(num)) {
		alert("Insira um valor válido");
		inNumber.focus();
		return;
	}

	if (num % 2 == 0) {
		outResposta.textContent = "Resposta: " + num + " é Par"
	} else {
		outResposta.textContent = "Resposta: " + num + " é Impar"
	}
}
var btVerificar = document.getElementById('btVerificar');
btVerificar.addEventListener("click", parImpar);