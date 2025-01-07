// console.log(document);

// let p = document.getElementById('paragrafo1')

// console.log(p);


// let inputsPorClasse = document.getElementsByClassName('tag-de-input');

// console.log(inputsPorClasse);
// console.log(inputsPorClasse[0]);


// let inputPorTag = document.getElementsByTagName('input');

// console.log(inputPorTag);

//Bucar todos os elementos que seja do tipo inputs, que tenham o atributo "name" igual a "email"
let inputPorName = document.querySelectorAll("input[name='email']");

console.log(inputPorName);
console.log(inputPorName[1]);
