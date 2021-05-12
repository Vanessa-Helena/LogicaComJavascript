// Farmacia Promoção
// Ler descrição do medicamento
// Ler preço do medicamemto
// Informar o valor do produto na promoção

function calcularPromocao() {
	inMedicamento = document.getElementById('inMedicamento');
	inPreco = document.getElementById('inPreco');
	outNome = document.getElementById('outNome');
	outPromocao = document.getElementById('outPromocao')

	var medicamento = inMedicamento.value;
	var preco = Number(inPreco.value);

	var promocao = Math.floor(preco) * 2;

	outNome.textContent = "Promoção de " + medicamento;
	outPromocao.textContent = "Leve 2 por apenas R$: " + promocao.toFixed(2);
}

var btMostrar = document.getElementById('btMostrar');
btMostrar.addEventListener("click", calcularPromocao);