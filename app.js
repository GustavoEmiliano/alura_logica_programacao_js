alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 5;
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
    // Se o chute for maior que o numero secreto exiba que o número secreto é menor que o chute
    if(chute > numeroSecreto){
        alert(`O número secreto é menor que ${chute}`);
    // Senão exiba que o número secreto é maior que o chute
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }
}
console.log(`o chute foi ${chute} e o numero secreto é ${numeroSecreto}.`);

