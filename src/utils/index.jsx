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

export function formatDate(inputDate) {
  function padZero(number) {
    return number.toString().padStart(2, "0");
  }
  const date = new Date(inputDate);
  const formattedDate = `${padZero(date.getDate())}/${padZero(
    date.getMonth() + 1
  )}/${date.getFullYear()} ${padZero(date.getHours())}:${padZero(
    date.getMinutes()
  )}:${padZero(date.getSeconds())}`;

  return formattedDate;
}
