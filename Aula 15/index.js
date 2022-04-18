// function criarPessoa (nome, sobrenome, idade) {
//     return{
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade,
//     }
// };

// const pessoa = criarPessoa ('Rafael', 'Lopes', 28);

// console.log(pessoa.nome);


const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Lopes',
    idade: 28,

    fala(){
        console.log(`Minha idade é ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++;
    }
};


pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();