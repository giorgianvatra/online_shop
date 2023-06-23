import { URL } from "../constants";
import { createAdminProductSection } from "../components/createAdminProductSection";

export const getProductsDescending = async () =>
  await fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const sortedDescendently = data.sort((a, b) => b.id - a.id);
      
    return sortedDescendently;
    });
