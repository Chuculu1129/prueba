
// 创建餐系列数据库
let lista_plato;
let platos_datos = indexedDB.open("platos_dato" , 1);

/* 

修改回用主键的，下面这样会在每次进入网页时生成新的数据。下面只能在按钮点击生成时用
***************************************************************************
*/

platos_datos.onupgradeneeded = function(event){
    lista_plato= event.target.result;
    lista_plato.createObjectStore("arroz" , { keyPath : "number"});
    lista_plato.createObjectStore("menu" , {keyPath : "number"});
    lista_plato.createObjectStore("sopa" , {keyPath : "number"});
    lista_plato.createObjectStore("tallarin" , {keyPath : "number"});
    lista_plato.createObjectStore("plato_especial" , {keyPath : "number"});
    lista_plato.createObjectStore("pollo" , {keyPath : "number"});
    lista_plato.createObjectStore("chancho" , {keyPath : "number"});
    lista_plato.createObjectStore("langostino" , {keyPath : "number"});
    lista_plato.createObjectStore("carne" , {keyPath : "number"});
    lista_plato.createObjectStore("combinado" , {keyPath : "number"});
    lista_plato.createObjectStore("tortilla" , {keyPath : "number"});
    lista_plato.createObjectStore("combo" , {keyPath : "number"});
    lista_plato.createObjectStore("criollo" , {keyPath : "number"});
    lista_plato.createObjectStore("bebidas" , {keyPath : "number"});
}

