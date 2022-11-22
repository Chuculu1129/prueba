
// 该变量用来接收setinterval监视
// let examinar;

// 该变量用来接收数据仓库的长度
let store_leght;

// 该数组接收对应数据仓库内所需的内容
// let datos_obt = [];

// 解决该问题、、、、、、、、、、、、、、、、、、、、、、、、、、



// 获取当前页面的名称
var a = location.href.split('/');
var pag_names = a[a.length - 1];

// 调用setinterva的视函数
let examinar;

// 首先给每一个餐桌号和外卖号做一个键值对，其值代表该号有没有被显示，且每次退出登入时恢复默认状态

// 打开数据库
let obt_db;
let datos = indexedDB.open("lista_mesas");

datos.onsuccess = function (event) {
    obt_db = event.target.result;

}

window.open(parejadb());


function parejadb() {



    // 创建键值对

    window.localStorage.setItem("mm1", "false");
    window.localStorage.setItem("mm2", "false");
    window.localStorage.setItem("mm3", "false");
    window.localStorage.setItem("mm4", "false");
    window.localStorage.setItem("mm5", "false");
    window.localStorage.setItem("mm7", "false");
    window.localStorage.setItem("mm8", "false");
    window.localStorage.setItem("mm9", "false");
    window.localStorage.setItem("mm10", "false");
    window.localStorage.setItem("mm11", "false");
    window.localStorage.setItem("mm12", "false");
    window.localStorage.setItem("mm13", "false");
    window.localStorage.setItem("mm14", "false");
    window.localStorage.setItem("mm15", "false");
    window.localStorage.setItem("mm16", "false");
    window.localStorage.setItem("mm17", "false");
    window.localStorage.setItem("mm18", "false");

    window.localStorage.setItem("LL1", "false");
    window.localStorage.setItem("LL2", "false");
    window.localStorage.setItem("LL3", "false");
    window.localStorage.setItem("LL4", "false");
    window.localStorage.setItem("LL5", "false");
    window.localStorage.setItem("LL6", "false");
    window.localStorage.setItem("LL7", "false");
    window.localStorage.setItem("LL8", "false");
    window.localStorage.setItem("LL9", "false");
    window.localStorage.setItem("LL10", "false");

    // 该变量用来接收下面在三个页面是否已经显示，数字3代表全显示
    window.localStorage.setItem("ifmostrar", 0);
    window.localStorage.setItem("test", 1);


    examinar = setInterval("exa_lista()", 100);

}

function comenzar_exa() {
    examinar = setInterval("exa_lista()", 100);
}



// 另一个js文件的mesa按钮调用函数，启动setinterval监视
function iniciar_exa() {
    console.log("2");
    examinar = setInterval(100, exa_lista());
}

// 另一个js文件的carta按钮调用此函数，结束setinterval监视
function terminar_exa() {
    console.log("3");
    clearInterval(examinar);
}

// 监视函数——如果localstore中的值为false则查看是否有内容要展示，如果是true就滤过
function exa_lista() {

    // 循环堂吃的键值对状况
    for (i = 0; i < 19; i++) {

        // 该变量接收检测对象
        let exa_obj = "mm" + i;

        // 该变量接收获取该对象在localstore的值
        let exa_obj_result = localStorage.getItem(exa_obj);

        // 判断对象值如果为false就以此为参数调用检测函数
        if (exa_obj_result == "false") {

            // 调用测试函数
            exa_db("m" + i);
        }
    }

    //循环打包的键值对情况
    for (i = 0; i < 11; i++) {

        // 该变量接收检测对象
        let exa_obj = "LL" + i;

        // 该变量接收获取该对象在localstore的值
        let exa_obj_result = localStorage.getItem(exa_obj);

        // 判断对象值如果为false就以此为参数调用检测函数
        if (exa_obj_result == "false") {

            // 调用测试函数
            exa_db("L" + i);
        }

    }
}


// 测试函数
function exa_db(obj) {



    // localstore有键值对，代表对应数据库的长度，下面获取
    store_leght = localStorage.getItem(obj);

    // 判断如果其值不是null ，那么代表有数据，便调用展示数据函数
    if (store_leght != "null") {
        console.log("ok-4");
        console.log("valor enviado" + obj + " " + store_leght);
        mostrar_db(obj, store_leght);
    }
}


let datos_obt = [];

// 显示数据函数
function mostrar_db(obj, store_leght) {

    console.log("ok-3");

    // 把仓库号首字母去除，获取真正的餐桌号
    let real_num_mesa;

    if (obj.length == 2) {
        real_num_mesa = obj[1];
    } else {
        real_num_mesa = obj[1] + obj[2];
    }

    // 获取数据库对象


    console.log(obj);

    console.log("ok-abierto");

    obt_mesa_db(obj, store_leght);

    mostrar_db2(real_num_mesa, obj);



    console.log("有清空数组");

    // datos_obt = [];
    datos_obt.splice(0, datos_obt.length);
    // document.getElementById("part-2_2").style.display = "flex";

    // mostrar_db_part2(obj ,real_num_mesa);
}

