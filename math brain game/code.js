var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);

    if (chute == numeroSecreto) {
        //se chute for igual ao numeroSecreto
        elementoResultado.innerHTML = "Você acertou";
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
    } else {
        elementoResultado.innerHTML = "Errou";
    }

    if (chute < numeroSecreto) {
        elementoResultado.innerHTML = "O número é maior que o escolhido"
    } else if (chute > numeroSecreto) {
        elementoResultado.innerHTML = "O número é menor que o escolhido"
    }
}