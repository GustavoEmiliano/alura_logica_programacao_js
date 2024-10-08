alert("Boas vindas ao jogo do número secreto");

let numeroMaximo = 8000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
  console.log(`O chute foi ${chute}`);

  // Se o chute for igual ao número secreto:
  if (chute == numeroSecreto) {
    console.log("Acertou o número");
    break;
  }
  // Senão, verifique se o chute é maior ou menor que o número secreto
  else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}

console.log(`O chute foi ${chute} e o número secreto é ${numeroSecreto}.`);

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Isso aí, você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`
);

/* if (tentativas > 1) {
  alert(
    `Isso aí, você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`
  );
} else {
  alert(
    `Isso aí, você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`
  );
}
*/