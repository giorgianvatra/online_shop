import "./style.css"

export const createCarts =  (product) => {
  return ` <div class="cart">
        <img src=${product.image}>
        <div class="details-container">
        <p class="product-name">${product.productName}</p>
        <div class="price-and-add">
        <p class="product-price">$${product.productPrice}.00</p>
        <a href="/src/pages/details/details.html?id=${product.id}"><i class="fa-solid fa-cart-shopping lock"></i></a>
        </div>
        </div>
    </div>
        `;
};
