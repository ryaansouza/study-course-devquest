let nomeFilme = "Vingadores"

switch(nomeFilme) {
    case "Vingadores":
        console.log("É o filme dos Vingadores")
        break
    case "Batman":
        console.log("É o filme dos Vingadores")
        break
    default:
        console.log("É outro filme")
        break
}

let avaliacao = 1

switch (avaliacao) {
    case 1:
    case 2:
        console.log("Filme ruim")
        break

    case 3:
    case 4:
        console.log("Filme mediano")
        break

    case 5:
        console.log("Filme excelente")
        break
        
    default:
        console.log("Nota inválida")
        break
}