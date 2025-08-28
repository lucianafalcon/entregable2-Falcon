let productosDelCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
console.log(productosDelCarrito);

let contenedor = document.querySelector(".productos-carrito");
console.log(contenedor);

const renderizarProductos = () => {
  let contenedor = document.querySelector(".productos-carrito");
  let htmlCompletoDeProductos = ""; // me armo el string de los productos

  //con foreach accedo al callback --> y el callback me da acceso a cada uno de los productos
  productosDelCarrito.forEach((producto) => {
    htmlCompletoDeProductos += `
    <div class="producto">
        <h3>${producto.nombre}</h3>
        <h5>${producto.precio}</h5>
        <button onclick="eliminarPorId(${producto.id})">Eliminar del carrito</button>
    </div>
    `;
  });

  //reemplazo todo lo que estaba dentro del nodo html "contenedor" con el contenido que tenga la variable html
  contenedor.innerHTML = htmlCompletoDeProductos; //reemplazo todo lo que estaba dentro del nodo html "contenedor" con el contenido que tenga la variable html
};

renderizarProductos();

//-------------------
//Limpiar el carrito completamente con el boton "limpiar carrito"

let botonLimpiar = document.getElementById("limpiar");

botonLimpiar.addEventListener("click", () => {
  //limpia solo el storage, falta refrescar el dom (en react no hace falta lo hace automáticamente)
  localStorage.removeItem("carrito");
  //limpia el dom
  productosDelCarrito = [];
  renderizarProductos();
});

//-------------------
//eliminar los productos del carrito que selecciono con el boton "eliminar del carrito"

//1. con el método filtrar --> filtro los elementos del array que quiero eliminar (osea los eliminados del carrito)
const eliminarPorId = (id) => {
  console.log(id);
  let arraySinElDelId = productosDelCarrito.filter(
    (producto) => producto.id !== id
  );
  productosDelCarrito = arraySinElDelId;
  //2. seteo en el localstorage el item carrito, para pisar lo que habia en el array  reemplazar por los nuevos productos del carrito (osea los no eliminados)
  localStorage.setItem("carrito", JSON.stringify(productosDelCarrito));
  //3. renderizo para que se refresque el dom
  renderizarProductos();
};
