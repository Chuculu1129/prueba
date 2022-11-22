
// 该变量用来后期控制执行或停止setinterval 函数
let proceso;

// 该变量接收每一单在lozalstorange的长度
let localStorage_legth;

// 该变量接收使用下面函数的是哪个页面
var a = location.href.split('/');
var pag_names = a[a.length - 1];


// 每当第一次进入网页时，把每一个桌和外卖的单是否为显示的状态，恢复初始状态：未显示
window.open(parejadb());

// 刚进入页面时，就执行每秒执行函数
window.open(empezarML());

// 该函数表示每个单的可见状态 ： false 为未显示 ，以显示的话，用 s c p 分别代表已在大厅，厨房，收银台显示， 后期判断如果三者都显示就修改其值为true，不再查看这桌
function parejadb() {

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

    // localStorage.setItem("historialNum", 0);
  



}

// 启动每秒执行函数的函数
function empezarML() {
    proceso = setInterval(analizarML, 1000);
}

// 停止每秒执行的函数
function terminarML() {
    clearInterval(proceso);
}


// 这是每秒都要执行的判断函数 - 判断桌和外卖的单是否已经显示
function analizarML() {



    // 循环堂吃的键值对的状态
    for (i = 1; i < 19; i++) {



        // 该变量接收检测对象
        let exa_obj = "mm" + i;

        // 该变量接收获取该对象在localstore的值
        let exa_obj_result = localStorage.getItem(exa_obj);

        // 判断对象值如果为false就以此为参数调用检测函数
        if (exa_obj_result != "true") {


            // 调用测试函数2
            exa_db("m" + i);
        }
    }

    //循环打包的键值对情况
    for (i = 1; i < 11; i++) {



        // 该变量接收检测对象
        let exa_obj = "LL" + i;

        // 该变量接收获取该对象在localstore的值
        let exa_obj_result = localStorage.getItem(exa_obj);

        // 判断对象值如果为false就以此为参数调用检测函数
        if (exa_obj_result == "false") {




            // 调用测试函数2
            exa_db("L" + i);
        }

    }

}

// 测试函数2 
function exa_db(num) {



    // 获取该单在localstorange的长度
    localStorage_legth = localStorage.getItem(num);

    // 判断上一行返回的长度，若是null代表无餐不用显示 ， 反之需要显示
    if (localStorage_legth != "null") {


        muestra(num, localStorage_legth);
    }
}

/* ------------------------------------------------  显示功能   --------------------------------------------------------------- */

// 该数组接收我们需要向localstore获取的数据
let datos_deseado = ["cantidad", "nombre", "precio", "detalle", "entrada", "envase"];

