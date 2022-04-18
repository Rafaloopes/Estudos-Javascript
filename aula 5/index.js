const nome = 'Rafael';
const sobreNome = "Lopes da Silva";
const idade = 28;
const peso = 90;
const altura = 1.75
let imc;
let anoNascimento;

imc = peso / (altura * 2);

anoNascimento = 2022 - idade;

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso}kg.`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento} `)

