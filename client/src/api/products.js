import http from "services/httpService";
import client from "./client";

const getProduct = async (productId, baseUrl = client.baseUrl) => {
  return http.get(`${baseUrl}/products/${productId}`);
}

const getProducts = async (baseUrl = client.baseUrl) => {
  return http.get(`${baseUrl}/products`);
}

const setProduct = async (product, baseUrl = client.baseUrl) => {
  return http.post(`${baseUrl}/products`, product);
}

const productsApi = {
  getProduct,
  getProducts,
  setProduct,
};

export default productsApi;
