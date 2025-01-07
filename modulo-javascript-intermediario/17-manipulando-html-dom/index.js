function adicionarComentario(){
    let inputNovoComentario = document.getElementsByName('novo-comentario');

    let textoDigitado = inputNovoComentario[0].value;

    let novosComentarios = document.getElementById('novos-comentarios');

    novosComentarios.innerHTML += `<p>Novo comentário: ${textoDigitado} </p>`
}