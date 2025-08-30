/********************************************************************************* 
                  Dynamic product rendering in the cart
*********************************************************************************/

// simulate that this is the database
const products = [
  { id: 1, name: "Lenovo Notebook", price: 450000, stock: 12 },
  { id: 2, name: "Samsung Galaxy Smartphone", price: 320000, stock: 8 },
  { id: 3, name: "Logitech Wireless Mouse", price: 15000, stock: 25 },
  { id: 4, name: "Redragon Mechanical Keyboard", price: 28000, stock: 10 },
  { id: 5, name: "LG 24'' Monitor", price: 90000, stock: 6 },
  { id: 6, name: "Sony Bluetooth Headphones", price: 52000, stock: 15 },
  { id: 7, name: "Xiaomi Pad Tablet", price: 210000, stock: 7 },
  { id: 8, name: "WD 1TB External Drive", price: 48000, stock: 14 },
  { id: 9, name: "HP Multifunction Printer", price: 87000, stock: 5 },
  { id: 10, name: "Logitech Full HD Webcam", price: 32000, stock: 11 },
];

// render = produce a visual representation of something (show on screen)
const renderProducts = () => {
  let container = document.querySelector(".products");
  let productsHTML = ""; // build the string with all products

  // foreach gives me access to each product through the callback
  products.forEach((product) => {
    productsHTML += `
    <div class="product">
        <h3>${product.name}</h3>
        <h5>${product.price}</h5>
        <button onClick="addToCart(${product.id})">Add to cart</button>
    </div>
    `;
  });

  // replace all the content of the HTML node "container" with the products string
  container.innerHTML = productsHTML;
};

renderProducts();

// load cart from localStorage or start empty
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const addToCart = (id) => {
  let foundProduct = products.find((product) => product.id === id);
  console.log(foundProduct);
  cart.push(foundProduct);
  localStorage.setItem("cart", JSON.stringify(cart));
};