// 给数据仓库插入菜名与价格
platos_datos.onsuccess=function(event){

    lista_plato = event.target.result;

    // 炒饭数据

    lista_plato.transaction(["arroz"],"readwrite").objectStore("arroz")
    .add({ number : 1 , plato: "arroz chaufa especial" , precio : 16});
    lista_plato.transaction(["arroz"],"readwrite").objectStore("arroz")
    .add({ number : 2 , plato: "arroz chaufa de pollo" , precio : 14});
    lista_plato.transaction(["arroz"],"readwrite").objectStore("arroz")
    .add({ number : 3 , plato: "arroz chaufa de chancho asado" , precio : 15});
    lista_plato.transaction(["arroz"],"readwrite").objectStore("arroz")
    .add({ number : 4 , plato: "arroz chaufa de langostino" , precio : 16});
    lista_plato.transaction(["arroz"],"readwrite").objectStore("arroz")
    .add({ number : 5 , plato: "arroz chaufa de carne de res" , precio : 15});
    lista_plato.transaction(["arroz"],"readwrite").objectStore("arroz")
    .add({ number : 6 , plato: "arroz chaufa con pollo en trozo" , precio : 16});
    lista_plato.transaction(["arroz"],"readwrite").objectStore("arroz")
    .add({ number : 7 , plato: "arroz chaufa con pollo ( familiar )" , precio : 40});
    lista_plato.transaction(["arroz"],"readwrite").objectStore("arroz")
    .add({ number : 8 , plato: "arroz chaufa especial ( familiar )" , precio : 43});
    lista_plato.transaction(["arroz"],"readwrite").objectStore("arroz")
    .add({ number : 9 , plato: "aeropuerto de pollo" , precio : 15});
    lista_plato.transaction(["arroz"],"readwrite").objectStore("arroz")
    .add({ number : 10 , plato: "aeropuerto especial" , precio : 16});
    lista_plato.transaction(["arroz"],"readwrite").objectStore("arroz")
    .add({ number : 11 , plato: "porcion de arroz blanco" , precio : 4});
    lista_plato.transaction(["arroz"],"readwrite").objectStore("arroz")
    .add({ number : 12 , plato: "porcion de arroz chaufa" , precio : 5});

    // 便宜餐数据

    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 1 , plato: "Maeropuerto de pollo" , precio : 12});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 2 , plato: "Mchaufa de pollo" , precio : 10});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 3 , plato: "Mtallartin de pollo" , precio : 11});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 4 , plato: "Mtallarin de chancho" , precio : 11.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 5 , plato: "Mpollo con verdura" , precio : 12.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 6 , plato: "Mchancho con verdura" , precio : 12.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 7 , plato: "Mchancho con tamarindo" , precio : 12.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 8 , plato: "Mchijaukay" , precio : 12.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 9 , plato: "Mtipakay" , precio : 12.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 10 , plato: "Mpollo enrrollado" , precio : 12.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 11 , plato: "Mpollo enrrollado con verdura" , precio : 13});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 12 , plato: "Mpollo con yuyo chino" , precio : 14.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 13 , plato: "Mcombinado de pollo" , precio : 12.00});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 14 , plato: "Mchancho al ajo" , precio : 12.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 15 , plato: "Mpollo con frejolito chino" , precio : 12.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 16 , plato: "Mkalu wantan" , precio : 13.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 17 , plato: "Mtortilla de pollo" , precio : 12.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 18 , plato: "Mlomo" , precio : 13.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 19 , plato: "Mpescado con piña" , precio : 12.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 20 , plato: "Mchancho con tamarindo y tallarin" , precio : 12.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 21 , plato: "Mpollo con piña" , precio : 12.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 22 , plato: "Mcarne de res con verdura" , precio : 13});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 23 , plato: "Mpescado con verdura" , precio : 12.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 24 , plato: "Marroz chaufa con chancho" , precio : 11.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 25 , plato: "Mcombinado de chancho" , precio : 12.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 26 , plato: "Mpollo enrrollado con tamarindo" , precio : 12.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 27 , plato: "Mpollo en trozo con champiñon" , precio : 14});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 28 , plato: "Mtallarin con pollo en trozo" , precio : 14});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 29 , plato: "Mpollo taypa con chaufa" , precio : 15.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 30 , plato: "Mallita con chaufa" , precio : 13});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 31 , plato: "Mtallarin con langostino" , precio : 14.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 32 , plato: "Mtallarin con carne" , precio : 14});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 33 , plato: "Mlangostino con verdura" , precio : 14.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 34 , plato: "Mpollo con tausi" , precio : 12.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 35 , plato: "Mlimonkay" , precio : 12.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 36 , plato: "Mtriple" , precio : 17.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 37 , plato: "Mchicharron de pollo" , precio : 15.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 38 , plato: "Mlangostino con piña" , precio : 14.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 39 , plato: "Mtallarin taypa" , precio : 16.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 40 , plato: "Maeropuerto de chancho" , precio : 13.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 41 , plato: "Mpollo enrrollado con piña" , precio : 13.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 42 , plato: "Mpollo en trozo con piña" , precio : 14});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 43 , plato: "Mchancho con frejolito" , precio : 13.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 44 , plato: "Mcarne con frejolito" , precio : 13.50});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 45 , plato: "Mpollo en trozo con frejolito" , precio : 14});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 46 , plato: "Malita con piña" , precio : 14});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 47 , plato: "Malita con verdura" , precio : 14});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 48 , plato: "Mhuevo codorniz con verduras" , precio : 14});
    lista_plato.transaction(["menu"],"readwrite").objectStore("menu")
    .add({ number : 49 , plato: "Mlangostino arrebozado" , precio : 15.50});

    //汤
    lista_plato.transaction(["sopa"],"readwrite").objectStore("sopa")
    .add({ number : 1 , plato: "sopa wantan especial" , precio : 11.50});
    lista_plato.transaction(["sopa"],"readwrite").objectStore("sopa")
    .add({ number : 2 , plato: "sopa woming especial" , precio : 11.50});
    lista_plato.transaction(["sopa"],"readwrite").objectStore("sopa")
    .add({ number : 3 , plato: "sopa pac pow" , precio : 11.50});
    lista_plato.transaction(["sopa"],"readwrite").objectStore("sopa")
    .add({ number : 4 , plato: "sopa fuchifu" , precio : 9.50});
    lista_plato.transaction(["sopa"],"readwrite").objectStore("sopa")
    .add({ number : 5 , plato: "sopa de pollo con esparrago" , precio : 11.50});
    lista_plato.transaction(["sopa"],"readwrite").objectStore("sopa")
    .add({ number : 6 , plato: "sopa de pollo con fansi" , precio : 12.50});
    lista_plato.transaction(["sopa"],"readwrite").objectStore("sopa")
    .add({ number : 7 , plato: "sopa de pollo con verdura" , precio : 9.50});
    lista_plato.transaction(["sopa"],"readwrite").objectStore("sopa")
    .add({ number : 8 , plato: "sopa woming de pollo" , precio : 9.50});
    lista_plato.transaction(["sopa"],"readwrite").objectStore("sopa")
    .add({ number : 9 , plato: "sopa woming de pollo ( sopera chica )" , precio : 27});
    lista_plato.transaction(["sopa"],"readwrite").objectStore("sopa")
    .add({ number : 10 , plato: "sopa woming de pollo ( sopera grande )" , precio : 40});
    lista_plato.transaction(["sopa"],"readwrite").objectStore("sopa")
    .add({ number : 11 , plato: "sopa wantan de pollo" , precio : 9.50});
    lista_plato.transaction(["sopa"],"readwrite").objectStore("sopa")
    .add({ number : 12 , plato: "sopa wantan de pollo ( sopera chica )" , precio : 27});
    lista_plato.transaction(["sopa"],"readwrite").objectStore("sopa")
    .add({ number : 13 , plato: "sopa wantan de pollo ( sopera grande )" , precio : 40});
    lista_plato.transaction(["sopa"],"readwrite").objectStore("sopa")
    .add({ number : 14 , plato: "sopa wantan especial ( sopera chica )" , precio : 33 });
    lista_plato.transaction(["sopa"],"readwrite").objectStore("sopa")
    .add({ number : 15 , plato: "sopa wantan especial ( sopera grande )" , precio : 48});
    lista_plato.transaction(["sopa"],"readwrite").objectStore("sopa")
    .add({ number : 16 , plato: "una docena de wantan frito" , precio : 10});
    lista_plato.transaction(["sopa"],"readwrite").objectStore("sopa")
    .add({ number : 17 , plato: "1/2 docena de wantan frito" , precio : 5});

    // 面餐

    lista_plato.transaction(["tallarin"],"readwrite").objectStore("tallarin")
    .add({ number : 1 , plato: "tallarin taypa" , precio : 21});
    lista_plato.transaction(["tallarin"],"readwrite").objectStore("tallarin")
    .add({ number : 2 , plato: "tallarin con pollo en trozo" , precio : 18});
    lista_plato.transaction(["tallarin"],"readwrite").objectStore("tallarin")
    .add({ number : 3 , plato: "tallarin con pollo y verdura" , precio : 16});
    lista_plato.transaction(["tallarin"],"readwrite").objectStore("tallarin")
    .add({ number : 4 , plato: "tallarin con chancho asado" , precio : 17});
    lista_plato.transaction(["tallarin"],"readwrite").objectStore("tallarin")
    .add({ number : 5 , plato: "tallarin con langostino" , precio : 20});
    lista_plato.transaction(["tallarin"],"readwrite").objectStore("tallarin")
    .add({ number : 6 , plato: "tallarin con carne" , precio : 18});
    lista_plato.transaction(["tallarin"],"readwrite").objectStore("tallarin")
    .add({ number : 7 , plato: "tallarin con pollo y verdura ( familiar )" , precio : 46});
    lista_plato.transaction(["tallarin"],"readwrite").objectStore("tallarin")
    .add({ number : 8 , plato: "tallarin con pollo en trozo ( familiar ) " , precio : 52});
    lista_plato.transaction(["tallarin"],"readwrite").objectStore("tallarin")
    .add({ number : 9 , plato: "tallarin taypa ( familiar )" , precio : 62});
    lista_plato.transaction(["tallarin"],"readwrite").objectStore("tallarin")
    .add({ number : 10 , plato: "tallarin sam si" , precio : 19});

    // 鸡餐
    lista_plato.transaction(["pollo"],"readwrite").objectStore("pollo")
    .add({ number : 1 , plato: "pollo con yuyo" , precio : 20});
    lista_plato.transaction(["pollo"],"readwrite").objectStore("pollo")
    .add({ number : 2 , plato: "pollo con champiñon" , precio : 19});
    lista_plato.transaction(["pollo"],"readwrite").objectStore("pollo")
    .add({ number : 3 , plato: "pollo con verduras" , precio : 18});
    lista_plato.transaction(["pollo"],"readwrite").objectStore("pollo")
    .add({ number : 4 , plato: "pollo con tausi" , precio : 18});
    lista_plato.transaction(["pollo"],"readwrite").objectStore("pollo")
    .add({ number : 5 , plato: "pollo con fansi" , precio : 20});
    lista_plato.transaction(["pollo"],"readwrite").objectStore("pollo")
    .add({ number : 6 , plato: "pollo con frejlito chino" , precio : 20});
    lista_plato.transaction(["pollo"],"readwrite").objectStore("pollo")
    .add({ number : 7 , plato: "pollo con piña" , precio : 18});
    lista_plato.transaction(["pollo"],"readwrite").objectStore("pollo")
    .add({ number : 8 , plato: "chicharron de pollo" , precio : 19});
    lista_plato.transaction(["pollo"],"readwrite").objectStore("pollo")
    .add({ number : 9 , plato: "alita frita" , precio : 17});

    // chancho 
    lista_plato.transaction(["chancho"],"readwrite").objectStore("chancho")
    .add({ number : 1 , plato: "chancho con yuyo" , precio : 20});
    lista_plato.transaction(["chancho"],"readwrite").objectStore("chancho")
    .add({ number : 2 , plato: "chancho con champiñon" , precio : 19});
    lista_plato.transaction(["chancho"],"readwrite").objectStore("chancho")
    .add({ number : 3 , plato: "chancho con verdura" , precio : 18});
    lista_plato.transaction(["chancho"],"readwrite").objectStore("chancho")
    .add({ number : 4 , plato: "chancho con tamarindo" , precio : 18});
    lista_plato.transaction(["chancho"],"readwrite").objectStore("chancho")
    .add({ number : 5 , plato: "chancho con piña" , precio : 18});
    lista_plato.transaction(["chancho"],"readwrite").objectStore("chancho")
    .add({ number : 6 , plato: "chancho con fansi" , precio : 20});
    lista_plato.transaction(["chancho"],"readwrite").objectStore("chancho")
    .add({ number : 7 , plato: "chancho al ajo con verdura" , precio : 18});

    // langostino

    lista_plato.transaction(["langostino"],"readwrite").objectStore("langostino")
    .add({ number : 1 , plato: "langostino con verdura" , precio : 20});
    lista_plato.transaction(["langostino"],"readwrite").objectStore("langostino")
    .add({ number : 2 , plato: "langostino con champiñon" , precio : 21});
    lista_plato.transaction(["langostino"],"readwrite").objectStore("langostino")
    .add({ number : 3 , plato: "langostino con yuyo" , precio : 21});
    lista_plato.transaction(["langostino"],"readwrite").objectStore("langostino")
    .add({ number : 4 , plato: "langostino con tausi" , precio : 21});
    lista_plato.transaction(["langostino"],"readwrite").objectStore("langostino")
    .add({ number : 5 , plato: "langostino con fansi" , precio : 22});
    lista_plato.transaction(["langostino"],"readwrite").objectStore("langostino")
    .add({ number : 6 , plato: "langostino con piña" , precio : 20});
    lista_plato.transaction(["langostino"],"readwrite").objectStore("langostino")
    .add({ number : 7 , plato: "langostino arrebozado" , precio : 20});

    // carne res
    lista_plato.transaction(["carne"],"readwrite").objectStore("carne")
    .add({ number : 1 , plato: "carne con verdura" , precio : 18});
    lista_plato.transaction(["carne"],"readwrite").objectStore("carne")
    .add({ number : 2 , plato: "carne con frejolito chino" , precio : 18});
    lista_plato.transaction(["carne"],"readwrite").objectStore("carne")
    .add({ number : 3 , plato: "carne con tausi" , precio : 18});
    lista_plato.transaction(["carne"],"readwrite").objectStore("carne")
    .add({ number : 4 , plato: "carne con fansi" , precio : 20});
    lista_plato.transaction(["carne"],"readwrite").objectStore("carne")
    .add({ number : 5 , plato: "carne con tamarindo" , precio : 18});
    lista_plato.transaction(["carne"],"readwrite").objectStore("carne")
    .add({ number : 6 , plato: "lomo saltado" , precio : 19});

    // tortilla
    lista_plato.transaction(["tortilla"],"readwrite").objectStore("tortilla")
    .add({ number : 1 , plato: "tortilla de pollo y verdura" , precio : 13});
    lista_plato.transaction(["tortilla"],"readwrite").objectStore("tortilla")
    .add({ number : 2 , plato: "tortilla de chancho y verdura" , precio : 13});
    lista_plato.transaction(["tortilla"],"readwrite").objectStore("tortilla")
    .add({ number : 3 , plato: "tortilla de langostino y verdura" , precio : 14});
    lista_plato.transaction(["tortilla"],"readwrite").objectStore("tortilla")
    .add({ number : 4 , plato: "tortilla de  verdura" , precio : 12});

    // combinado

    lista_plato.transaction(["combinado"],"readwrite").objectStore("combinado")
    .add({ number : 1 , plato: "combinado de pollo" , precio : 17});
    lista_plato.transaction(["combinado"],"readwrite").objectStore("combinado")
    .add({ number : 2 , plato: "combinado de chancho" , precio : 18});
    lista_plato.transaction(["combinado"],"readwrite").objectStore("combinado")
    .add({ number : 3 , plato: "combinado de langostino" , precio : 20});
    lista_plato.transaction(["combinado"],"readwrite").objectStore("combinado")
    .add({ number : 4 , plato: "combinado especial" , precio : 20});
    lista_plato.transaction(["combinado"],"readwrite").objectStore("combinado")
    .add({ number : 5 , plato: "combinado taypa" , precio : 21});

    // plato especial 

    lista_plato.transaction(["plato_especial"],"readwrite").objectStore("plato_especial")
    .add({ number : 1 , plato: "kam lung wantan" , precio : 21});
    lista_plato.transaction(["plato_especial"],"readwrite").objectStore("plato_especial")
    .add({ number : 2 , plato: "pollo taypa" , precio : 21});
    lista_plato.transaction(["plato_especial"],"readwrite").objectStore("plato_especial")
    .add({ number : 3 , plato: "pollo chijaukay" , precio : 18});
    lista_plato.transaction(["plato_especial"],"readwrite").objectStore("plato_especial")
    .add({ number : 4 , plato: "pollo tipakay" , precio : 18});
    lista_plato.transaction(["plato_especial"],"readwrite").objectStore("plato_especial")
    .add({ number : 5 , plato: "pollo limonkay" , precio : 18});
    lista_plato.transaction(["plato_especial"],"readwrite").objectStore("plato_especial")
    .add({ number : 6 , plato: "pollo enrrollado" , precio : 18});
    lista_plato.transaction(["plato_especial"],"readwrite").objectStore("plato_especial")
    .add({ number : 7 , plato: "pollo cinco sabor" , precio : 18});
    lista_plato.transaction(["plato_especial"],"readwrite").objectStore("plato_especial")
    .add({ number : 8 , plato: "huevo codorniz" , precio : 18});
    lista_plato.transaction(["plato_especial"],"readwrite").objectStore("plato_especial")
    .add({ number : 9 , plato: "pescado con piña" , precio : 18});

    // bebidas

    lista_plato.transaction(["bebidas"],"readwrite").objectStore("bebidas")
    .add({ number : 1 , plato: "gaseosa mediana" , precio : 3});
    lista_plato.transaction(["bebidas"],"readwrite").objectStore("bebidas")
    .add({ number : 2 , plato: "gaseosa 600 ml" , precio : 3.50});
    lista_plato.transaction(["bebidas"],"readwrite").objectStore("bebidas")
    .add({ number : 3 , plato: "gaseosa gordita" , precio : 4.50});
    lista_plato.transaction(["bebidas"],"readwrite").objectStore("bebidas")
    .add({ number : 4 , plato: "gaseosa litro" , precio : 6.50});
    lista_plato.transaction(["bebidas"],"readwrite").objectStore("bebidas")
    .add({ number : 5 , plato: "agua san luis" , precio : 3});

    

    
    
    
    










}


