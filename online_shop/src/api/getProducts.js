import { URL } from "../constants";

export const getProducts = async () => { 
    const response = await fetch(URL); 
    const products = await response.json();
    return products; 
}