import axios from "../configApi";

export async function getAllCategory() {
  return await axios.get(`/category`);
}

export async function getAllBrand() {
  return await axios.get(`/brand`);
}

export async function getAllProduct(query) {
  return await axios.get(`/product${query || ""}`);
}

export async function getProductByCategory(id) {
  return await axios.get(`/category/${id}`);
}

export async function getProductByBrand(id) {
  return await axios.get(`/brand/${id}`);
}

export async function getProduct(id) {
  return await axios.get(`/product/${id}`);
}
