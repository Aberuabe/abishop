let cart = [];
const cartList = document.getElementById("cart");
const cartCount = document.getElementById("cart-count");

function addToCart(item) {
  cart.push(item);
  updateCart();
  cartList.lastChild.classList.add("add-animation");
}

function updateCart() {
  cartList.innerHTML = "";
  cart.forEach(product => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = product;
    cartList.appendChild(li);
  });
  cartCount.textContent = cart.length;
}

function showCart() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
