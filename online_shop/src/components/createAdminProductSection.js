export const createAdminProductSection = (product) => {
  return ` 
  
        <tr class="product-details">
            <td><img src=${product.image}></td>
            <td><a href="#" id="p${product.id}" class="update-product">${product.productName}</a></td>        
		        <td>$${product.productPrice}.00</td>
            <td>${product.stock} items</td>
           <td><button class="remove-btn" id="pr${product.id}">Remove item</button></td>
      </tr>
   
        `;
};
