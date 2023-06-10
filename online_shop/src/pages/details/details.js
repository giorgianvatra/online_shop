import { createDetailCart } from "../../components/creatDetailsCart";
import { getProductByID } from "../../api/getProductByID";
import { addProductToCart } from "../../utils/cart";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("id");

window.addEventListener("load", async () => {
  const product = await getProductByID(productId);

  document.querySelector(".cart-by-id").innerHTML = createDetailCart(product);
});

// adding element in cart /  local storage / increment
document.querySelector(".cart-by-id").addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    addProductToCart(productId);
  }
});

// adding element in cart /  local storage / increment

// document.querySelector(".cart-by-id").addEventListener("click", (e) => {
//   if (e.target.classList.contains("increment-button")) {
//     let quantity = localStorage.getItem(productId);
//     if (quantity != undefined) {
//       let increment = Number(JSON.parse(quantity) + 1);
//       localStorage.setItem(productId, increment);
//     } else {
//       localStorage.setItem(productId, 1);
//     }

//   }
// });

// decrement elements / remove

// document.querySelector(".cart-by-id").addEventListener("click", (e) => {
//   if (e.target.classList.contains("decrement-button")) {
//     let quantity = localStorage.getItem(productId);

//     if (quantity < 1) {
//       localStorage.removeItem(productId);

//     } else if (quantity != undefined) {
//       let increment = Number(JSON.parse(quantity) - 1);
//       localStorage.setItem(productId, increment);
//     }

//   }

// });
