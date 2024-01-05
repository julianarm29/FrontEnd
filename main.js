function validarFormulario() {
    // Obter os valores dos campos
    var campoA = document.getElementById('campoA').value;
    var campoB = document.getElementById('campoB').value;

    // Converter os valores para números
    campoA = parseFloat(campoA);
    campoB = parseFloat(campoB);

    // Validar se B é maior que A
    if (campoB > campoA) {
        exibirMensagem(true, "Formulário válido!");
    } else {
        exibirMensagem(false, "Número B deve ser maior que o número A.");
    }
}

function exibirMensagem(valido, mensagem) {
    var mensagemDiv = document.getElementById('mensagem');
    mensagemDiv.textContent = mensagem;

    if (valido) {
        mensagemDiv.className = "message valid";
    } else {
        mensagemDiv.className = "message invalid";
    }
}
