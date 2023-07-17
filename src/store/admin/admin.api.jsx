import axios from "../configApi";
import axiosDefault from "axios";

export async function getAllOrder() {
  return await axios.get(`/order`);
}

export async function getAllUser() {
  return await axios.get(`/auth/users`);
}

export async function uploadImage(file) {
  return await axios.post(`image`, file);
}

export async function deleteImage({ id }) {
  return await axios.delete(`image?id=${id}`);
}

export async function getAllImage() {
  return await axios.get(`image`);
}

export async function createProduct(body) {
  return await axios.post(`/product`, body);
}

export async function deleteProduct(body) {
  return await axios.patch(`/product`, body);
}

export async function deleteCategory(body) {
  return await axios.patch(`/category`, body);
}

export async function createCategory(body) {
  return await axios.post(`/category`, body);
}

export async function editCategory(body) {
  return await axios.put(`/category`, body);
}

export async function deleteBrand(body) {
  return await axios.patch(`/brand`, body);
}

export async function createBrand(body) {
  return await axios.post(`/brand`, body);
}

export async function editBrand(body) {
  return await axios.put(`/brand`, body);
}

export async function updateProduct(body) {
  return await axios.put(`/product`, body);
}

export async function changeRole(body) {
  return await axios.patch(`/auth/role`, body);
}
