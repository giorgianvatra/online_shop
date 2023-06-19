import "./style.css";
import { getProducts } from "../../api/getProducts";
import { createAdminProductSection } from "../../components/createAdminProductSection";
import { removeProductByID } from "../../api/removeProductByID";
import { getProductByID } from "../../api/getProductByID";
import { URL } from "../../constants";

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
    e.preventDefault();

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
          document.getElementById("edit-product").style.display = "block";
          document.querySelector(".container").style.display = "none";
          //edit btn
          document
            .getElementById("edit-product")
            .addEventListener("click", async (e) => {
              e.preventDefault();
              if (e.target.classList.contains("edit-btn")) {
                editProduct(product.id);
              }
            });
        }
      });
    }
  });

function editProduct(id) {
  const imageValue = document.getElementById("edit-image").value;
  const nameValue = document.getElementById("edit-name").value;
  const priceValue = document.getElementById("edit-price").value;
  const descriptionValue = document.getElementById("edit-decription").value;
  const stokValue = document.getElementById("edit-stock").value;

  // update name
  if (nameValue.trim() !== "") {
    
    fetch(URL + `/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productName: nameValue,
      }),
    });
  }

  // update image
  if (imageValue.trim() !== "") {
    console.log(imageValue)
    fetch(URL + `/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: imageValue,
      }),
    });
  }
}

// Update product functions

function updateImage(id, content) {
  fetch(URL + `/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image: content,
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
