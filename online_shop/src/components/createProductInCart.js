import "./style.css"

export const createProductInCart = (product) => {
    return `
    <div class="product-in-cart">
    <img src=${product.image}>
    <p>${product.productName}</p>
    <p>${product.price}</p>
    <div class="quantity">
        <p>Quantity</p>
        <button class="decrement-button">-</button>
        <span class="amount">0</span>
        <button class="increment-button">+</button>
    </div>;
    </div>
    `;
}