import "./style.css";

export const createDetailCart = (product) => {
  return ` 
  
        <img src=${product.image}/>
        <div class="cart-shopping-detail">
            <p class="product-name">${product.productName}</p>
            <p>${product.description}</p>
            <p class="product-price">${product.productPrice}</p>
            <p class="product-disponibility">In Stock: <span id="inStock">${product.stock}</span> buc.</p>
            <div class="quantity">
                <p>Quantity</p>
                <input  type="number" placeholder="Quantity" class="quantity-input"> 
            </div>
            <button class="add-to-cart">Add to cart</button>
   
        `;
};
