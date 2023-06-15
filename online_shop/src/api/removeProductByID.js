import { URL } from "../constants";

export const removeProductByID = async (id) => {
  const response = await fetch(`${URL}/${id}`);
  const products = response.json();
  return products, { 
    mrthod: 'DELETE',
  }
};
