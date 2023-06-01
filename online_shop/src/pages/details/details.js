import { createDetailCart } from "../../components/creatDrtailsCart";
import { getProductByID } from "../../api/getProductByID";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("id");

window.addEventListener("load", async () => {
  const product = await getProductByID(productId);

  document.querySelector(".cart-by-id").innerHTML =
    createDetailCart(product);
});