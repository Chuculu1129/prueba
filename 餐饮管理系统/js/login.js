// 在浏览器数据库存放密码
var db;
let datos = indexedDB.open("datos_chifa", 1);

datos.onupgradeneeded = function (event) {
    db = event.target.result;
    db.createObjectStore("claves", { keyPath: "id" });
  
}

datos.onsuccess = function (event) {
    db = event.target.result;
    console.log("abierto");
    db.transaction(["claves"], "readwrite").objectStore("claves")
        .add({ id: 1, plataforma: "sala", clave: 201129 });
    db.transaction(["claves"], "readwrite").objectStore("claves")
        .add({ id: 2, plataforma: "cocina", clave: 123456 });
    db.transaction(["claves"], "readwrite").objectStore("claves")
        .add({ id: 3, plataforma: "caja", clave: 7758258 });


}



// 数据库储存页面登入时间
var Bossdb;
let BossDato = indexedDB.open("Bossdatos", 1);

BossDato.onupgradeneeded = function (event) {
    Bossdb = event.target.result;
    Bossdb.createObjectStore("fecha", { autoIncrement: true });
    Bossdb.createObjectStore("notificacion", { autoIncrement: true });
    Bossdb.createObjectStore("Historial_dia" , {keyPath : "id"});
    Bossdb.createObjectStore("historial_total" , {keyPath : "id"});
    
}

BossDato.onsuccess = function (event) {
    Bossdb = event.target.result;
    console.log("abierto");
    Bossdb.transaction(["fecha"], "readwrite").objectStore("fecha").add({diaN:0, fecha:"13-09-2022",estado : "correcto"});
}


// 数据库储存网页当前状况

window.localStorage.setItem("sala", "false");
window.localStorage.setItem("cocina", "false");
window.localStorage.setItem("caja", "false");

// window.localStorage.setItem("historialNum", 0);
// window.localStorage.setItem("historialDiaNum" , 0);



// 页面登入的时间
let fecha_ingreso = new Date().toLocaleString();
let fecha2 = new Date();
let hora_de_ingreso = fecha2.getHours();
let minuto_de_ingreso = fecha2.getMinutes();


// 验证密码登入页面

const opciones = document.getElementById("cuentas");
let clave_ingresado = document.getElementById("clave");

function inicio() {
    // let datosdb;
    // let datos = indexedDB.open("datos_chifa",1);
    // datos.onsuccess=function(event){
    //     datosdb=event.target.result;
    // }

    const alerta = document.getElementById("T2");
    // 获取数据库密码进行对比
    var num;
    var content;
    var enlace;

    if (opciones.value == "sala") {
        num = 1;
        content = "sala";
        enlace = "sala2.html";
    } else if (opciones.value == "cocina") {
        num = 2;
        content = "cocina";
        enlace = "cocina.html";
    } else {
        num = 3;
        content = "caja";
        enlace = "caja.html";
    }

    let claveDB;
    var clave_obtenidos;
    
    // let clave_base = indexedDB.open("datos_chifa");
    // clave_base.onsuccess = function(event){
    //     claveDB= event.target.result;
     
    // }

    var clave_obtenido= db.transaction(["claves"], "readwrite").objectStore("claves").get(num);

    let clave_sala;

    clave_obtenido.onsuccess = function (event) {

        clave_sala = clave_obtenido.result.clave;

        if (opciones.value == content && clave_ingresado.value == clave_sala) {
            // 判断登入时间是否是工作时间之外，若不是工作时间，给老板发消息提醒。
            // if (hora_de_ingreso <  6 ) {
            //     alerta.innerHTML = "ahorita no es hora de atencion";
            //     alerta.style.color = "red";
            //     Bossdb.transaction(["notificacion"], "readwrite").objectStore("notificacion")
            //     .add({ fecha: fecha_ingreso, plataforma: content,  infor: "alguien quiso ingresar a la plataforma fuera del horario de trabajo" });
            // } else {
                // 转移到特定网页
                window.location.href = enlace;
                // 转换网页当前状态
                window.localStorage.setItem(content, "true");
                // 往老板数据库添加各个页面的登入时间
                Bossdb.transaction(["fecha"], "readwrite").objectStore("fecha")
                .add({ plataforma: content, fecha: fecha_ingreso, estado: "correcto"  });
                
            // }
        } else {
            // 密码错误
            alerta.innerHTML = "clave o plataforma elegido es incorrecto!!";
            alerta.style.color = "red";
        }

        clave_ingresado.value = null;
    }

}


