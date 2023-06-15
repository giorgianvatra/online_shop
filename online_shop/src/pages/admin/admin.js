import "./style.css";
import { getProducts } from "../../api/getProducts";
import { createAdminProductSection } from "../../components/createAdminProductSection";
import { removeProductByID } from "../../api/removeProductByID";

window.addEventListener("DOMContentLoaded", async () => {
  const products = await getProducts();
  document.querySelector(".products-list").innerHTML += await products
    .map((product) => createAdminProductSection(product))
    .join("");
});

document
  .querySelector(".products-list")
  .addEventListener("click", async (e) => {
    if (e.target.classList.contains("remove-btn")) {
      const products = await getProducts();
      let remove =  products.map((product) => {
        if ("pr" + product.id === e.target.id) {
         return removeProductByID(product.id);  
        }
      });
    }
  });
