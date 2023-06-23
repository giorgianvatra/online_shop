

export const createDetailCart = (product) => {
  return ` 
      
        <img src=${product.image}>
        <div class="cart-shopping-detail">
            <p class="product-name">${product.productName}</p>
            <p class="product-desctiption">${product.description}</p>
            <div class="price-stock">
            <p class="product-price">$${product.productPrice}.00</p>
            <p class="product-disponibility">In Stock: <span id="inStock">${product.stock}</span> buc.</p>
        
            <button class="add-to-cart"><i class="fa-solid fa-cart-shopping"></i> Add to cart </button>
          </div>
          </div>
        `;
};
