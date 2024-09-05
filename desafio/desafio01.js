alert("Boas vindas ao nosso site!");
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);
let nomePrompt = prompt("Entre com o seu nome: ");
let idadePrompt = prompt("Entre com a sua idade: ");

if (idadePrompt => 18){
    alert("Pode tirar a habilitação!");
}