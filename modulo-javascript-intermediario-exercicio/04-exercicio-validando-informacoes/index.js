const input = document.querySelector("input[name='nome']")

input.addEventListener('change', () => {
    if(input.value.trim() === '') {
        input.classList.remove('campo-valido');
    }
    else if(input.value.trim() !== '') {
        input.classList.add('campo-valido');
    }
})

//trim()  <--- metodo que tira os espaços em branco de ambas extremidades de uma string