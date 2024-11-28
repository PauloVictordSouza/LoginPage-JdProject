let confirmacao = document.getElementById("confirmarSenha")

let senha = document.getElementById("senha");

function comparador() {
    
    let senhaValor = senha.value;
    let confirmacaoValor = confirmacao.value;

    
    if (senhaValor !== confirmacaoValor) {
        alert("A senha inserida não coincide. Tente novamente.");
    } else {
        alert("Senha confirmada com sucesso!");
    }
}
