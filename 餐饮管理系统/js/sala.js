// 页面登入状态转变
window.onload = function () {
    var estado = window.localStorage.getItem("sala");
    if (estado == "true") {
        document.getElementById("v").style.display = "block";
    }

    // 禁用双击放大
    var lastTouchEnd = 0;
    document.documentElement.addEventListener('touchend', function (event) {
        var now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, {
        passive: false

    });

}

function cerrar_sesion() {
    window.localStorage.setItem("sala", "false");
    window.location.href = "login.html";

    window.localStorage.setItem("m1", "null");
    window.localStorage.setItem("m2", "null");
    window.localStorage.setItem("m3", "null");
    window.localStorage.setItem("m4", "null");
    window.localStorage.setItem("m5", "null");
    window.localStorage.setItem("m6", "null");
    window.localStorage.setItem("m7", "null");
    window.localStorage.setItem("m8", "null");
    window.localStorage.setItem("m9", "null");
    window.localStorage.setItem("m10", "null");
    window.localStorage.setItem("m11", "null");
    window.localStorage.setItem("m12", "null");
    window.localStorage.setItem("m13", "null");
    window.localStorage.setItem("m14", "null");
    window.localStorage.setItem("m15", "null");
    window.localStorage.setItem("m16", "null");
    window.localStorage.setItem("m17", "null");
    window.localStorage.setItem("m18", "null");

    window.localStorage.setItem("L1", "null");
    window.localStorage.setItem("L2", "null");
    window.localStorage.setItem("L3", "null");
    window.localStorage.setItem("L4", "null");
    window.localStorage.setItem("L5", "null");
    window.localStorage.setItem("L6", "null");
    window.localStorage.setItem("L7", "null");
    window.localStorage.setItem("L8", "null");
    window.localStorage.setItem("L9", "null");
    window.localStorage.setItem("L10", "null");

    // 代表餐桌有餐是否提醒
    window.localStorage.setItem("alerta", "false");
}

// ******************************* 菜系主按钮 *************************************

let opcion;

// 监听各个按钮，根据点击哪个按钮就传对应的值给下面执行张开或何必
const menuss = document.getElementById("menu");
menuss.addEventListener("dblclick", opcion1);


function opcion1() {
    mostrar("menu");
}

const sopas = document.getElementById("sopa");
sopas.addEventListener("dblclick", opcion2);

function opcion2() {
    mostrar("sopa");
}

const arrozs = document.getElementById("arroz");
arrozs.addEventListener("dblclick", opcion3);

function opcion3() {
    mostrar("arroz");
}

const tallarins = document.getElementById("tallarin");
tallarins.addEventListener("dblclick", opcion4);

function opcion4() {
    mostrar("tallarin");
}

const platos = document.getElementById("plato_especial");
platos.addEventListener("dblclick", opcion5);

function opcion5() {
    mostrar("plato_especial");
}

const pollos = document.getElementById("pollo");
pollos.addEventListener("dblclick", opcion6);

function opcion6() {
    mostrar("pollo");
}

const chanchos = document.getElementById("chancho");
chanchos.addEventListener("dblclick", opcion7);

function opcion7() {
    mostrar("chancho");
}

const langostinos = document.getElementById("langostino");
langostinos.addEventListener("dblclick", opcion8);

function opcion8() {
    mostrar("langostino");
}

const carnes = document.getElementById("carne");
carnes.addEventListener("dblclick", opcion9);

function opcion9() {
    mostrar("carne");
}

const combinados = document.getElementById("combinado");
combinados.addEventListener("dblclick", opcion10);

function opcion10() {
    mostrar("combinado");
}

const tortillas = document.getElementById("tortilla");
tortillas.addEventListener("dblclick", opcion11);

function opcion11() {
    mostrar("tortilla");
}

const combos = document.getElementById("combo");
combos.addEventListener("dblclick", opcion12);

function opcion12() {
    mostrar("combo");
}

const criollos = document.getElementById("criollo");
criollos.addEventListener("dblclick", opcion13);

function opcion13() {
    mostrar("criollo");
}

const bebida = document.getElementById("bebidas");
bebida.addEventListener("dblclick", opcion14);

function opcion14() {
    mostrar("bebidas");
}


// 该变量代表用户点击前，最后点击过的那个按钮，若没有值为undefined
var ultimo_tocado;


// 该变量代表用户点击时，页面处于哪个状态 * 状态1 ： 还没有一个表格展开  状态2 ： 有表格展开 默认状态1
let window_estado = document.getElementById("valor").innerHTML;

// 用来下面传点击表格大小尺寸值的宽长变量
let altura_inicial;
let ancho_inicial;

// 用来传到底点击了哪个表格的div document.getElementById
let boton_elegido;

// 该变量用来传点了哪个表格的表格名而已
let tabla_name;

// 该变量用来后面储存指示循环展开按钮或者缩小，主要作用是停止循环需要这个变量名为参数
let accion;

// 该数组存放的是页面的所有表格名
var opciones = ["menu", "sopa", "arroz", "tallarin", "plato_especial", "pollo",
    "chancho", "langostino", "carne", "combinado",
    "tortilla", "combo", "criollo", "bebidas"
];


// 用户点击按钮时触发此方法首先判断页面所处的状态，并做出对应的回应
function mostrar(valor_elegido) {


    // 接收一下点击的是哪个div id
    boton_elegido = document.getElementById(valor_elegido);

    // 下面两个变量代表所点击的表格当前的尺寸
    altura_inicial = boton_elegido.clientHeight;
    ancho_inicial = boton_elegido.clientWidth;

    // 传点击的表格名
    tabla_name = valor_elegido;

    // 状态2
    if (window_estado != "1") {

        // 判断点击的表格是否与最后点击的表格一致
        if (valor_elegido == ultimo_tocado) {
            // 如果是
            // 判断点击的表格在缩放哪个状态
            if (ancho_inicial < 260) {
                // 如果是缩着,便展开
                accion = setInterval(abrir, 1);
            } else {

                // 如果是展开,便收缩
                accion = setInterval(cerrar, 1);
                window_estado = "1";
            }

        } else {
            // 状态1 
            // 如果不是
            // 首先循环把所有表格都设置回原有大小
            for (i = 0; i < opciones.length; i++) {
                let x = document.getElementById(opciones[i]);
                x.style.width = 250 + "px";
                x.style.height = 150 + "px";
                document.getElementById(opciones[i] + "_tabla").innerHTML = "";
                document.getElementById(opciones[i] + "_img").style.backgroundImage = "url(../img/" + opciones[i] + ".jpg)";
            }

            // 清除打开表格时存放在数组里的数据

            lista_obt_number.splice(0, lista_obt_number.length);
            lista_obt_plato.splice(0, lista_obt_plato.length);
            lista_obt_precio.splice(0, lista_obt_precio.length);

            // 循环过后, 打开点击的那个
            accion = setInterval(abrir, 1);
        }
    } else {
        // 状态1
        accion = setInterval(abrir, 1);
    }

    ultimo_tocado = valor_elegido;
}

// ************************************展开表格****************************************************


// 展开表格的方法, 达到效果，需要用setinterval 指定循环使用。
function abrir() {
    // 获取表格经过一次增值后的当前尺寸
    let altura_actual = boton_elegido.clientHeight;
    let ancho_actual = boton_elegido.clientWidth;

    // 每次重复执行这个函数时，给表格的宽加10个px
    boton_elegido.style.width = Number(ancho_actual + 10) + "px";

    // 每次重复执行这个函数时，判断表格长度有没有500 ，若没有给表格的加4个px
    if (altura_actual != 500) {

        boton_elegido.style.height = Number(altura_actual + 4) + "px";

        // 判断因为上面加4，当今表格的长如果超过了500 ，便立刻停止循环，并把长度设置回500
        if (altura_actual > 500) {

            // 把超出的长度设计回500
            boton_elegido.style.height = 500 + "px";
        }
    } else {

        // 如果长度是500，便结束循环-- 与调用显示表格内容方法 -- 还有把页面状态转成2
        clearInterval(accion);
        window_estado = "2";
        mostrar_lista();

    }
}

// ***************************************显示表格内容*****************************************************

// 三个数组,分别储存从数据库获取到的餐号, 餐名 , 价格
var lista_obt_number = [];
var lista_obt_plato = [];
var lista_obt_precio = [];

// 显示表格内容函数
function mostrar_lista() {



    // 让显示的表格如果长过框框边界就加下划线
    boton_elegido.style.overflow = "auto";

    // 隐藏背景图
    const ocultar_img = document.getElementById(tabla_name + "_img");
    ocultar_img.style.backgroundImage = "none";

    // 打开浏览器数据库
    let abrir_datos = indexedDB.open("platos_dato");
    var datos_obj;
    let leer_datos;

    // 如果正常打开了数据库,便开始读取相对于的数据
    abrir_datos.onsuccess = function (event) {



        datos_obj = event.target.result;


        // 下面是批量读取数据的方法
        leer_datos = datos_obj.transaction([tabla_name], "readwrite").objectStore(tabla_name).openCursor();

        // 获取数据要在哪个表格显示的位置
        var escribir = document.getElementById(tabla_name + "_tabla");

        // 如果批量数据读取成功
        leer_datos.onsuccess = function (event) {

            // 用变量接收事件成功对象
            let h = event.target.result;

            if (h) {

                // 把获取到的一个值，插进对应的数组里
                lista_obt_plato.unshift(h.value.plato);
                lista_obt_precio.unshift(h.value.precio);
                lista_obt_number.unshift(h.value.number);

                // 如果数据库里还有值，便继续获取下一个值
                h.continue();
            }

            if (tabla_name == "menu") {



                // 当打开的是便宜餐的表以表格的方式展示每一条获取到的数据
                escribir.innerHTML = escribir.innerHTML + `

              <tr>
                  <td>${lista_obt_number[0]}</td>
                  <td>${lista_obt_plato[0].replace("M", "")}</td>
                  <td>${lista_obt_precio[0]}</td>
                  <td><button onclick="agregar(${lista_obt_number[0]})">agregar</button></td> 
                  <td><input id="s${lista_obt_number[0]}"type="checkbox" onclick="sopa()"/>Sopa</td>
                  <td><input id="w${lista_obt_number[0]}"type="checkbox" onclick="wantan()"/>Wantan</td>
              </tr>        
               `;

            } else {



                // 当打开的是正餐的表，显示格式
                escribir.innerHTML = escribir.innerHTML + `

                <tr>
                    <td>${lista_obt_number[0]}</td>
                    <td>${lista_obt_plato[0]}</td>
                    <td>${lista_obt_precio[0]}</td>
                    <td><button onclick="agregar(${lista_obt_number[0]})">agregar</button></td> 
                </tr>    
                `;

            }



        }

    }
}

// ********************************************** 缩小表格,以及隐藏表格内容 **************************************************************

function cerrar() {

    // 清除打开表格时存放在数组里的数据
    lista_obt_number.splice(0, lista_obt_number.length);
    lista_obt_plato.splice(0, lista_obt_plato.length);
    lista_obt_precio.splice(0, lista_obt_precio.length);

    // 获取表格经过一次剪短后的当前尺寸
    let altura_actual = boton_elegido.clientHeight;
    let ancho_actual = boton_elegido.clientWidth;

    // 删除表格内容
    let ocultar_lista = document.getElementById(tabla_name + "_tabla");
    ocultar_lista.innerHTML = "";

    // 恢复表格缩小后的背景图
    let mostrar_img = document.getElementById(tabla_name + "_img");
    mostrar_img.style.backgroundImage = "url(../img/" + tabla_name + ".jpg)";

    // 缩小长度
    // 如果长度没有原本那么小就减6px
    if (altura_actual != 150) {

        boton_elegido.style.height = Number(altura_actual - 6) + "px";

        // 如果减过头了就设计成150px
        if (altura_actual < 150) {
            boton_elegido.style.height = 150 + "px";
        }
    }

    // 缩小宽度
    if (ancho_actual != 250) {

        boton_elegido.style.width = Number(ancho_actual - 12) + "px";

        // 如果减过头了就设计成250px
        if (ancho_actual < 250) {
            boton_elegido.style.width = 250 + "px";
        }
    }

    // 当表格长宽都已经回到原本的大小时,结束循环
    if (altura_actual == 150 && ancho_actual == 250) {
        clearInterval(accion);
    }


}

// **************************************把选择的餐添加到右边表格里*****************************************************************


// 代表右边表格的状态， 1 是闭合 、 2 是展开
let estado_tabla_derecha = 1;

// 该变量代表点击了几次选择餐的按钮
let click_num = 0;

// 获取表格最外层的方块id
const derTabla = document.getElementById("lista_fondo");

// 接收循环打开或闭合表格函数的变量
let exten_largo;

// 接收右边表格内容的变量
const tabla_infor = document.getElementById("pedido_tabla");

// 待命数组 - 展示存放点了什么餐的信息
let lista_espera = [];

// 该变量接收便宜餐的entrada
let entrada = "";

// 当便宜餐点击了sopa
function sopa() {
    entrada = "sopa";
}

// 当便宜餐点击了wantan
function wantan() {
    entrada = "wantan";
}


// 点击事件
function agregar(boton_num) {



    // 上调点击次数的变量
    click_num += 1;

    // 判断右边表格当今的状态
    if (estado_tabla_derecha == 1) {



        // 如果判断为闭合状态，就调用展开表格的函数
        exten_largo = setInterval(extender_largo, 1);
        estado_tabla_derecha = 2;
    }

    // 获取点击事件真正对应想要的餐的数字
    let num_real = lista_obt_plato.length - boton_num;

    // 该变量存放的信息是一个餐的所有信息
    let un_pedido = {
        cant: 1,
        name: lista_obt_plato[num_real],
        money: lista_obt_precio[num_real],
        entrada: entrada,
        det: ""
    };

    // 把上面收集的信息存进待命数组里
    lista_espera.unshift(un_pedido);

    // 消除表格内的信息，以免再次循环所有信息会重叠
    tabla_infor.innerHTML = "";

    // 循环把待命数组里的所有信息都在右边表格显示
    for (i = 0; i < lista_espera.length; i++) {


        /* 表格格式 : 输入框（储存同一个餐的数量 ， 默认 1 ）、 
       餐名 、 餐价格（实现计算然后赋值给变量） 、 删除按钮 、 备注按钮*/

        let name = lista_espera[i].name;

        if (name[0] == "M") {
            name = name.replace("M", "");
        }

        tabla_infor.innerHTML = tabla_infor.innerHTML + `

       <tr>
       <td name="${i}">${lista_espera[i].cant}</td>
       <td>${name}</td>
       <td>${lista_espera[i].entrada}</td>
       <td>${lista_espera[i].money}</td>
       <td><button onclick="eliminar(${i})">Eliminar</button></td> 
       <td><button onclick="editar(${i})">Editar</button></td> 
       </tr>
       <tr>
       <td></td>
       <td>${lista_espera[i].det}</td>
       </tr>
        `;
    }

    // 消除entrada的最后一次选项,但先要判断是否点击过
    if (entrada == "sopa" || entrada == "wantan") {

        entrada = "";
        document.getElementById("s" + boton_num).checked = false;
        document.getElementById("w" + boton_num).checked = false;

    }

    // 显示右边表格选择
    document.getElementById("boton_envio").style.display = "block";

}

// ***************************** 右边表格的系列展现 **********************************************************************

// 修改右边表格中一行数据的函数
function editar(num) {

    /* 把表格内容隐藏，然后重新循环出待命数组里的信息，但遇到我们点击要修改的那个时，
    改变成能供我们修改的显示格式*/

    // 消除原内容，重新遍历显示表格
    tabla_infor.innerHTML = "";


    for (i = 0; i < lista_espera.length; i++) {

        // 计算同一个餐，不同数量时的价格
        let precio_variado = lista_espera[i].cant * lista_espera[i].money;

        // 判断如果循环到的那条信息是否与用户点击的相同，若是则显示不同的格式
        if (i == num) {

            tabla_infor.innerHTML = tabla_infor.innerHTML + `

            <tr>
            <td><input class="numero" id="N${i}" type="number" placeholder="${lista_espera[i].cant}"/></td>
            <td><input id="D${i}" type="text" placeholder="detalle..."/></td>
            <td>${precio_variado}</td>
            <td><button onclick="aceptar(${i})">Aceptar</button></td> 
            <td><button onclick="actualizar()">Cancelar</button></td> 
            </tr>
             `;
            continue;
        }

        tabla_infor.innerHTML = tabla_infor.innerHTML + `

        <tr>
        <td name="${i}">${lista_espera[i].cant}</td>
        <td>${lista_espera[i].name}</td>
        <td>${precio_variado}</td>
        <td><button onclick="eliminar(${i})">Eliminar</button></td> 
        <td><button onclick="editar(${i})">Editar</button></td> 
        </tr>
         `;
    }
}

// 上面这个修改函数中的确定按钮
function aceptar(num) {

    // 获取要修改成的信息
    let plato = lista_espera[num].name;
    let detalle_plato = document.getElementById("D" + num).value;
    let entrada = lista_espera[num].entrada;

    // 判断同一个餐的数量有没有被修改，如果没有，那他的价格保存不变
    let new_num = document.getElementById("N" + num).value;
    let precio = lista_espera[num].money * new_num;

    if (new_num == "") {
        new_num = 1;
        precio = lista_espera[num].money;
    }



    // 把新信息投进待命数组里，把原有的替换掉
    let nuevo_infor = {
        cant: new_num,
        name: plato,
        money: precio,
        det: detalle_plato,
        entrada: entrada
    };

    lista_espera.splice(num, 1, nuevo_infor);

    // 重新调用遍历数组的函数刷新一下
    actualizar();
}


// 删除右边表格一行数据的函数
function eliminar(num) {
    lista_espera.splice(num, 1);
    actualizar();
    // 判断如果删除了一个餐后，待命数组长度为零的话，闭合右边表格
    if (lista_espera.length == 0) {
        cerrar_derTabla();
    }
}

// 刷新表格的函数
function actualizar() {

    // 消除表格内的信息，以免再次循环所有信息会重叠
    tabla_infor.innerHTML = "";

    // 循环把待命数组里的所有信息都在右边表格显示
    for (i = 0; i < lista_espera.length; i++) {
        tabla_infor.innerHTML = tabla_infor.innerHTML + `   
           <tr>
           <td name="${i}">${lista_espera[i].cant}</td>
           <td>${lista_espera[i].name}</td>
           <td>${lista_espera[i].entrada}</td>
           <td>${lista_espera[i].money}</td>
           <td><button onclick="eliminar(${i})">Eliminar</button></td> 
           <td><button onclick="editar(${i})">Editar</button></td> 
           </tr>
           <tr>
           <td></td>
           <td>${lista_espera[i].det}</td>
           </tr>
            `;
    }

}


// 展开右边表格的函数
function extender_largo() {



    // 获取表格当前的高度
    let derTabla_altura_aumento = document.getElementById("lista_fondo").clientHeight;

    // 消除背景图
    derTabla.style.backgroundImage = "none";

    // 给表格添加长度判断达到要求时停止这个循环
    if (derTabla_altura_aumento != 600) {

        document.getElementById("lista_fondo").style.height = derTabla_altura_aumento + 10 + "px";


        // 如果加长度加过头了，就将长度固定回600 ，然后停止循环
        if (derTabla_altura_aumento > 600) {

            derTabla.style.height = 600 + "px";

        }

    } else {
        // 把表格状态修改成展开
        estado_tabla_derecha = 2;
        clearInterval(exten_largo);

    }
}


// 闭合表格函数
function cerrar_derTabla() {

    // 恢复背景图
    derTabla.style.backgroundImage = "url(../img/notas2.jpg)";

    // 把表格状态设置回闭合状态
    estado_tabla_derecha = 1;

    // 缩小表格
    document.getElementById("lista_fondo").style.height = "200px";
    document.getElementById("boton_envio").style.display = "none";

}

// ******************************************** 右边表格发送功能 ***************************************************

// 该变量表示点了的餐是外卖（2）， 或者堂吃（1） -- 默认1
let estado_pedido = 1;

// 该变量接收数据要存到哪个数据仓库
let almacen_name;

// 接收错误提示的变量
let error_alert = document.getElementById("envio_alerta");

// 提示用户中 ， 该变量接收最后是否点了确定按钮，默认false（没有）
// let acept_click = false;

let alert_pregunta;

// 下面变量接收一下外卖用盒子还是胶袋的选择按钮
const llevar_modo = document.getElementById("llevar_modo");

// 该变量接收关于用户最终用什么打包的选择
let llevar_decision;

// 该变量接收用户自定义外卖盒子的价格
let total_taper_precio = document.getElementById("otro").value;

// 该函数监视外卖按钮是否被点击，从而改变上面菜单的状态
function llevar() {

    // 修改成外卖状态
    estado_pedido = 2;

    // 提示选择用饭盒打包还是胶带
    error_alert.innerHTML = "Elegir Llevar en bolsa o taper u otro";
    error_alert.style.display = "block";
    llevar_modo.style.display = "flex";
}

function comer_mesa() {

    estado_pedido = 1;
}

// 当餐桌号输入错误时，重新点击输入框时，隐藏错误提示
function act_estado() {
    error_alert.style.display = "none";
    error_alert.innerHTML = "";
}

// 用户选择用胶袋带包
function bolsa() {
    llevar_decision = "bolsa";
}

// 用户用盒子打包
function taper() {
    llevar_decision = "taper";
}

// 用户自定义盒子价格
function otro() {
    llevar_decision = "true";

}

// 发送函数
function enviar() {



    // alert_pregunta = false;

    // 获取用户输入的哪个餐桌号
    let num_mesa = document.getElementById("mesa_number").value;




    // 判断餐单的状态打包还是外买，从而判断要把数据放到哪个仓库
    if (estado_pedido == 1) {



        // 判断用户输入的餐桌号是否正确,如果错误便退出该函数，以及提示用户
        if (num_mesa > 18) {
            // 当桌号超过18

            num_mesa = "";
            error_alert.style.display = "block";
            error_alert.innerHTML = "numero de mesa ingresado es incorrecto";
            return;
        } else if (num_mesa == "") {

            // 当忘记了填餐和勾选打包选项
            error_alert.style.display = "block";
            error_alert.innerHTML = "falta agregar el numero de mesa o para llevar";
            return;

        }

        let acept_click = localStorage.getItem("alerta");



        almacen_name = "m" + num_mesa;

        // 判断有没有点击确定按钮
        if (acept_click == "true") {

            // 解决bug ： 单以显示时，再往该单添加餐，添加的餐没能显示
            let xx = "m" + almacen_name;
            localStorage.setItem(xx, "false");
            // --------------------------------------------------------

            enviarDB(almacen_name);
            alert_pregunta = false;
            // location.replace("sala2.html");
            location.reload();


        } else {

            // 调用仓库判断函数，判断用户输入的餐座号对应的仓库是否已经占用
            analizar(almacen_name);
            alert_pregunta = true;
        }

    } else if (estado_pedido == 2) {

        // 如果是打包,调用函数判断2
        analizar2();

        // 把勾选框变回未勾选状态
        document.getElementById("llevar_option").checked = false;



        // 隐藏提示选择盒子还是胶袋打包的按钮
        llevar_modo.style.display = "none";

        // 让选项恢复默认情况
        llevar_decision = "null";

    }

}

// 该变量分别接收确定和取消的按钮
const btnA = document.getElementById("btnAcept");
const btnD = document.getElementById("btnDeneg");

// 打开数据库
let db;
let mesa_almacen = indexedDB.open("lista_mesas");

mesa_almacen.onsuccess = function (event) {
    db = event.target.result;
}

//判断堂吃选项的函数，判断用户输入的餐座号对应的仓库是否已经占用
function analizar(mesa) {


    // 查看该桌号在localstore中的值，是否为null，代表该桌号是否为空
    let LS_value = localStorage.getItem(mesa);


    if (LS_value == "null") {

        // 代表桌没人
        //如果仓库没有被占用


        // 调用添加数据的函数
        enviarDB(mesa);
    } else {
        // 有人
        // 如果该仓库已经有餐了，提示是否确定要往里加

        console.log("preguntar");

        error_alert.innerHTML = "la mesa ingresado ya existe pedido en linea , deseas agregar?";
        error_alert.style.display = "block";
        btnA.style.display = "block";
        btnD.style.display = "block";
        alert_pregunta = true;

    }
}

// 判断打包选项的函数
function analizar2() {

    if (llevar_decision == "true") {
        llevar_decision = document.getElementById("otro").value;
    }

    // 外卖选项无需让用户选择哪个数据仓库，所以判断哪个没有被占用就使用即可
    for (i = 0; i < 11; i++) {

        // 该变量代表要判断的仓库名
        let llevar_number = "L" + i;

        // 该变量接收上面仓库名返回对应的值
        let resultado = localStorage.getItem(llevar_number);

        // 判断上面值是否为null ，就以此为参数调用发送函数
        if (resultado == "null") {

            // 调用发送函数
            enviarDB(llevar_number);

            //修改对应仓库为占用状态
            localStorage.setItem(llevar_number, "ocupado");

            // 一但发送了信息后，便跳出函数
            return;
        }
    }

}

// 选择的桌号，已经有餐时，确定按钮函数
function aceptarDB() {


    error_alert.style.display = "none";
    btnA.style.display = "none";
    btnD.style.display = "none";
    // document.getElementById("mesa_number").value = "";
    localStorage.setItem("alerta", "true");

    // espera = false;
    // alert_pregunta = false;
    enviar();
}

// 选择的桌号，已经有餐时，取消按钮函数
function denegarDB() {


    error_alert.style.display = "none";
    btnA.style.display = "none";
    btnD.style.display = "none";
    document.getElementById("mesa_number").value = "";
}

// 添加数据的函数
function enviarDB(num) {

    // ***********************************  真  **********************************************************

    // num 是桌号或者外卖号

    // 该变量接收桌号或外卖号纯数字
    let numberR;

    // 判断混合字母的桌号的长度，从而确定抽出纯数字
    if (num.length == 2) {
        numberR = 0 + num[1];
    } else {
        numberR = num[1] + num[2];
    }

    console.log("comprobando numero mesa " + numberR);

    // 该数组接收需要储存到localstorange的是什么数据
    let varinfor = ["cantidad", "nombre", "precio", "detalle", "entrada", "envase"];




    // 获取餐桌号在local store对应的值，且用变量接收
    let LS_value = localStorage.getItem(num);

    // 通过localstore的信息，判断要添加餐的桌号，当前已经有餐了没有
    if (LS_value == "null") {

        // 通过循环，把待命数组里的所有数据都存进对应的仓库里
        // 如果该桌号第一次下单
        for (i = 0; i < lista_espera.length; i++) {

            // 该变量接收要添加到的桌号或外卖号
            let notaNum;

            // 判断是打包还是外卖
            if (num[0] == "m") {
                notaNum = "mesa" + numberR;
            } else if (num[0] == "L") {
                notaNum = "llev" + numberR;
            }

            // 该变量接收改单储存的第几个菜
            let numberP = "p" + i;

            // 下面变量接收储存时的键名
            let constructorC = notaNum + "-" + numberP + "-" + varinfor[0];
            let constructorN = notaNum + "-" + numberP + "-" + varinfor[1];
            let constructorP = notaNum + "-" + numberP + "-" + varinfor[2];
            let constructorD = notaNum + "-" + numberP + "-" + varinfor[3];
            let constructorET = notaNum + "-" + numberP + "-" + varinfor[4];
            let constructorEV = notaNum + "-" + numberP + "-" + "envase";

            // 把对应数据储存到localstorange
            localStorage.setItem(constructorC, lista_espera[i].cant);
            localStorage.setItem(constructorN, lista_espera[i].name);
            localStorage.setItem(constructorP, lista_espera[i].money);
            localStorage.setItem(constructorD, lista_espera[i].det);
            localStorage.setItem(constructorET, lista_espera[i].entrada);

            // 判断如果是外卖就储存上是用什么打包
            if (num[0] == "L") {
                localStorage.setItem(constructorEV, llevar_decision);
            }

            // 测试键名
            console.log("测试建名  " + constructorC + constructorD + constructorP + constructorN + constructorET);

            // 更换localstore中，餐桌号对应的值
            window.localStorage.setItem(num, i);
        }

    } else {

        // 若该餐桌已经有餐了，这是要添加
        for (i = 0; i < lista_espera.length; i++) {

            // 获取当前localstore餐桌号对应的最新值
            let LS_value_actual = localStorage.getItem(num);

            // 由于返回的数字是字符，需转换成数值
            let xx = parseInt(LS_value_actual);

            // 上面值加一等于我们要用到的餐号
            let real_value = xx + 1;

            // 如果是外卖的情况下是没有往单里加餐的情况，所以下面变量直接写mesa
            let notaNum = "mesa" + numberR;


            // 该变量接收改单储存的第几个菜
            let numberP = "p" + real_value;

            // 下面变量接收储存时的键名
            let constructorC = notaNum + "-" + numberP + "-" + varinfor[0];
            let constructorN = notaNum + "-" + numberP + "-" + varinfor[1];
            let constructorP = notaNum + "-" + numberP + "-" + varinfor[2];
            let constructorD = notaNum + "-" + numberP + "-" + varinfor[3];
            let constructorET = notaNum + "-" + numberP + "-" + varinfor[4];
            let constructorEV = notaNum + "-" + numberP + "-" + "envase";

            // 把对应数据储存到localstorange
            localStorage.setItem(constructorC, lista_espera[i].cant);
            localStorage.setItem(constructorN, lista_espera[i].name);
            localStorage.setItem(constructorP, lista_espera[i].money);
            localStorage.setItem(constructorD, lista_espera[i].det);
            localStorage.setItem(constructorET, lista_espera[i].entrada);

            // 更换localstore中，餐桌号对应的值
            window.localStorage.setItem(num, real_value);
        }

    }

    // ----------------------------------------------------------------------------------------------------



    // 通过localstore的信息，判断要添加餐的桌号，当前已经有餐了没有
    if (LS_value == "null") {

        // 通过循环，把待命数组里的所有数据都存进对应的仓库里
        // 如果该桌号第一次下单
        for (i = 0; i < lista_espera.length; i++) {



            db.transaction([num], "readwrite").objectStore(num).add({

                Num_pedido: i,
                cantidad: lista_espera[i].cant,
                nombre: lista_espera[i].name,
                precio: lista_espera[i].money,
                detalle: lista_espera[i].det,
                entrada: lista_espera[i].entrada,
                envase: llevar_decision

            })
        }

    } else {



        // 若该餐桌已经有餐了，这是要添加
        for (i = 0; i < lista_espera.length; i++) {



            // 获取当前localstore餐桌号对应的最新值
            let LS_value_actual = localStorage.getItem(num);

            let xx = parseInt(LS_value_actual);

            // 上面值加一等于我们要用到的
            let real_value = xx + 1;




            db.transaction([num], "readwrite").objectStore(num).add({

                Num_pedido: real_value,
                cantidad: lista_espera[i].cant,
                nombre: lista_espera[i].name,
                precio: lista_espera[i].money,
                detalle: lista_espera[i].det

            })
        }
    }

    // 删除待命数组内容
    lista_espera = [];

    // 清空输入框数字
    document.getElementById("mesa_number").value = "";

    // 把餐单的状态设置回堂吃（1）
    estado_pedido = 1;

    // 把表格状态恢复闭合状态
    estado_tabla_derecha = 1;

    // 把右边表格所有内容， 和待命数组清空

    // 隐藏右边表格下方选项
    document.getElementById("boton_envio").style.display = "none";

    // 餐单发送后，删除表格内容
    tabla_infor.innerHTML = "";

    // 调用闭合表格函数
    cerrar_derTabla();

    window.localStorage.setItem("alerta", "false");

    // 把错误提示取消
    error_alert.innerHTML = "";

    // 隐藏选择用饭盒打包还是胶带，与按钮
    document.getElementById("taper").checked = false;
    document.getElementById("bolsa").checked = false;
    document.getElementById("otro").value = "";
    document.getElementById("mesa_number").value = "";

}

