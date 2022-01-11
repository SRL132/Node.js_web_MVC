import http from "services/httpService";
import client from "./client";

const getProduct = async (productId, baseUrl = client.baseUrl) => {
  return http.get(`${baseUrl}/product/${productId}`);
}

const getProducts = async (baseUrl = client.baseUrl) => {
  return http.get(`${baseUrl}/products`);
}

const postProduct = async (product, baseUrl = client.baseUrl) => {
  return http.post(`${baseUrl}/product/`, product);
}

const productsApi = {
  getProduct,
  getProducts,
  postProduct,
};

export default productsApi;