// 显示函数part 1 ：获取需要显示的数据的函数( 单字母桌号或者外卖号 ， 单的长度（从0开始计）)
function muestra(MLnum, long) {

    // 该变量接收单中的开头显示，（mesa01 or llev01）的字幕部分
    let title_letra;

    // 该变量显示titulo的数字部分
    let title_num;

    // 该变量代表与mm1 LL1 等相同的号，以便后期查看该单已经显示了没有
    let MLestado_obj = MLnum[0] + MLnum;

    // 判断是外卖还是堂吃，从而赋值给titulo的字幕部分
    if (MLnum[0] == "m") {

        title_letra = "mesa";

    } else if (MLnum[0] == "L") {

        title_letra = "llev";
    }

    // 判断单号的长度从而获得titulo 的数字部分
    if (MLnum.length == 2) {

        title_num = "0" + MLnum[1];

    } else if (MLnum.length == 3) {
        title_num = MLnum[1] + MLnum[2];
    }

    // 该变量接收组装好的桌号或者外卖号
    let ML_name_constructor = title_letra + title_num;

    /* 由于是外卖的情况下localstorange里的值，只是null 或者ocupado ，
 所以需要计算一下它的长度，当作值来传输下面的其他函数*/

    if (MLnum[0] == "L") {

        for (i = 0; i < 500; i++) {

            let examinar_name = "llev" + title_num + "-" + "p" + i + "-" + "cantidad";
            let obt_cantidad = localStorage.getItem(examinar_name);
            let xx = parseInt(obt_cantidad);

            if (xx >= 0) {

            } else {
                long = i - 1;

                // 下面用来储存外卖单的长度
                let xx = "N" + MLnum;
                localStorage.setItem(xx, long);
                break;
            }
        }
    }

    // 判断当前的是哪个页面，从而显示不同的格式
    switch (pag_names) {

        // 如果当前页面是大厅
        case "sala2.html":

            // 在mm1 成true之前，判断该单是否已经显示，以免重叠 
            let analizarML_obj = localStorage.getItem(MLestado_obj);

            if (analizarML_obj != "false") {

                for (i = 0; i < analizarML_obj.length; i++) {

                    if (analizarML_obj[i] == "s") {

                        break;
                    }
                }
            }

            // 创建要显示的单的框架
            const div = document.getElementById("part-2_2");

            div.innerHTML = div.innerHTML + `
         
                     <div class="mesa" style="display:flex;">  
         
                        <!-- 桌号 -->
                        <div class="num_mesa">
                            <h2>${ML_name_constructor}</h2>
                        </div>
         
                        <!-- 点的餐 -->
                        <div class="pedido_del_mesa">
                            <table id="${MLnum}">
                            </table>
                        </div>
         
                        <!-- 看总价格 -->
                        <h2 id="PT${MLnum}" style="display : none;"></h2>
                        <button onclick="Tprecio('x${MLnum}')">total a pagar</button>
         
                    </div>
              
                    `;


            // 循环把单中的每一个餐都显示出来
            for (i = 0; i <= long; i++) {

                // 该变量用来接收文字的颜色
                let color;

                // 获取对应的数据
                let db_constructor = ML_name_constructor + "-" + "p" + i + "-" + "cantidad";
                let cantidad = localStorage.getItem(db_constructor);

                let db_constructor2 = ML_name_constructor + "-" + "p" + i + "-" + "nombre";
                let nombre = localStorage.getItem(db_constructor2);

                let db_constructor3 = ML_name_constructor + "-" + "p" + i + "-" + "precio";
                let precio = localStorage.getItem(db_constructor3);

                let tabla = document.getElementById(MLnum);

                // 判断餐是便宜餐，还是正常，从而文字显示不同的颜色：便宜餐红色
                if (nombre[0] == "M") {

                    color = "red";
                    nombre = nombre.replace("M", "");
                } else {
                    color = "black";
                }

                tabla.innerHTML = tabla.innerHTML + `
         
                    <tr style="color: ${color};">
                        <td>${cantidad}</td>
                        <td>${nombre}</td>
                        <td class="${"ML" + MLnum}">${precio}</td>
                    </tr>
                `;

                // 上面的MLnum 代表m1 L1
            }

            // 已经显示后，修改localstorange的mm1 为以显示，先判断其值是否还是false ，从而调整赋值已显示的方式
            let MLestado = localStorage.getItem(MLestado_obj);

            if (MLestado == "false") {
                localStorage.setItem(MLestado_obj, "s");
            } else {
                localStorage.setItem(MLestado_obj, MLestado + "s");
            }

            break;


        case "caja.html":


            // 在mm1 成true之前，判断该单是否已经显示，以免重叠 
            let analizarML_obj2 = localStorage.getItem(MLestado_obj);

            if (analizarML_obj2 != "false") {

                for (i = 0; i < analizarML_obj2.length; i++) {

                    if (analizarML_obj2[i] == "s") {

                        break;
                    }
                }
            }

            // 创建要显示的单的框架
            const div2 = document.getElementById("part-2_2");

            div2.innerHTML = div2.innerHTML + `
                
                            <div class="mesa" style="display:flex;">  
                
                               <!-- 桌号 -->
                               <div class="num_mesa">
                                   <h2>${ML_name_constructor}</h2>
                               </div>
                
                               <!-- 点的餐 -->
                               <div class="pedido_del_mesa">
                                   <table id="${MLnum}">
                                   </table>
                               </div>
                
                               <!-- 看总价格 -->
                               <h2 id="PT${MLnum}" style="display : none;"></h2>

                               <div class="colita" style="display:flex;">
                                  <button onclick="Tprecio('x${MLnum}')">ver total</button>
                                  <button onclick="pagarAZ('x${MLnum}')">pagar</button>
                               </div>
                               
                
                           </div>
                     
            `;


            // 循环把单中的每一个餐都显示出来
            for (i = 0; i <= long; i++) {

                // 该变量用来接收文字的颜色
                let color;

                // 获取对应的数据
                let db_constructor = ML_name_constructor + "-" + "p" + i + "-" + "cantidad";
                let cantidad = localStorage.getItem(db_constructor);

                let db_constructor2 = ML_name_constructor + "-" + "p" + i + "-" + "nombre";
                let nombre = localStorage.getItem(db_constructor2);

                let db_constructor3 = ML_name_constructor + "-" + "p" + i + "-" + "precio";
                let precio = localStorage.getItem(db_constructor3);

                let tabla = document.getElementById(MLnum);

                // 判断餐是便宜餐，还是正常，从而文字显示不同的颜色：便宜餐红色
                if (nombre[0] == "M") {

                    color = "red";
                    nombre = nombre.replace("M", "");
                } else {
                    color = "black";
                }

                tabla.innerHTML = tabla.innerHTML + `
                
                           <tr style="color: ${color};">
                               <td class="${MLnum + "cantidad"}">${cantidad}</td>
                               <td class="${MLnum + "nombre"}">${nombre}</td>
                               <td class="${"ML" + MLnum}">${precio}</td>
                           </tr>
                       `;

                // 上面的MLnum 代表m1 L1
            }

            // 已经显示后，修改localstorange的mm1 为以显示，先判断其值是否还是false ，从而调整赋值已显示的方式
            let MLestado2 = localStorage.getItem(MLestado_obj);

            if (MLestado2 == "false") {
                localStorage.setItem(MLestado_obj, "s");
            } else {
                localStorage.setItem(MLestado_obj, MLestado + "s");
            }
            break;

        case "cocina.html":
            break;
    }

    // 判断同一个单在三个页面是否已经为显示状态，若是，就把mm1值改成true ，后面就不再循环它了。
    let exa_estado = localStorage.getItem(MLestado_obj);

    let xxx = exa_estado.length;

    localStorage.setItem(MLestado_obj, "true");
}


