// Desafio 1: Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaDaSemana = prompt("Qual é o dia da semana hoje?");

if(diaDaSemana == "Sábado" || diaDaSemana == "Domingo"){
  alert("Bom fim de semana!");
} else {
  alert("Boa semana!");
}

// Desafio 2: Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let numero = prompt("Digite um número, iremos verificar se é positivo ou negativo");

numero = parseFloat(numero);

if (numero > 0) {
  alert("O número é positivo!");
} else if(numero < 0){
  alert("O número é negativo!");
} else {
  alert("O número é zero!");
}

// Desafio 3: Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let pontuacao = prompt("Entre a com sua pontuação: ");

pontuacao = parseInt(pontuacao);

if (pontuacao >= 100) {
  alert("Parabéns, você venceu!");
} else {
  alert("Tente novamente para ganhar.");
}

// Desafio 4:  Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldo = prompt("Entre com o seu saldo: ");
saldo = parseFloat(saldo);
let saldoMensagem = `Seu saldo é ${saldo}.`;

alert(saldoMensagem);

// Desafio 5: Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt("Entre com o seu nome: ");
alert(`Boas-vindas, ${nome}!`);