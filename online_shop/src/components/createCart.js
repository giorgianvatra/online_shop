export const createCarts = async (product) => {
   
       `
    <div class="cart">
        <img src="${product.image}"/>
        <p class="product-name">${product.productName}</p>
        <p class="product-price">${product.productPrice}</p>
        <a href="/src/pages/details/details.html?id=${product.description}">Details</a>
        <p>${product.productDetail}</p>
    </div>
    
        `;
}