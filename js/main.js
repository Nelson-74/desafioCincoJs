/*let nombre;
let color;
let cantidad;
const compra = { nombre:"Manzana", color:"Roja",cantidad: 1};*/
// console.log(compra);
// console.log('Nombre: ' + compra.nombre);
// console.log('Color: ' + compra.color);
// console.log('Cantidad : ' + compra.cantidad);

/*Otra forma de acceder a las propiedades
 console.log('Nombre: ' + compra['nombre']);
 console.log('Color: ' + compra['color']);
 console.log('Cantidad : ' + compra['cantidad']);*/

//Asignar otras propiedades a mis objetos
/*compra.nombre = "Pera";
compra['color'] = 'Amarilla';
console.log(compra);*/

/* const compra1 = { nombre:prompt('Ingrese producto a comprar : '), color:prompt('Ingrese color de producto :')};
 console.log ('Tu producto es :  ' + compra1.nombre);
 console.log ('El color del producto es :  ' + compra1.color);*/

/*function compras (nombre,color,cantidad){
     this.nombre = nombre;
     this.color = color;
     this.cantidad = cantidad;
}

function compras3(){
    this.nombre = prompt("Ingrese  el nombre del producto:" ) ;
    this.color = prompt ("Ingrese  el color del producto:" ) ;
    this.cantidad = prompt ("Ingrese  la cantidad de/los productos:" ) ;
}
 const compras1 = new compras (prompt ("Ingrese  el nombre del produto:"),"rojas","1");
 const compras2 = new compras3 ();

console.log (compras1);
console.log (compras2);
// console.log ("Nombre" + compras2.nombre);
// console.log ("Color" + compras2.color);
// console.log ("Nombre" + compras2.cantidad);*/

/*function compras( producto){
    this.nombre = producto.nombre,
    this.color = producto.color;
    this.cantidad = producto.cantidad;
    this.darnombre = function() {console.log("El nombre del producto es: " + this.nombre)};
}*/
/*const datos = {nombre: "Manzana",color: "Roja",cantidad: 2};
const compras1 = new compras(datos);
compras1.darnombre ();
console.log(compras1);*/

/*let verdura = { nombre: "Manzana",color: "Verde", cantidad: 5 };
let verdura2 ={nombre: "Pera", color: "Amarilla", cantidad: 9};
const compras1 = new compras (verdura);
const compras2 = new compras (verdura2);
console.log(compras1);
console.log(compras2);*/

// Métodos en objetos
/*let cadena = "Hola Todo Natural";
console.log("Cadena Original: " + cadena )
console.log( "Longitud :" + cadena.length); //Propiedad
console.log(" Todo mayúscula : "+ cadena.toUpperCase());
console.log("Todo en minúscula " + cadena.toLocaleLowerCase());*/

/*function producto (nombre,precio){
     this.nombre = nombre;
     this.precio = precio;
     this.descuento = 10;
     this.precioDescuento = function(){ return this.precio - ((this.precio * this.descuento)/ 100)}
};
const fruta = new producto ( "Naranjas", 120 );
console.log( "Su articulo es: " + fruta.nombre);
console.log("Su precio es: " + fruta.precio);
console.log("El precio con descuento es: " + fruta.precioDescuento());*/

/*const fruta = { nombre: "Tomate", color: "Rojo", especie: "Fruta"};
console.log( "nombre " in fruta);
console.log( "color " in fruta);
console.log( "especie " in fruta);
for (let valor in fruta){
    console.log( "Propiedad " + valor);
    console.log( "Valor: " + fruta[valor]);
}*/

//CLASES

class verdura {
    constructor (nombre,color,cantidad,precio,stock){
        this.nombre = nombre;
        this.color = color;
        this.cantidad = cantidad;
        this.precio = precio;
        this.stock = stock;
        this.vendido = true;
        
    }
    iva(){
        this.precio = this.precio * 1.21;
    }
    vender(){
        if (this.stock > 0 ){
        this.vendido = false;
        this.vendido = this.stock = - 1;
        }else {
         console.log( "No hay para vender :" + this.nombre);
        }
        }
    
}
const verdura1 = new verdura ("Manzana", "Verde", 5, 10, 120);
const verdura2 = new verdura ("Kiwi", "Verde", 2, 3, 300);
console.log(verdura1);
console.log(verdura2);
verdura1.vender();
verdura2.vender();
verdura1.iva();
verdura2.iva();
console.log(verdura1);
console.log(verdura2);
verdura1.vender();
verdura2.vender();


