/*

Reto del día : Hacer un programa para un restaurante donde el usuario pueda elegir entre 6 platillos distintos, cada platillo con un precio distinto y que cada vez que el usuario seleccione sun platillo se le agregue a la orden y se sumen los precios

*/

//Elegir platos[distintos]
//Cada platillo tiene un precio distinto
//El usuario agrega (button) a la orden y se sumen


//Declaro funcion
//Funcion es como crear una accion

//Necesito un array para ir añadiendo los valores que me va a traer la funcion addMeal()

let listMeal = [];
function addMeal(price){ //le asigno el valor price a mi addMeal()
    listMeal.push(price); //va a meterle a mi array el parametro precio
    console.log(listMeal);
     //borra o sobre escribe

     
 //Funcion corta para que traigo los valores y los sume eso fue addMeal
}

//Ahora function total me va a mostrar el resultado

function total(){ 
    
    let count = 0;
    for (let i = 0; i < listMeal.length; i++){
        // i recorre
        count = count+listMeal[i]; //Voy a sumar cada valor de listMeal, puedo sumar los valores por que list.Meal tiene los valores por ciclo que se escogieron por lo que esta cargado del valor
        console.log(count);
        
        
    }
   

    
    
    const total = document.getElementById("summary");
    total.textContent = "Your bill is $" + count +".";
    /*if(count.lenght > listMeal.length){
        count*0;
        listMeal*0;
    }*/
    
}

