// Ler descrição do Produto
// Ler Preço do Produto
// Informar a promoção

function calcularPromocao() {
	var inProduto = document.getElementById('inProduto');
	var inPreco = document.getElementById('inPreco');
	var outPromocao = document.getElementById('outPromocao');
	var outCustoDoTerceiro = document.getElementById('outCustoDoTerceiro')

	produto = inProduto.value;
	preco = Number(inPreco.value);

	desconto = preco / 2;
	aPagar = preco * 2 + desconto;

	outPromocao.textContent = produto + " - Promocão: Leve 3 por R$: " + aPagar;
	outCustoDoTerceiro.textContent = "O 3º produto custa apenas R$: " + desconto; 
}
var btCalcular = document.getElementById('btCalcular');
btCalcular.addEventListener("click", calcularPromocao);