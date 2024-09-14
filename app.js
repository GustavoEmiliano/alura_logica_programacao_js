alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 9;
console.log(`O numero secreto é ${numeroSecreto}` );

let chute = prompt("Escolha um número entre 1 e 10");
console.log(`o chute foi ${chute}`);

// Se o chute for igual ao numero secreto:
if (chute == numeroSecreto){
    alert(`Isso ai, você descobriu o numero secreto ${numeroSecreto}`);
    console.log("acertou o numero");
} 
// Senão, faça isso:
else{
    alert("Você errou ;(");
    console.log("Errou o numero");
}
console.log(`o chute foi ${chute} e o numero secreto é ${numeroSecreto}.`);