/*-------------------------------------------  显示总价格功能  ----------------------------------------------------------------------*/

// 该变量接收总共需要支付的金额，以便下面的支付框部分使用
let monto_total;

// num 代表 m1 L1 ...
function Tprecio(objeto) {

    let objx = objeto.replace("x", "");
    let kk = "ML" + objx;

    // 首先获取所有单中餐的每一个价格
    let precios = document.getElementsByClassName(kk);

    // 该变量用来接收相加好后的总价格,默认值0
    let monto_a_cobrar = 0;

    // 通过循环，计算出需要支付的总价格
    for (i = 0; i < precios.length; i++) {

        console.log("2");

        let precio_de_uno = precios[i].innerHTML;

        let xx = parseInt(precio_de_uno);

        monto_a_cobrar = monto_a_cobrar + xx;
    }

    // 让计算出来的总价格显示给客户
    let obj = document.getElementById("PT" + objx);
    obj.innerHTML = "S/." + monto_a_cobrar;
    obj.style = "color : red; display:block;";

    // 该变量用来接收自从总价格显示后，过了几秒
    let segundo = 0;

    // 该函数的功能是再总价格显示后的5秒内自动隐藏
    let conteo = setInterval(function () {

        if (segundo != 5) {
            segundo++
        } else {
            obj.style = "display:none;";
            clearInterval(conteo);
        }
    }, 1000);

    return monto_a_cobrar = monto_total;
}


/*------------------------------------------------- 支付功能  ------------------------------------------------------------------------------------ */

// 该变量接收支付弹窗的对象，以便后期让它显示与隐藏
const ventana_pago = document.getElementById("cuadro_pago");

// 该变量用来接收客户是用哪种方式支付的
let medio_pago_elejido;

// 显示总支付金额的对象
const mostrar_total_a_pagar = document.getElementById("precio_total");

// 该变量用来接收监视用户用多少现金支付的setinterval 
let verifi;

// 该变量用来接收otro勾选框中点击后显示的三个选项
var otro_inter = document.getElementById("otro2");

// 该变量用来接收勾选了otro后，客户选择了里面的哪个选项
let otro_inter_option;

// 该变量用来接收需要收钱的单是堂吃还是外卖
let cobrar_M_or_L;

