// let videoGame = {
//     nome: 'Xbox',
//     valor: 3000,
//     jogos: [
//     {nome: 'Final fantasy'}, 
//     {nome: 'Fallout'}
//     ]
// }

// let jogo3 = {
//     nome: 'Fifa'
// }

// videoGame.jogos.push(jogo3)

// console.log(videoGame);

let cliente = {
    nome: 'Ryan',
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3000,
        jogos: [
            { nome: 'Final fantasy' }
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[0].nome);

