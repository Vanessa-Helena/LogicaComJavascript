// Ler três números
// Verificar se podem ou não formar um triângulo
// Um lado não pode ser maior que a soma dos outros dois lados do triangulo
// Informar o tipo de triangulo na saída
// Equilátero (3 lados iguais)
// Isósceles (2 lados iguais)
// Escaleno (3 lados diferentes)

function triangulo() {
	inLadoA = document.getElementById('inLadoA');
	inLadoB = document.getElementById('inLadoB');
	inLadoC = document.getElementById('inLadoC');
	outInformarTriangulo = document.getElementById('outInformarTriangulo');
	outInformarTipo = document.getElementById('outInformarTipo');

	ladoA = Number(inLadoA.value);
	ladoB = Number(inLadoB.value);
	ladoC = Number(inLadoC.value);

	outInformarTriangulo.textContent = "";
	outInformarTipo.textContent = "";
	

	if ((ladoA == 0 || ladoB == 0 || ladoC == 0 ) || ( isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC))) {
		alert('Informar um valor para todos os lados');
		inLadoA.focus();
		return;
	}


	if((ladoA > ladoB + ladoC) || (ladoB > ladoA + ladoC) || (ladoC > ladoA + ladoB)) {
		outInformarTriangulo.textContent = "Os lados não formam um triângulo";
		inLadoA.focus();
	}else if (ladoA == ladoB && ladoA == ladoC) {
		outInformarTriangulo.textContent = "Lados podem formar um triangulo";
		outInformarTipo.textContent = "Tipo: Equilátero";
	}else if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA) {
		outInformarTriangulo.textContent = "Lados podem formar um triangulo";
		outInformarTipo.textContent = "Tipo: Isósceles";
	}else
	
	if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) {
		outInformarTriangulo.textContent = "Lados podem formar um triangulo";
		outInformarTipo.textContent = "Tipo: Escaleno";			
	}
}

var btVerificar = document.getElementById('btVerificar');
btVerificar.addEventListener("click", triangulo);