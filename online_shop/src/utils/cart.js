export const addToCart = (id) => {};

export const addProductToCart = (id) => {
  const cart = localStorage.getItem("cart");
  let cartArray = [];
  if (cart == null) {
    cartArray.push({ id: id, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cartArray));
  } else {
    cartArray = JSON.parse(cart);

    if (isProductAlreadyInCart(id, cartArray)) {
      console.log("done");
      updateProductQuantity(id, cartArray);
    } else {
      cartArray.push({ id: id, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cartArray));
  }
};

function isProductAlreadyInCart(id, cartArray) {
  const product = cartArray.find((product) => product.id === id);

  if (product !== undefined) {
    return true;
  } else {
    return false;
  }
}

function updateProductQuantity(id, cartArray) {
  const product = cartArray.find((product) => product.id === id);
  if (product !== undefined) {
    product.quantity++;
  }
}
