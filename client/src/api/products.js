import http from "services/httpService";
import client from "./client";

const getProduct = async (productId, baseUrl = client.baseUrl) => {
  return http.get(`${baseUrl}/products/${productId}`);
}

const getProducts = async (baseUrl = client.baseUrl) => {
  return http.get(`${baseUrl}/products`);
}

const setProduct = async (product, baseUrl = client.baseUrl) => {
  console.log(product);
  console.log(baseUrl);
  return http.post(`${baseUrl}/products`, product);
}

const productsCheckout = async (productId, baseUrl = client.baseUrl) => {
  return http.get(`${baseUrl}/products/checkout/${productId}`);
}

const productsApi = {
  getProduct,
  getProducts,
  setProduct,
  productsCheckout
};


export default productsApi;