function obt_mesa_db(obj, store_leght) {

    console.log("exten - A 1 ");

    let valor = parseInt(store_leght);


    // 通过循环获取仓库所有数据
    for (i = 0; i <= valor; i++) {

        console.log("inter1");
        console.log("comprobar " + valor);

        new promise(function (resolve) {

            console.log("解决方案在执行");
            let db = obt_db.transaction([obj], "readwrite").objectStore(obj).get(i);

        }).then(() => {

            console.log("解决方案进入第二步");

            db.onsuccess = function (event) {

                console.log("1");
                console.log("解决方案成功");
    
                // 声明键值对数组，接收每个餐的信息
                let infor = {
                    cantidad: db.result.cantidad,
                    detalle: db.result.detalle,
                    entrada: db.result.entrada,
                    envase: db.result.envase,
                    nombre: db.result.nombre,
                    precio: db.result.precio
                }
    
                console.log(db.result.nombre);
    
                // 把每一个键值对数组存到数组里
                datos_obt.push(infor);
    
            }

        });

    }


}

function mostrar_db2(real_num_mesa, obj) {

    console.log("exten - B1")

    // 判断显示的是打包还是堂吃
    let ML;

    if (obj[0] == "m") {
        ML = "mesa";
    } else {
        ML = "llevar Nro";
    }

    // let test = localStorage.getItem("test");
    // let mesa_display;

    // if(test == 1){
    //     window.localStorage.setItem("test" , 2);
    //     mesa_display = "block";


    // }else{
    //     window.localStorage.setItem("test" , 1);
    //     mesa_display = "none";
    // }

    // 判断调用该函数的是在哪个页面，从而以不同的格式显示内容
    switch (pag_names) {

        // 如果页面是大厅
        case "sala2.html":

            // 首先先创建div框架
            const div = document.getElementById("part-2_2");

            console.log("ok-1");

            // 下面是大厅餐桌信息的显示格式
            div.innerHTML = div.innerHTML + `
         
                     <div class="mesa">  
         
                        <!-- 桌号 -->
                        <div class="num_mesa">
                            <h2>${ML} ${real_num_mesa}</h2>
                        </div>
         
                        <!-- 点的餐 -->
                        <div class="pedido_del_mesa">
                            <table id="${obj}">
                            </table>
                        </div>
         
                        <!-- 看总价格 -->
                        <h2 id="PT${real_num_mesa}"></h2>
                        <button onclick="Tprecio(${real_num_mesa})">total a pagar</button>
         
                     </div>
              
                     `;

            console.log("aqui9999999 " + datos_obt.length);

            // let num = datos_obt.length + 1 ;

            // console.log("aca  " +num);

            let valor = datos_obt.length;

            if (datos_obt.length == 0) {

                valor = 1;

            }

            // 循环创建table内容
            for (i = 0; i < valor; i++) {

                console.log(datos_obt.length);

                console.log("ok7777");
                // console.log("infor : " + datos_obt[i].cantidad + " " + datos_obt[i].nombre);

                let tabla = document.getElementById(obj);

                tabla.innerHTML = tabla.innerHTML + `
         
                         <tr>
                            <td>${datos_obt[i].cantidad}</td>
                            <td>${datos_obt[i].nombre}</td>
                            <td class="mesa${real_num_mesa}">${datos_obt[i].precio}</td>
                         </tr>
                         `;
            }

            // div.style.display = "none";
            console.log("sisisisis");

            break;

        case "caja.html":
            // 如果是收银台
            const div_caja = document.getElementById("part-2_2");

            break;

        case "cocina.html":
            // 如果是厨房
            break;
    }

    // 若已经显示给localstorage的ifmostrar键的值加一
    let ifmostrar_num = localStorage.getItem("ifmostrar");
    ifmostrar_num++;
    localStorage.getItem("ifmostrar", ifmostrar_num);

    // 获取当前ifmostrar 最新值
    let ifmostrar_new_num = localStorage.getItem("ifmostrar");

    // 判断显示的是打包还是堂吃
    if (obj[0] == "m") {

        console.log("cambio1-ok");

        var xx = "mm" + real_num_mesa;
        localStorage.setItem(xx, "true");

    } else {

        console.log("cambio2-ok");
        var xx = "LL" + real_num_mesa;
        localStorage.setItem(xx, "true");
    }

}


// 大厅查看桌号价格支付价格信息函数
function Tprecio(num) {

    console.log("6-5");

    // 该变量接收一个一单中每个价格的class数组
    let lista_precio = document.getElementsByClassName("mesa" + num);

    // 该变量接收每一次循环加法后的价格
    let calculo = 0;

    // 循环加出价格
    for (i = 0; i < lista_precio.length; i++) {

        calculo += Number[lista_precio[i].value];
    }

    // 提示用户总共需要支付多少钱
    document.getElementById("PT" + num).innerHTML = calculo;
}


// 停止每秒循环
function terminar_exa() {
    clearInterval(examinar);
}