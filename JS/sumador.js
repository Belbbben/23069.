//alert("hola mundo");
const valor1= parseint(prompt ('ingrese valor 1'));
const valor2=20;
const resultado= valor1 + valor2;
console.log(resultado)
//----------CLASE 08/05------------------------------------------------------------------------------//

//no tiene parametros de entrada
function sumar() {
    
    //obtener la referencia al input con id="valor1"
    //usando el D.O.M
    const apuntadorAValor1 = document.getElementById('valor1');
    const apuntadorAValor2 = document.getElementById('valor2');

    
    //y lo guarda en una  variable
    const v1 = apuntadorAValor1.value;
    const v2 = apuntadorAValor2.value;

    //muestro por consola los valores
    console.log(apuntadorAValor1, v1);
    console.log(apuntadorAValor2, v2);
}
const resultado = ;