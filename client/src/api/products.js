import http from "services/httpService";
import client from "./client";

const getProduct = async (productId, baseUrl = client.baseUrl) => {
  return http.get(`${baseUrl}/product/${productId}`);
}

// const getProducts = async (episode) => Promise.all(
//   episode.products.map(async characterUrl => http.get(characterUrl))
// )

const productsApi = {
  getProduct,
  // getProducts,
};

export default charactersApi;
