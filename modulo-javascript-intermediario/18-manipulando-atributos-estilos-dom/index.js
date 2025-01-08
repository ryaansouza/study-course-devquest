//Criando a função que estara atrelada ao button
function alterarCorDeFundoPrimeiroPost(){
    //pegando os posts pelo nome da classe
    let posts = document.getElementsByClassName('post');

    //retorna uma lista com dois elementos que seria os dois posts
    console.log(posts);

    //pegando o primeiro da lista
    let primeiroPost = posts[0];

    //e com o elemento que queremos manipular em maõs
    console.log('primeiroPost', primeiroPost);

    //podemos acessar os atributos de estilos dele
    //através do ".style"
    primeiroPost.style.backgroundColor = 'red';
}

function aumentarFonteDoSegundoPost(){
    //recuperando o elemento que quero manipular
    let textoPosts = document.getElementsByClassName("texto-post");

    //resultado sera 2 elementos p
    console.log(textoPosts);
    
    //aqui, através do ".classList.add(), conseguimos adicionar uma nova classe ao elemento."
    textoPosts[1].classList.add('fonte-grande');

    //aqui conseguimos ver o que o .classList retorna para nos, que é exatamente uma lista das classes existentes no elemento.
    console.log(textoPosts[1].classList);
}

function marcarRadio(genero) {
    //recuperando os elementos que irão ser manipulados
    let radioMasculino = document.getElementById('genero-masculino')
    let radioFeminino = document.getElementById('genero-feminino')

    if(genero === 'M'){
        //caso vir "M" no parametro, colocar o atributo "checked" do radio masculino, como true
        radioMasculino.checked = true;
    } else if(genero === 'F'){
        //caso vir "F" no parametro, colocar o atributo "checked" do radio feminino, como true
        radioFeminino.checked = true;
    }
}