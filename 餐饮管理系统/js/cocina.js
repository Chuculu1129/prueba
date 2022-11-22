window.onload=function(){
    var estado = window.localStorage.getItem("cocina");
    if(estado=="true"){
        document.getElementById("h").style.display="block";
    }
}

function cerrar_sesion(){
    window.localStorage.setItem("cocina","false");
    window.location.href="login.html";
}