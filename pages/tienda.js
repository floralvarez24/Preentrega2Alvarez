const productos = [
    { nombre: "cd Mientras Llueve", precio: 250 },
    { nombre: "cd Como Siempre", precio: 300 },
    { nombre: "remera logo", precio: 550 },
    { nombre: "remera Mientras Llueve", precio: 600 },
    { nombre: "remera Como Siempre", precio: 600 },
    { nombre: "llavero logo", precio: 150 }
];

// creo un array con el nombre y precio de los productos
let carrito = []
let seleccion = prompt("¿Desea comprar algún producto? Si o No")

// valido la respuesta del usuario, si es "si" le muestro la lista de productos, si es "no" se despide. Si es distinto que "no" pide agregar productos y cantidad de los mismos.
while (seleccion != "si" && seleccion != "no"){
  alert ("Por favor ingrese si o no")
    seleccion = prompt("¿Desea comprar algún producto? Si o No")}

if (seleccion == "si") {
     alert("A continuación nuestra lista de productos")
    let todosLosProductos = productos.map ((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todosLosProductos.join (" - "))
} else if (seleccion == "no"){
alert("Gracias por visitarme, hasta pronto")
}

while (seleccion != "no") {
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0
    if (producto == "cd Mientras Llueve" || producto == "cd Como Siempre" || producto == "remera logo" || producto == "remera Mientras LLueve"|| producto == "remera Como Siempre" || producto == "llavero logo"){
        switch (producto) {
            case "cd Mientras Llueve":
                precio = 250;
                break;
            case "cd Como Siempre":
                precio = 300;
                break;
            case "remera logo":
                precio = 550;
                break;
            case "remera Mientras Llueve":
                precio = 600;
                break;
            case "remera Como Siempre":
                precio = 600;
                break;
            case "llavero logo":
                precio = 150;
                break;
            default:
                break;

        }
        let unidades = parseInt (prompt ("Cuantas unidades quiere llevar?"))
        carrito.push({producto, unidades, precio})
        console.log (carrito)
    } else {
        alert("No tenemos ese producto")
    }
    seleccion = prompt("Desea seguir comprando?")
    while (seleccion == "no") {
        alert ("gracias por la compra! Hasta pronto")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}
//calculo el total del carrito y utilizo una función para mostrarlo
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
muestraTotal(total);

function muestraTotal(total){
    alert("El total a pagar por su compra es:"+ "$" + total)
}
 