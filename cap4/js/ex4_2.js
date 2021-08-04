function listaNumeros() {
	// cria referência aos elementos que a function irá manipular
	var inNumero = document.getElementById('inNumero');
	var outRespposta = document.getElementById('outRespposta');

	var numero = Number(inNumero.value); // obtém o número informado

	// verifica validade do número
	if (numero == 0 || isNaN(numero)) {
		alert("Informe um número válido...");
		inNumero.focus();
		return;
	}     

	// inicializa variável resposta
	var resposta = "Entre " + numero + " e 1: ";

	// cria um for decrescente
	for (var i = numero; i > 0; i = i -1) {
		// resposta vai acumulando números (e virgulas)
		resposta = resposta + i + ", ";
	}

	// altera o contéeúdo de outResposta
	outResposta.textContent = resposta;
}
// referencia elemento e após associa function ao evento click
var btDecrescer = document.getElementById("btDecrescer");
btDecrescer.addEventListener("click", listaNumeros);