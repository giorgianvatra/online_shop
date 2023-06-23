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
    addTocartMessage();
  }
});

async function addTocartMessage() {
  const productName = document.querySelector(".name");
  const product = await getProductByID(productId);

  productName.innerHTML = product.productName;

  let message = document.querySelector(".message");
  message.style.display = "block";
  productName.style.fontWeight = "bold";

  setTimeout(function () {
    message.style.display = "none";
  }, 2000);
}
