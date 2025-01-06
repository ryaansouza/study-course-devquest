//Invocando o strict
// 'use strict'

//This no contexto Global
// console.log(this)
// console.log(this === window)

// this.name = 'Ryan'
// console.log('-----------------------------');

//This no contexto de Funcão
// function saudar() {
//     console.log('This no contexto da funcao', this);
//     console.log('Ola, ' + this.name);
// }

// saudar()

//This no contexto de um Metodo
let usuario = {
    nome: 'Ryan',
    saudar: function() {
        console.log('this no contexto do metodo', this);
        
        console.log('this.name no contexto do metodo', this.nome);
    }
}

usuario.saudar()

//Outro exemplo

let comida = {
    nome: 'Brocolis',
    temperatura: 0
}

comida.cozinhar = function(temperaturaDeCozimento) {
    console.log('This no contexto do obejto comida:', this);
    
    this.temperatura = temperaturaDeCozimento;
}

comida.cozinhar(100)
console.log(comida);
