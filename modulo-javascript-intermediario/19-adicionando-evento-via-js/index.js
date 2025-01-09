//Sobre o ".addEventListener()"
//O primeiro parametro é o evento que vamos querer disparar
//O segundo parametro é a função que vai ser disparao quando o evento acontecer
document
  .querySelector("select[name='estado']")
  .addEventListener("change", function (event) {
    console.log(event.target.value);
  });