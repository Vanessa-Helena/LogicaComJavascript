// Ler cada 15 minutos de uso de um computador
// Ler Ler o tempo de uso por um clientes em minutos
// Informar o valor a ser pago pelo cliente
// As frações extrar de 15 minutos devem ser cobradas integralmente


function valorPagar() {
	var inValor = document.getElementById('inValor');
	var inTempo = document.getElementById('inTempo');
	var outMostrar = document.getElementById('outMostrar')

	valor = Number(inValor.value);
	tempo = Number(inTempo.value);

	duracao = Math.ceil(tempo / 15);
	aPagar = duracao * 15;
	total = aPagar / 15 * valor;

	outMostrar.textContent = "Valor a Pagar R$: " + total;
}
var btCalcular = document.getElementById('btCalcular');
btCalcular.addEventListener("click", valorPagar);