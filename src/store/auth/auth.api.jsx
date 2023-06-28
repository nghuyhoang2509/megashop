import axios from "../configApi";

const KEY = `/auth`;

export async function register(data) {
  return await axios.post(`${KEY}/register`, data);
}

export async function login(data) {
  return await axios.post(`${KEY}/login`, data);
}

export async function logout() {
  return await axios.get(`${KEY}/logout`);
}

export async function getUser() {
  return await axios.get(`${KEY}/user`);
}