// 创建储存桌号的数据库
let mesas_obj;
let mesaDB = indexedDB.open("lista_mesas" , 1);

// 创建数据仓库,每一个桌号都对应一个数据仓库
mesaDB.onupgradeneeded=function(event){

    // 数据库对象,所有操作都要点数据库对象来实现
    mesas_obj = event.target.result;
    // 开始创建堂吃仓库
    mesas_obj.createObjectStore( "m1" , {keyPath : "Num_pedido"});
    mesas_obj.createObjectStore( "m2" , {keyPath : "Num_pedido"});
    mesas_obj.createObjectStore( "m3" , {keyPath : "Num_pedido"});
    mesas_obj.createObjectStore( "m4" , {keyPath : "Num_pedido"});
    mesas_obj.createObjectStore( "m5" , {keyPath : "Num_pedido"});
    mesas_obj.createObjectStore( "m6" , {keyPath : "Num_pedido"});
    mesas_obj.createObjectStore( "m7" , {keyPath : "Num_pedido"});
    mesas_obj.createObjectStore( "m8" , {keyPath : "Num_pedido"});
    mesas_obj.createObjectStore( "m9" , {keyPath : "Num_pedido"});
    mesas_obj.createObjectStore( "m10" , {keyPath : "Num_pedido"});
    mesas_obj.createObjectStore( "m11" , {keyPath : "Num_pedido"});
    mesas_obj.createObjectStore( "m12" , {keyPath : "Num_pedido"});
    mesas_obj.createObjectStore( "m13" , {keyPath : "Num_pedido"});
    mesas_obj.createObjectStore( "m14" , {keyPath : "Num_pedido"});
    mesas_obj.createObjectStore( "m15" , {keyPath : "Num_pedido"});
    mesas_obj.createObjectStore( "m16" , {keyPath : "Num_pedido"});
    mesas_obj.createObjectStore( "m17" , {keyPath : "Num_pedido"});
    mesas_obj.createObjectStore( "m18" , {keyPath : "Num_pedido"});

    // 外卖对应的仓库
    mesas_obj.createObjectStore( "L1" , {keyPath : "Num_pedido"});
    mesas_obj.createObjectStore( "L2" , {keyPath : "Num_pedido"});
    mesas_obj.createObjectStore( "L3" , {keyPath : "Num_pedido"});
    mesas_obj.createObjectStore( "L4" , {keyPath : "Num_pedido"});
    mesas_obj.createObjectStore( "L5" , {keyPath : "Num_pedido"});
    mesas_obj.createObjectStore( "L6" , {keyPath : "Num_pedido"});
    mesas_obj.createObjectStore( "L7" , {keyPath : "Num_pedido"});
    mesas_obj.createObjectStore( "L8" , {keyPath : "Num_pedido"});
    mesas_obj.createObjectStore( "L9" , {keyPath : "Num_pedido"});
    mesas_obj.createObjectStore( "L10" , {keyPath : "Num_pedido"});

    // 待命数据仓库
    mesas_obj.createObjectStore( "en_espera" , {keyPath : "Num_pedido"});

}


