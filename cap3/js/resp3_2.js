// Ler a velocidade permitida em uma estrada
// Ler a velocidade de um condutor
// Se a velocidade for inferior a permitida ou igual informar "Sem Multa"
// Se a velocidade for até 20% maior da permitida informar "Multa Leve"
// Se a velocidade for superior a 20% da permitida informar "Multa Grave"

function multa() {
	var inPermitida = document.getElementById('inPermitida');
	var inCondutor = document.getElementById('inCondutor');
	var outSituacao = document.getElementById('outSituacao');

	permitida = Number(inPermitida.value);
	condutor = Number(inCondutor.value);

	outSituacao.textContent = "";

	if ((inPermitida.value == "" || inCondutor.value == "") || (isNaN(permitida) || isNaN(condutor))) {
		alert("Inserir informação válida");
		inPermitida.focus();
		return;
	}

	ateVinte = (permitida * 0.20);
	velocidade = ateVinte + permitida;

	if (condutor <= permitida) {
		outSituacao.textContent = "Situação: Sem Multa";
	}

	if (condutor >= permitida && condutor <= velocidade) {
		outSituacao.textContent = "Situação: Multa Leve";
	}

	if (condutor > velocidade ) {
		outSituacao.textContent = "Situação: Multa Grave";
	}
}
var btVerificar = document.getElementById('btVerificar');
btVerificar.addEventListener("click", multa);