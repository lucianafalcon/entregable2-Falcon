let cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cartProducts);

let container = document.querySelector(".cart-products");
console.log(container);

const renderCartProducts = () => {
  let container = document.querySelector(".cart-products");
  let productsHTML = "";

  cartProducts.forEach((product) => {
    productsHTML += `
    <div class="product">
        <h3>${product.name}</h3>
        <h5>$${product.price}</h5>
        <button onclick="removeById(${product.id})">Remove from cart</button>
    </div>
    `;
  });

  container.innerHTML = productsHTML;
};

renderCartProducts();

// -------------------
// Clear the entire cart with the "Clear cart" button
let clearButton = document.getElementById("clear");

clearButton.addEventListener("click", () => {
  // Clear storage
  localStorage.removeItem("cart");
  // Clear the DOM
  cartProducts = [];
  renderCartProducts();
});

// -------------------
// Remove a single product from the cart
const removeById = (id) => {
  console.log(id);
  let filteredArray = cartProducts.filter((product) => product.id !== id);
  cartProducts = filteredArray;

  // Update localStorage with the remaining products
  localStorage.setItem("cart", JSON.stringify(cartProducts));

  // Refresh DOM
  renderCartProducts();
};