// function mesa(){

//     // 表示对应的数据库里，有多长内容
// window.localStorage.setItem("m1", "null");
// window.localStorage.setItem("m2", "null");
// window.localStorage.setItem("m3", "null");
// window.localStorage.setItem("m4", "null");
// window.localStorage.setItem("m5", "null");
// window.localStorage.setItem("m7", "null");
// window.localStorage.setItem("m8", "null");
// window.localStorage.setItem("m9", "null");
// window.localStorage.setItem("m10", "null");
// window.localStorage.setItem("m11", "null");
// window.localStorage.setItem("m12", "null");
// window.localStorage.setItem("m13", "null");
// window.localStorage.setItem("m14", "null");
// window.localStorage.setItem("m15", "null");
// window.localStorage.setItem("m16", "null");
// window.localStorage.setItem("m17", "null");
// window.localStorage.setItem("m18", "null");

// window.localStorage.setItem("L1", "null");
// window.localStorage.setItem("L2", "null");
// window.localStorage.setItem("L3", "null");
// window.localStorage.setItem("L4", "null");
// window.localStorage.setItem("L5", "null");
// window.localStorage.setItem("L6", "null");
// window.localStorage.setItem("L7", "null");
// window.localStorage.setItem("L8", "null");
// window.localStorage.setItem("L9", "null");
// window.localStorage.setItem("L10", "null");

// // 代表餐桌有餐是否提醒
// window.localStorage.setItem("alerta", "false");

// }

