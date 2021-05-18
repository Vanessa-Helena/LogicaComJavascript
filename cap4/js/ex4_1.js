function mostrarTabuada() {
	// cria referência aos elementos da página
	var inNumero = document.getElementById('inNumero');
	var outTabuada = document.getElementById('outTabuada');

	// converte contepudo do campo inNumero
	var numero = Number(inNumero.value);
	// valida o número
	if (numero == 0 || isNaN(numero)) {
		alert("Informe um número válido");
		inNumero.focus();
		return;
	}
	// cira uma variável do tipo String, que irá concatenar a resposta
	var resposta = "";

	// cria um laço de repetição
	for (var i = 1; i <= 10; i++) {
		// a variável resposta vai acumulando os novos conteúdos
		resposta = resposta + numero + " X " + i + " = " + numero * i + "\n"
	}

	// o conteúdo da tag pre é alterado para exibir a tabuada do num 
	outTabuada.textContent = resposta;
}
//cria referência ao botão e após associa function ao evento click 
var btMostrar = document.getElementById('btMostrar');
btMostrar.addEventListener("click", mostrarTabuada);