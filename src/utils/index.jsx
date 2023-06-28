export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function getCartFromLocalStorage() {
  return JSON.parse(localStorage.getItem("cart"));
}

export function setCartToLocalStorage(cart) {
  cart = JSON.stringify(cart);
  localStorage.setItem("cart", cart);
}
