//METODOS PARA SELECCIONAR LAS ETIQUETAS DE HTML DESDE JAVASCRIPT 
//querySelector() nos permite usar casi la misma sintaxis de CSS
const h1 = document.querySelector('h1'); // Esto lo que hace es seleccionar las etiquetas <h1> dentro del html al que esta ligado y aqui lo guardamos en una variable.
const p = document.querySelector('p'); // Lo mismo aqui pero con etiquetas <p>.
const pClass = document.querySelector('.pClass'); // Aqui es como CSS porque tenemos que poner (.) si es un class.
const pId = document.getElementById('pId');//Cuando usamos el .getElementById() no debemos usar # como en css simplemente se pone el nombre tal cual.
const input = document.querySelector('input');

const pAll = document.querySelectorAll('p'); //Esto lo que hace es selecconar todas eiquetas p (Todas) y los guarda en un array.


console.log(h1);

console.log({
    h1,
    p,
    pClass,
    pId,
    input
});

//Accediendo a los atributos de HTML desde JavaScript
h1.innerHTML = 'Acabo de cambiar <br> el texto desde JavaScript con innerHTML'; //Cambiamos el texto de la etiqueta h1 del html. Podemos escribir codigo html dentro.
p.innerText = 'Acabo de cambiar <br> el texto desde JavaScript con innerText'; // igual cambiamos el texto de la eiqueta p en html de nuestra etiqueta <p>. NO Podemos escribir codigo html dentro.
console.log(h1.getAttribute('class'));//De esta forma podemos acceder al value del atributo class en la etiqueta h1 que es 'hola'.
h1.setAttribute('class', 'adios');// Asi podemos cambiar el valor del atributo class, antes era 'hola' y  ahora es 'adios'.
h1.classList.add('rojo');//Le agregamos un valor 'rojo' al atributo class de nuestra etiqueta h1: class='adios rojo'.

h1.classList.remove('adios');// Le acabamos de eliminar el valor 'adios' al atributo class de h1 y ahora queda de esta forma: class='rojo'.

//Accediendo al input
input.value = '543'; // De esta forma es como podemos acceder al input y modificar su value directamente.

//Creando un elemento desde 0
const img = document.createElement('img');// Lo que aqui hicimos fue usar .craeatElement para crear una etiqueta <img/> y esto lo guardamos en una variable llamada img.
img.setAttribute('src', 'https://media.istockphoto.com/id/1164440614/es/foto/desarrollo-de-programadores-de-dise%C3%B1o-de-sitios-web-de-desarrollo-de-equipos-y-tecnolog%C3%ADas-de.jpg?s=2048x2048&w=is&k=20&c=lUKQjjwSoNkQ9caHpr9vu8x3GxKvFO9mwWEDvn45tpc=');//Ahora lo que hicimos fue aniadirle un attributo src con el valor "ulr de la imagen"(src='url de la imagen') gracias al .setAtribute().
console.log(img);

pId.innerHTML = '';//De esta idicamos que lo que este dentro de la etiqueta pId sea igual a un string vacio.
pId.append(img);// De esta forma insertamos nuestra variable img a la etiqueta con valor pId.