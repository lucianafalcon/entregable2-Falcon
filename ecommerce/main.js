/********************************************************************************* 
Ejemplo:
Renderizado dinámico de productos en el carrito
*********************************************************************************/

// simulo que esto es la base de datos
const productos = [
  { id: 1, nombre: "Notebook Lenovo", precio: 450000, stock: 12 },
  { id: 2, nombre: "Smartphone Samsung Galaxy", precio: 320000, stock: 8 },
  { id: 3, nombre: "Mouse inalámbrico Logitech", precio: 15000, stock: 25 },
  { id: 4, nombre: "Teclado mecánico Redragon", precio: 28000, stock: 10 },
  { id: 5, nombre: "Monitor 24'' LG", precio: 90000, stock: 6 },
  { id: 6, nombre: "Auriculares Bluetooth Sony", precio: 52000, stock: 15 },
  { id: 7, nombre: "Tablet Xiaomi Pad", precio: 210000, stock: 7 },
  { id: 8, nombre: "Disco externo 1TB WD", precio: 48000, stock: 14 },
  { id: 9, nombre: "Impresora HP Multifunción", precio: 87000, stock: 5 },
  { id: 10, nombre: "Webcam Full HD Logitech", precio: 32000, stock: 11 },
];
// en realidad si viene de la db lo recupero en js con fetch: const productos = fetch()
// --> ver clase db
//-----------------

// renderizar = producir una representación visual de algo (mostrar)
const renderizarProductos = () => {
  let contenedor = document.querySelector(".productos");
  let htmlCompletoDeProductos = ""; // me armo el string de los productos

  //con foreach accedo al callback --> y el callback me da acceso a cada uno de los productos
  productos.forEach((producto) => {
    htmlCompletoDeProductos += `
    <div class="producto">
        <h3>${producto.nombre}</h3>
        <h5>${producto.precio}</h5>
        <button onClick="agregarProducto(${producto.id})">Agregar al carrito</button>
    </div>
    `;
  });

  contenedor.innerHTML = htmlCompletoDeProductos; // reemplazo todo lo que estaba dentro del nodo html "contenedor" con el contenido que tenga la variable html
};

renderizarProductos();

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const agregarProducto = (id) => {
  let productoEncontrado = productos.find((producto) => producto.id === id);
  console.log(productoEncontrado);
  carrito.push(productoEncontrado);
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