function pagarAZ(num) {

    // 取消勾选了的tarjeta勾选框
    document.getElementById("tarjeta").checked = false;

    // 取消勾选otro的勾选框
    document.getElementById("otro_checkbox").checked = false;

    let objx = num.replace("x", "");
    let kk = "ML" + objx;

    // 首先获取所有单中餐的每一个价格
    let precios = document.getElementsByClassName(kk);

    // 该变量用来接收相加好后的总价格,默认值0
    let monto_a_cobrar = 0;

    // 通过循环，计算出需要支付的总价格
    for (i = 0; i < precios.length; i++) {

        console.log("2");

        let precio_de_uno = precios[i].innerHTML;

        let xx = parseInt(precio_de_uno);

        monto_a_cobrar = monto_a_cobrar + xx;
    }


    // 让支付弹窗显示
    ventana_pago.style.display = "flex";

    // 把单号赋值给一个全局变量，方便后期判断是堂吃还是外卖
    cobrar_M_or_L = num;

    // 在支付框中，给客户展示总共需要支付的金额
    mostrar_total_a_pagar.innerHTML = monto_a_cobrar;
    monto_total = monto_a_cobrar;

}

// 点击现金支付的函数
function efectivo() {

    // 取消勾选了的tarjeta勾选框
    document.getElementById("tarjeta").checked = false;

    // 取消勾选otro的勾选框
    document.getElementById("otro_checkbox").checked = false;

    // 给medio de pago 赋值是用当下的方式支付
    medio_pago_elejido = "efectivo";

    // 消除其余两种选项的点击事件，以免之前误触过其他按钮
    borrarOption();

    // 暂停显示单的setinterval ，且启动监视用户输入多少钱支付和反馈找多少钱的函数
    clearInterval(proceso);

    verifi = setInterval(function () {

        const billete = document.getElementById("pagoNum");
        const vuelto = document.getElementById("vuelto");

        if (billete.value > monto_total) {
            vuelto.innerHTML = parseInt(billete.value) - parseInt(monto_total);
        }

    }, 500);
}

// 点击银行卡支付的函数
function tarjeta() {

    // 取消勾选otro的勾选框
    document.getElementById("otro_checkbox").checked = false;

    // 消除其余两种选项的点击事件，以免之前误触过其他按钮
    borrarOption();

    // 给medio de pago 赋值是用当下的方式支付
    medio_pago_elejido = "tarjeta";
}

// 用yape支付
function yape() {
    medio_pago_elejido = "yape";
}

// 用plin 支付
function plin() {
    medio_pago_elejido = "plin";
}

// 手写支付方式
function mano_especi() {
    medio_pago_elejido  = "descripcion";
}

// 点击otro支付的函数
function otro() {

    // 取消勾选了的tarjeta勾选框
    document.getElementById("tarjeta").checked = false;

    // 消除其余两种选项的点击事件，以免之前误触过其他按钮
    borrarOption();

    // 显示otro中的选项
    otro_inter.style.display = 'block';
}

// 该函数是用来在支付框中点击按钮后恢复到最初状态
function borrarOption() {

    // 停止监视多少现金支付的setinterval
    clearInterval(verifi);

    // 把现金输入框内容清空
    document.getElementById("pagoNum").value = "";

    // 把要找多少钱的提示隐藏
    document.getElementById("vuelto").innerHTML = "";

    // 隐藏勾选otro后显示的另外一些选项
    otro_inter.style.display = "none";
    document.getElementById("yape_checkbox").checked = false;
    document.getElementById("plin_checkbox").checked = false;

    empezarML();
}

