import axios from "axios";
export async function getAllProduct() {
  return axios.get("https://polyapi.000webhostapp.com/api/product");
}

export async function getAllCategoryProduct() {
  return axios.get("https://polyapi.000webhostapp.com/api/category-product");
}

export async function getAllBrandProduct() {
  return axios.get("https://polyapi.000webhostapp.com/api/brand-product");
}
