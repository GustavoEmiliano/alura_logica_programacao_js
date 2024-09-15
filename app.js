alert("Boas vindas ao jogo do número secreto");

let numeroSecreto = 5;
console.log(`O número secreto é ${numeroSecreto}`);

let chute;
let tentativas = 1;

// enquanto chute não for igual ao número secreto
while (chute != numeroSecreto) {
  chute = prompt("Escolha um número entre 1 e 10");
  console.log(`O chute foi ${chute}`);

  // Se o chute for igual ao número secreto:
  if (chute == numeroSecreto) {
    alert(
      `Isso aí, você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`
    );
    console.log("Acertou o número");
  }
  // Senão, faça isso:
  else {
    // Se o chute for maior que o número secreto, exiba que o número secreto é menor que o chute
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    }
    // Senão, exiba que o número secreto é maior que o chute
    else {
      alert(`O número secreto é maior que ${chute}`);
    }
    // tentativas = tentativas + 1;
    tentativas++;
  }
}

console.log(`O chute foi ${chute} e o número secreto é ${numeroSecreto}.`);
