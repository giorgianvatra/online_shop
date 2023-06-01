import { URL } from "../constants";

export const getProducts = async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};