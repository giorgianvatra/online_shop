import { getProductByID } from "../../api/getProductByID";
import { getProducts } from "../../api/getProducts";
import { createProductInCart } from "../../components/createProductInCart";

window.addEventListener("load", async () => {
  updateTotal();
  updateNoOfItemsInCart();
  const cart = localStorage.getItem("cart");

  JSON.parse(cart).forEach((product) => {
    getProductByID(product.id).then(
      (productInfo) =>
        (document.getElementById(
          "cart"
        ).innerHTML += `<div class="product-in-cart" >
    <img src=${productInfo.image}>
    <div class="quantity ${product.id}">
        <p><a href="http://localhost:5173/src/pages/details/details.html?id=${product.id}">${productInfo.productName}</a></p>
        <p>$${productInfo.productPrice}.00</p>
    
        <p >Quantity</p>
        <button class="decrement-button">-</button>
        <span class="amount">${product.quantity} items</span>
        <button class="increment-button ">+</button>
        <button class="delete-button"><i class="fa-solid fa-trash"></i> Remove </button>
    </div>
          
    </div>`)
    )
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
        parent.querySelector(".amount").innerHTML = item.quantity + " items";
      }
    });
  } else if (button.classList.contains("decrement-button")) {
    cart.forEach((item, index) => {
      if (parent && parent.classList.contains(item.id)) {
        item.quantity--;
        if (item.quantity === 0) {
          cart.splice(index, 1);
          parent.closest(".product-in-cart").style.display = "none";
          document.getElementById("total").innerHTML = 0;
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        parent.querySelector(".amount").innerHTML = item.quantity + " items";
      }
    });
  } else if (e.target.classList.contains("delete-button")) {
    cart.forEach((item, index) => {
      if (parent && parent.classList.contains(item.id)) {
        console.log(item.quantity);
        item.quantity = 0;
        if (item.quantity === 0) {
          cart.splice(index, 1);
          parent.closest(".product-in-cart").style.display = "none";
          document.getElementById("total").innerHTML = 0;
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        parent.querySelector(".amount").innerHTML = item.quantity;
      }
    });
  }
  updateNoOfItemsInCart();
  updateTotal();
});

function updateTotal() {
  let sum = 0;
  const cart = JSON.parse(localStorage.getItem("cart"));
  cart.forEach((response) => {
    const product = getProductByID(response.id).then((product) => {
      if (localStorage.getItem("cart") !== []) {
        sum += Number(product.productPrice) * response.quantity;
        document.getElementById("total").innerHTML = sum + ".00";
      } else {
        document.getElementById("total").innerHTML = 0;
      }
    });
  });
}

function updateNoOfItemsInCart() {
  let sum = 0;
  const cart = JSON.parse(localStorage.getItem("cart"));
  cart.forEach((response) => {
    sum += response.quantity;
    document.getElementById("noItems").innerHTML = sum;
  });
}


document.getElementById("finishOrder").addEventListener("click", ()=> {
    document.getElementById("cart").style.display = "none";
    document.querySelector(".total-and-buy").style.display = "none";
     document.querySelector(".thank-you-poust").style.display = "flex";
    setTimeout(function () {
     window.location.href = "/index.html"
    }, 1000);

    localStorage.removeItem("cart");

    updateNoOfItemsInCart();
})