
const cartas = document.getElementById("part-2_1");
const mesas= document.getElementById("part-2_2");
const lista = document.getElementById("part-33");
// const historials = document.getElementById("part-2_3");


const botones = [cartas ,mesas , lista];

function carta(){
    borrar();
    cartas.style.display="flex";
    lista.style.display="block";
    // 暂停循环看看有没有餐没显示
    terminarML();
    
}

function mesa(){
    
    borrar();
    mesas.style.display="flex";
    // 继续循环看看有没有餐没显示
    empezarML();


}

// function historial(){
//     borrar();
//     historials.style.display="block";
//     terminarML();
// }

function borrar(){

    for(i=0 ; i< botones.length ; i++){
        botones[i].style.display = "none";
       
    }

}