var bievenidas = document.getElementById("bievenida");
// 别忘了把html和css的这个id名添加上
const cartas = document.getElementById("part-2_1");
const mesas= document.getElementById("part-2_2");
const historial_dias= document.getElementById("part-2_3");
const his_total= document.getElementById("part-2_4");
const funcion= document.getElementById("part-2_5");

const botones = [bievenidas , cartas ,mesas , historial_dias , his_total , funcion];

function carta(){
    borrar();
    cartas.style.display="block";

    terminar_exa();
    
}

function mesa(){
    
    borrar();
    console.log("hola");

 
    iniciar_exa();
    
    mesas.style.display="flex";
   
}

function historial_dia(){
    borrar();
    historial_dias.style.display="block";
  
}

function historial_total(){
    borrar();
    his_total.style.display="block";
}

function funciones(){
    borrar();
    funcion.style.display="block";
}

function borrar(){

    for(i=0 ; i< botones.length ; i++){
        botones[i].style.display = "none";
       
    }

}