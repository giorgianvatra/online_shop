import "./style.css";
import { getProducts } from "../../api/getProducts";
import { createAdminProductSection } from "../../components/createAdminProductSection";
import { removeProductByID } from "../../api/removeProductByID";
import { getProductByID } from "../../api/getProductByID";
import { URL } from "../../constants";
import { getProductsDescending } from "../../api/getProductsInDescendingOrder";


window.addEventListener("DOMContentLoaded", async () => {
  // const products = await getProducts();
  const products = await getProductsDescending(); 
  console.log( await getProductsDescending())
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
          document.getElementById("edit-product").style.display = "flex";
          document.querySelector(".container").style.display = "none";
          //edit btn
          document
            .getElementById("edit-product")
            .addEventListener("click", async (e) => {
              e.preventDefault();
              if (e.target.classList.contains("edit-btn")) {
                await editProduct(product.id);
                location.reload();
              }
            });
        }
      });
    }
  });

async function editProduct(id) {
  const imageValue = document.getElementById("edit-image").value;
  const nameValue = document.getElementById("edit-name").value;
  const priceValue = document.getElementById("edit-price").value;
  const descriptionValue = document.getElementById("edit-decription").value;
  const stokValue = document.getElementById("edit-stock").value;

  // update name
  if (nameValue.trim() !== "") {
    await fetch(URL + `/${id}`, {
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
    console.log(imageValue);
    await fetch(URL + `/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: imageValue,
      }),
    });
  }
  // update description
  if (descriptionValue.trim() !== "") {
    console.log(descriptionValue);
    await fetch(URL + `/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: descriptionValue,
      }),
    });
  }

  // update price
  if (priceValue.trim() !== "") {
    console.log(priceValue);
    await fetch(URL + `/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productPrice: priceValue,
      }),
    });
  }

  // update stock
  if (stokValue.trim() !== "") {
    console.log(stokValue);
    await fetch(URL + `/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stock: Number(stokValue),
      }),
    });
  }
}

document
  .querySelector(".add-product-btn")
  .addEventListener("click", async (e) => {
    if(e.target.classList.contains("add-new-product-btn")){
      document.getElementById("add-product").style.display = "flex";
      document.querySelector(".container").style.display = "none";
    
    }
  })

  document.getElementById("add-product").addEventListener("click", updateImput);
async function updateImput(e) {
  const target = e.target;
  let imageValue = document.getElementById("add-image").value.trim();
  let nameValue = document.getElementById("add-name").value.trim();
  let priceValue = document.getElementById("add-price").value.trim();
  let descriptionValue = document
    .getElementById("add-decription")
    .value.trim();
  let stokValue = document.getElementById("add-stock").value;

  if (target.classList.contains("add-product-btn-imput")) {
    if (
      imageValue === "" ||
      stokValue === "" ||
      descriptionValue === "" ||
      nameValue === "" ||
      priceValue == ""
    ) {
      document.getElementById("add").disabled = true;
      setTimeout(() => {
        document.getElementById("add").disabled = false;
      }, 2000);
    } else {
      await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productName: nameValue,
          image: imageValue,
          description: descriptionValue,
          productPrice: priceValue,
          stock: stokValue,
        }),
      });
      location.reload();
    }
  }
  if(target.classList.contains("cancel-adding")){ 
    document.getElementById("add-product").style.display = "none";
    document.querySelector(".container").style.display = "block";
    document.getElementById("add-image").value = "";  
    document.getElementById("add-name").value = "";
    document.getElementById("add-price").value = "";
    document.getElementById("add-decription") = "";
    document.getElementById("add-stock").value = "";
  }
}

