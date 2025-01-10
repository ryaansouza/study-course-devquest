let quadradoFlexivel = document.getElementsByClassName('quadrado');

let trocaCor = document.getElementById('troca-cor').addEventListener("click", function() {
    
    if(quadradoFlexivel[0].classList[1] === 'azul'){
        quadradoFlexivel[0].classList.remove('azul');
        quadradoFlexivel[0].classList.add('amarelo');
    } else if(quadradoFlexivel[0].classList[1] === 'amarelo') {
        quadradoFlexivel[0].classList.remove('amarelo');
        quadradoFlexivel[0].classList.add('azul');
    }
})

