import axios from "../configApi";
import axiosDefault from "axios";

const key = "/admin";

export async function getAllOrder() {
  return await axios.get(`${key}/order`);
}

export async function getAllUser() {
  return await axios.get(`${key}/user`);
}

export async function uploadImage(file) {
  const cloudName = "dbpvy9xt6";
  const uploadPreset = "asoohbfg";
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  formData.append("cloud_name", cloudName);
  const response = await axiosDefault.post(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    formData
  );
  const imageUrl = response.data.secure_url;
  return imageUrl;
}

export async function deleteImage(imageUrl) {
  const cloudName = "dbpvy9xt6";
  const uploadPreset = "asoohbfg";
  const ApiKey = "733613584335574";
  const signature = "CndgnNXNuxEhI8FzeMI3VRuwofs";
  const publicID = imageUrl.slice(
    imageUrl.lastIndexOf("/"),
    imageUrl.lastIndexOf(".")
  );
  const formData = new FormData();
  formData.append("upload_preset", uploadPreset);
  formData.append("cloud_name", cloudName);
  formData.append("public_id", publicID);
  formData.append("api_key", ApiKey);
  formData.append("signature", signature);
  formData.append("timestamp", Date.now());
  const response = await axiosDefault.post(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`,
    formData
  );
  return null;
}

export async function createProduct(body) {
  return await axios.post(`${key}/product`, body);
}

export async function deleteProduct(body) {
  return await axios.patch(`${key}/product`, body);
}

export async function updateProduct(body) {
  return await axios.put(`${key}/product`, body);
}

export async function changeRole(body) {
  return await axios.patch(`${key}/role`, body);
}
