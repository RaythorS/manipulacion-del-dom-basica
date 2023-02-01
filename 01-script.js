//Solo guardamos las eiqueta en variables.
const h1 = document.querySelector('h1'); 
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');

//Ahora creamos una funcion que pasamos a un atributo de html, en este caso a al id="btnCalcular" mediante un onclick(Escucha cuando el usuario de click)
function boton() { 
    suma = (Number(input1.value) + Number(input2.value)); // Transformamos la suma de el valor de input1.value e input2.value (lo que el usuario pondra) a numeros (ya que por defecto son strigns) y esa suma la guardamos en una variable llamada suma.
    result.innerText = `Resultado: ${suma}` // Inyectamos ese string(con la variable suma adentro) a la variable result que guardamos en la linea 6 que es el id="result" de html. Usamos la propiedad innerText para inyectarle el contenido.
}