// 该函数，在点击确认支付时执行
function pagar() {

    // 打开数据库，用来收藏收钱记录
    let historialDB = indexedDB.open("Bossdatos");
    let historial_obj;

    // 打开用来显示数据而储存的数据库
    let listaOBJ = indexedDB.open("lista_mesas");
    let listaDB;

    // 获取日期
    let year = new Date().getFullYear();
    let mes = new Date().getMonth() + 1;
    let dia = new Date().getDate();
    let fecha_constructor = year + "-" + mes + "-" + dia;

    // 获取时间
    let hora = new Date().getHours();
    let minuto = new Date().getMinutes() + 1;
    let hora_constructor = hora + ":" + minuto;

    // 创建单号
    let historal_num = localStorage.getItem("historialNum");
    let new_historialNum = parseInt(historal_num) + 1;
    localStorage.setItem("historialNum", new_historialNum);

    // 如果支付方式是otro选项中的纤细输写，那么获取该内容代替支付方式存到indexedb
    if (medio_pago_elejido == "descripcion") {
        medio_pago_elejido = document.getElementById("espc_pago").value;
    }

    // 该变量用来接收0 的数量
    let numCero = "0";
    let ML = cobrar_M_or_L[1];

    if (ML == "m") {
        ML = "M";
    }

    let xx = new_historialNum.toString.length;
    let codigo_constructor;
    let cantCero = 9 - 2 - parseInt(xx);

    console.log("aca xx" + cantCero)

    for (i = 0; i < cantCero; i++) {

        numCero = numCero + "0";
        codigo_constructor = "#" + ML + numCero + new_historialNum;

        if (codigo_constructor.length == 10) {
            break;
        }
    }

    // 该变量用来接收对应单的详细内容
    let obj = cobrar_M_or_L.replace("x", "");
    let nombre_det = document.getElementsByClassName(obj+"nombre");
    let cant_det = document.getElementsByClassName(obj +"cantidad");
    let detalle_constructor = "";

    for(i=0 ; i<nombre_det.length ; i++){
        detalle_constructor += cant_det[i].innerHTML + " " + nombre_det[i].innerHTML + " - ";
    }

    // 该变量分别获取下面储存到不同表时所需的id
    let idDia = parseInt(localStorage.getItem("historialDiaNum")) + 1;
    console.log("xxxxx" + idDia);
    localStorage.setItem("historialDiaNum" , idDia);
    let idTotal = new_historialNum;

    // 把所有数据储存到数据库里
    historialDB.onsuccess = function (event) {

        historial_obj = event.target.result;

        // 把数据分别储存到当日记录的数据库 ， 以及所有记录的数据库
        historial_obj.transaction(["Historial_dia"], "readwrite").objectStore("Historial_dia")
            .add({
                id: idDia,
                codigo: codigo_constructor,
                fecha: fecha_constructor,
                hora: hora_constructor,
                metodo_de_pago: medio_pago_elejido,
                monto: monto_total,
                detalle : detalle_constructor
            });

        historial_obj.transaction(["historial_total"], "readwrite").objectStore("historial_total")
            .add({
                id: idTotal,
                codigo: codigo_constructor,
                fecha: fecha_constructor,
                hora: hora_constructor,
                metodo_de_pago: medio_pago_elejido,
                monto: monto_total,
                detalle: detalle_constructor
            });

        // 隐藏支付弹窗
        ventana_pago.style.display = "none";

        //调用函数让所有的支付按钮选项，恢复到初始状态
        borrarOption();
    }

    // 该变量接收要删除的数据表内容的长度
    let table_lenght = localStorage.getItem(obj);

    // 该变量接收外卖单长度的对象
    let llev_long_obj;

    // 该数组接收要在localstore 删除的键
    let varinfor = ["cantidad", "nombre", "precio", "detalle", "entrada", "envase"];

    // 判断要删除的是外卖还是堂吃，从而赋值让下面进行删除
    let eliminar_obj;

    if (obj[0] == "m") {

        if (obj.length == 2) {
            eliminar_obj = "mesa" + "0" + obj[1];
        } else {
            eliminar_obj = "mesa" + obj[1] + obj[2];
        }

    } else {

        // 获取外卖单的长度 NL1
        llev_long_obj = "N" + obj;
        let llev_long = localStorage.getItem(llev_long_obj);
        table_lenght = llev_long;

        if (obj.length == 2) {
            eliminar_obj = "llev" + "0" + obj[1];
        } else {
            eliminar_obj = "llev" + obj[1] + obj[2];
        }

    }

    // 删除为了显示而储存的数据库中的数据
    listaOBJ.onsuccess = function (event) {

        listaDB = event.target.result;

        // 循环把该单对应的数据表的内容都删除
        for (i = 0; i <= table_lenght; i++) {

            listaDB.transaction([obj], "readwrite").objectStore(obj).delete(i);
        }

        // 通过循环删除掉localstorange里的信息
        for (i = 0; i <= table_lenght; i++) {
            for (j = 0; j < varinfor.length; j++) {

                if (obj[0] == "m" && varinfor[j] == "envase") {
                    continue;
                }

                let eliminar_key = eliminar_obj + "-" + "p" + i + "-" + varinfor[j];
                localStorage.removeItem(eliminar_key);
            }
        }

        // 把localsotrange中，对应的单的长度恢复默认状态
        localStorage.setItem(obj, "null");
        localStorage.setItem(obj[0] + obj, "false");
        localStorage.removeItem(llev_long_obj);
        document.getElementById("espc_pago").value = "";
        location.reload();
    }

}
