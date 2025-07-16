import { auth, db } from './firebase.js';


function loadProducts() {
  const productList = document.getElementById("productList");
  const products = JSON.parse(localStorage.getItem("products")) || [];
  productList.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.style.border = "1px solid #ccc";
    div.style.padding = "10px";
    div.style.width = "200px";
    div.innerHTML = `
      <img src="${product.image}" width="100%" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p>&#8358;${product.price}</p>
    `;
    productList.appendChild(div);
  });
}
function updateNavForUser() {
  const nav = document.querySelector("nav");
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (user) {
    nav.innerHTML = `
      <a href="shop.html">Shop</a>
      <a href="cart.html">Cart</a>
      <a href="profile.html">Profile</a>
      <a href="#" onclick="logout()">Logout</a>
    `;
  } else {
    nav.innerHTML = `
      <a href="shop.html">Shop</a>
      <a href="cart.html">Cart</a>
      <a href="login.html">Login</a>
    `;
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  alert("Logged out successfully.");
  window.location.href = "login.html";
}
