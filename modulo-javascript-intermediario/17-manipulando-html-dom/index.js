function adicionarComentario(){
    let inputNovoComentario = document.getElementsByName('novo-comentario');

    //conseguindo o texto digitado no input de novo comentario
    let textoDigitado = inputNovoComentario[0].value;

    //pegando o elemento html que ira receber os comentarios
    let novosComentarios = document.getElementById('novos-comentarios');

    //adicionando html ao Inner do elemento que ira receber comentarios
    novosComentarios.innerHTML += `<p>Novo comentário: ${textoDigitado} </p>`
}