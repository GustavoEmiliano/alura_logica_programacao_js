/* Desafio 1: Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número. */

let contador1 = 1;

while (contador1 <= 10){
  console.log(contador1);
  contador1++;
}

/* Desafio 2: Crie um contador que comece em 10 e vá até 0 usando um loop while. Mostre cada número. */

let contador2 = 10;

while (contador2 >= 0){
  alert(contador2);
  contador2--;
}

/* Desafio 3: Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador. */

let numero3 = parseFloat(prompt("Digite um número: "));

while (numero3 >= 0){
  console.log(numero3);
  numero3--;
}

/* Desafio 4: Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador. */

let numero4 = parseInt(prompt("Digite um número: "));
let contador = 0; 

while (contador <= numero4) {
  console.log(contador); 
  contador++; 
}