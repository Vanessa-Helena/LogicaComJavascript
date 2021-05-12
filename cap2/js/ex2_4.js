// Restaurante
// Ler o preço por kg
// Ler o consumo em gramas
// Informar o valor a ser pago
function calcularPreco() {
	// cria referência aos elementos da página
	var inQuilo = document.getElementById('inQuilo');
	var inConsumo = document.getElementById('inConsumo');
	var outValor = document.getElementById('outValor')

	// obtém conteúdo dos campos de entrada
	var quilo = Number(inQuilo.value);
	var consumo = Number(inConsumo.value);

	// calcula valor a ser pago
	var valor = (quilo / 1000) * consumo;
	// altera o conteúdo da linha de respostas
	outValor.textContent = "Valor a pagar R$: " + valor.toFixed(2);
}
// cria referência ao elemento btCalcular
var btCalcular = document.getElementById('btCalcular');
// registra um evento associado ao botão, para carregar uma função
btCalcular.addEventListener("click", calcularPreco);