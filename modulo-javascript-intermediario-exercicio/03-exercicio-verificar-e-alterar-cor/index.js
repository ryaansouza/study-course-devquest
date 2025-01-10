const quadrado = document.querySelector(".quadrado")

quadrado.addEventListener("click", () => {
    if(quadrado.classList.contains('azul')) {
        quadrado.classList.remove('azul');
    } else {
        quadrado.classList.add('azul');
    }
})