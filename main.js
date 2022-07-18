
class Producto {
    constructor(nombre, precio, marca, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
        this.stock = stock;
    }
}

const crearProducto = () => {
    let nombreProducto = prompt("Como se llama el producto ?");
    let precioProducto = parseInt( prompt("Cual es el precio del producto sin iva ?"));
    let marcaProducto = prompt("Cual es la marca del producto ?");
    let stockProducto = parseInt( prompt("Cual es el stock del producto ?"));

    let precioTotal = precioProducto * 1.21;

    const nuevoProducto = new Producto(nombreProducto, precioTotal, marcaProducto, stockProducto);
    productos.push(nuevoProducto);
    console.log(productos);
    return nuevoProducto;
}

let productos = [];

let televisionesSamsung = new Producto("televisiones", "30000", "Samsung", "300");
let televisionesLenovo = new Producto("televisiones", "30000", "Lenovo", "300");

let tabletsSamsung = new Producto("tablets", "30000", "Samsung", "250");
let tabletsApple = new Producto("tablets", "30000", "Apple", "250");

let celularesSamsung = new Producto("celulares", "30000", "Samsung", "500");
let celularesApple = new Producto("celulares", "30000", "Apple", "500");




const busquedaProducto = () => {
    let busqueda = prompt("Que buscas, televisiones, tablets o celulares ?");
    
    switch(busqueda) {
        case "televisiones":
            let televisiones = prompt("Que marca samsung o lenovo ?");
                if (televisiones == "samsung") {
                    console.log(televisionesSamsung);
                }else if (televisiones == "lenovo") {
                    console.log(televisionesLenovo);
                } else{
                    alert(`No se que marca de television es esa`);
                }
            break;
        case "tablets":
            let tablets = prompt("Que marca samsung o apple ?");
                if (tablets == "samsung") {
                    console.log(tabletsSamsung);
                }else if (tablets == "apple") {
                    console.log(tabletsApple);
                } else{
                    alert(`No se que marca de tablet es esa`);
                }
            break;
        case "celulares":
            let celulares = prompt("Que marca samsung o apple ?");
                if (celulares == "samsung") {
                    console.log(celularesSamsung);
                }else if (celulares == "apple") {
                    console.log(celularesApple);
                } else{
                    alert(`No se que marca de celular es esa`);
                }
            break;
        default:
            alert("Solo tenemos televisiones, tablets o celulares, recarga la pagina para volver a buscar");
            break;
    }
    return busqueda;
}
