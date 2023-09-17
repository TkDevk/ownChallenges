/* 
Crea una calculadora de promedio de notas que permita a un usuario ingresar sus notas de diferentes asignaturas y luego calcular el promedio. Debes utilizar HTML para la interfaz, JavaScript para la lógica y CSS para el diseño.

*/
let notas = [];


function calcularPromedio() {
    //Me trae la primera nota
    const notaInputUno = document.getElementById("nota1");
    const notaUno = parseFloat(notaInputUno.value);
    notaUno*0.3;
    //Me trae la segunda nota
    const notaInputDos = document.getElementById("nota2");
    const notaDos = parseFloat(notaInputDos.value);
    notaUno*0.3;
    //Me trae la tercer nota
    const notaInputTres = document.getElementById("nota3");
    const notaTres = parseFloat(notaInputTres.value);
    notaUno*0.4;
    

    notas.push(notaUno,notaDos,notaTres);
/*

    if ((nota !== "") && (nota < 10) && (nota > 0)) {

        

    } else { alert("Por favor ingresa cinco notas"); }
    console.log(nota);
}

*/
}

function total() {
    let suma = 0;
    let resultado = 0;
    for (let i = 0; i < notas.length; ++i) {

        suma = suma + notas[i]
        resultado = suma / 3;
    }
    const mostrarPromedio = document.getElementById("mostrarResultados");
    mostrarPromedio.textContent = "Tu promedio es: " + resultado;

}
