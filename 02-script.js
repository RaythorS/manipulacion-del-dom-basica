//Solo guardamos las etiqueta en variables.
const h1 = document.querySelector('h1');//Guado todas las etiquetas h1.
const input1 = document.querySelector('#calculo1');//Guardo la etiqueta que tenga una id="calculo1" del hmtl.
const input2 = document.querySelector('#calculo2');//Guardo en una varaible llamada input2 el elemento con id="calculo2" del html.
const btn = document.querySelector('#btnCalcular');//Guarda el que tenga la clase id="bntcalcular" del html.
const result = document.querySelector('#result'); //Y aqui el que tenga la clase id="result."
const form = document.querySelector('#formulario')

//Esta es mejor manera de de escuchar un evencto en html. La funcion addEventListerner() nos permite indicarle que queremos que suceda cuando el usualio haga algo con nuestro boton.
btn.addEventListener('click', boton);
//Recibe 2 argumentos, primero el evento que va a escuchar(en este caso un click) y segundo la funcion que va a ejecutar(En este caso la funcion boton()) cuando suceda el evento (OJO LA FUNCION NO LLEVA EL PARENTESIS()).

function boton() { 
    suma = Number(input1.value) + Number(input2.value);
    result.innerText = `Resultado: ${suma}`;
}

//Podriamos usar este metodo en par evitar que nuestro formulario se siga recargando solo:(es mas complicada pero es para tener mas limpio el html es bueno saberlo)
form.addEventListener('submit', boton2);

function boton2(event) {//Solo tendriamos que agregar el parametro event.
    event.preventDefault();//Y luego pasarle esta linea que lo que hace es que lo que tiene que suceder por default NO suceda.
    suma = Number(input1.value) + Number(input2.value);
    result.innerText = `Resultado: ${suma}`;
}


/*
form.addEventListener('mouseover', forr)

function forr(e) {
    e.preventDefault();
    alert("Hola")
}
Una funcion interesante que lo que hace es que cuando le pasemos encima el mouse al formulario envie una alerte diciendo Hola(pero puede ser lo que nostros queramos. )
*/
