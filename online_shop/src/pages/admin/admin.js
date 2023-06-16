import "./style.css";
import { getProducts } from "../../api/getProducts";
import { createAdminProductSection } from "../../components/createAdminProductSection";
import { removeProductByID } from "../../api/removeProductByID";
import { getProductByID } from "../../api/getProductByID";

window.addEventListener("DOMContentLoaded", async () => {
  const products = await getProducts();
  document.querySelector(".products-list").innerHTML += await products
    .map((product) => createAdminProductSection(product))
    .join("");
});

document
  .querySelector(".products-list")
  .addEventListener("click", async (e) => {
    //removing product

    if (e.target.classList.contains("remove-btn")) {
      e.target.parentNode.parentNode.remove();
      const products = await getProducts();
      let remove = products.map((product) => {
        if ("pr" + product.id === e.target.id) {
          return removeProductByID(product.id);
        }
      });
    }

    // editing product
    if (e.target.classList.contains("update-product")) {
      const products = await getProducts();
      let update = products.map((product) => {
        if ("p" + product.id === e.target.id) {
          document.getElementById("add-product").style.display = "block";
          document.querySelector(".container").style.display = "none";
          const addBtn = document.getElementById("add");
          addBtn.addEventListener("click", () => {
            addProduct(product.id);
          });
        }
      });
    }
  });

function addProduct(id) {
  const imageValue = document.getElementById("edit-image").value;
  const nameValue = document.getElementById("edit-name").value;
  const priceValue = document.getElementById("edit-price").value;
  const descriptionValue = document.getElementById("edit-decription").value;
  const stokValue = document.getElementById("edit-stock").value;

  if (nameValue.trim !== "") {
    console.log(id, nameValue);
  }
}

// Update product functions
function updateImage(id, body) {
  fetch(URL + `/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image: body,
    }),
  });
}

function updateName(id, body) {
  fetch(URL + `/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productName: body,
    }),
  });
}

function updateDescription(id, body) {
  fetch(URL + `/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: body,
    }),
  });
}

function updatePrice(id, body) {
  fetch(URL + `/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productPrice: body,
    }),
  });
}

function updateStock(id, body) {
  fetch(URL + `/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      stock: body,
    }),
  });
}
