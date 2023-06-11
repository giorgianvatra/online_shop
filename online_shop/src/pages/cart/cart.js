import { getProductByID } from "../../api/getProductByID";
import { createProductInCart } from "../../components/createProductInCart";

window.addEventListener("load", async () => {
  const cart = localStorage.getItem("cart");

  JSON.parse(cart).forEach((product) => {
    getProductByID(product.id).then(
      (productInfo) =>
        (document.getElementById(
          "cart"
        ).innerHTML += `<div class="product-in-cart" >
    <img src=${productInfo.image}>
    <div class="quantity ${product.id}">
        <p>${productInfo.productName}</p>
        <p>${productInfo.productPrice} RON</p>
    
        <p >Quantity</p>
        <button class="decrement-button">-</button>
        <span class="amount">${product.quantity}</span>
        <button class="increment-button ">+</button>
    </div>;
    </div>`)
    );
  });
});

document.querySelector("#cart").addEventListener("click", (e) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const button = e.target;
  const parent = button.closest(".quantity");

  if (button.classList.contains("increment-button")) {
    cart.forEach((item) => {
      if (parent && parent.classList.contains(item.id)) {
        item.quantity++;
        localStorage.setItem("cart", JSON.stringify(cart));
        parent.querySelector(".amount").innerHTML = item.quantity;
      }
    });
  } else if (button.classList.contains("decrement-button")) {
    cart.forEach((item) => {
      if (parent && parent.classList.contains(item.id)) {
        item.quantity--;
        if ((item.quantity <= 0)) {
          const remover = 0; 
          cart.filetr((itemToRemove))
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        parent.querySelector(".amount").innerHTML = item.quantity;
      }
    });
  }
});
