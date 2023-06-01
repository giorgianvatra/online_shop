import "./style.css";
import { getProducts } from "./src/api/getProducts";
import { createCarts } from "./src/components/createCart";

console.log(getProducts());

window.addEventListener("DOMContentLoaded", async () => {
  const products = await getProducts();
  document.querySelector(".carts-container").innerHTML = await products
     .map((product) =>  createCarts(product))
     .join("");
});
