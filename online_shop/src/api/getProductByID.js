import { URL } from "../constants";

export const getProductByID = async (id) => { 
    const response = await fetch(`${URL}/${id}`);
    const products = response.json();
    return products; 
}