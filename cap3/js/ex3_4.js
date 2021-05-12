function calculaFusa() {
	// cria uma referência aos elementos da página
	var inHoraBrasil = document.getElementById('inHoraBrasil');
	var outHoraFranca = document.getElementById('outHoraFranca');

	// obtém e converte o conteúdo do campo inHoraBrasil
	var inHoraBrasil = Number(inHoraBrasil.value);

	// se não preencheu ou Not-a-Number (NaN)
	if (inHoraBrasil.value == "" || isNaN(inHoraBrasil)) {
		alert("Informe a hora no Brasil corretamente"); // exibe alerta
		inHoraBrasil.focus(); // posiciona em inHoraBrasil
		return;
	}
}