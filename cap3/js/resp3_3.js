// Ler o valor de moedas depositados
// Informar o tempo de permanencia do veiculo no local
// Informar o troco se tiver
// Se o valor for inferior ao tempo minimo informa "Valor insuficiente"

function parquimetro() {
	var inValor = document.getElementById('inValor');
	var outTempo = document.getElementById('outTempo');
	var outTroco = document.getElementById('outTroco');

	var valor = Number(inValor.value);

	/*outTroco.textContent = "";
	outTempo.textContent = "";*/

	if (valor == "" || isNaN(valor)) {
		alert("Informar valor válido");
		inValor.focus();
		return;
	}

	if(valor < 1.00) {
		alert("Valor insuficiente");
		inValor.focus();
		return;
	}

	if(valor >= 1.00 && valor < 1.75) {
		troco = valor % 1;

		outTempo.textContent = "tempo: 30 min";
		outTroco.textContent = "Troco R$: " + troco.toFixed(2);
	}

}

var btConfirmar = document.getElementById('btConfirmar');
btConfirmar.addEventListener("click", parquimetro);