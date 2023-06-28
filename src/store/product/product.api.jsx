import axios from "../configApi";

const KEY = `/product`;

export async function getAllCategory() {
  return await axios.get(`${KEY}/category`);
}

export async function getAllProduct() {
  return await axios.get(`${KEY}/`);
}

export async function getProductByCategory(id) {
  return await axios.get(`${KEY}/category/${id}`);
}

export async function getProduct(id) {
  return await axios.get(`${KEY}/${id}`);
}
