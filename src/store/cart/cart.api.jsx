import axios from "../configApi";

export async function createOrder(data) {
  return await axios.post("/product/order", data);
}
