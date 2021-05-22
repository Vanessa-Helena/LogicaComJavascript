// declara e inicializa contadores e acumuladores (variaveis globais)
var numContas = 0;
var valTotal = 0;

// variável string que acumula as contas
var resposta = "";

function registrarConta() {
	// cria referência aos elementos da página manupulados pela function
	var inDescricao = document.getElementById('inDescricao');
	var inValor = document.getElementById("inValor");
	var outListaContas = document.getElementById("outListaContas");
	var outTotal = document.getElementById("outTotal");

	// obtém conteúdos dos campos
	var descricao = inDescricao.value;
	var valor = Number(inValor.value);

	// verifica preenchimento dos campos 
	if (descricao == "" || valor == 0 || isNaN(valor)) {
		alert("Informe os dados corretamente...");
		inDescricao.focus();
		return;
	}

	// adiciona valores ao contados e acumulador
	numContas++; // contador
	valTotal = valTotal + valor; // acumulador

	// concatena as contas
	resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";

	// altera o conteúdo das tags de resposta 
	outListaContas.textContent = resposta + "----------------------------";
	outTotal.textContent = numContas + " Conta(s) - Total R$: " + valTotal.toFixed(2);

	// limpa campos e posiciona cursor em inDescricao
	inDescricao.value = "";
	inValor.value = "";
	inDescricao.focus();
}
// refencia elemento e após associa function ao evento click 
var btRegistrar = document.getElementById("btRegistrar");
btRegistrar.addEventListener("click", registrarConta);