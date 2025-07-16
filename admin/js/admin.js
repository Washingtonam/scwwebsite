import { auth, db } from './firebase.js';


function adminLogin(e) {
  e.preventDefault();

  const user = document.getElementById("adminUser").value.trim();
  const pass = document.getElementById("adminPass").value.trim();

  if (user === "admin" && pass === "admin123") {
    localStorage.setItem("adminLoggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("errorMsg").textContent = "Invalid admin credentials.";
  }
}

function checkAdminAuth() {
  if (localStorage.getItem("adminLoggedIn") !== "true") {
    alert("Access denied. Admins only.");
    window.location.href = "login.html";
  }
}

function logoutAdmin() {
  localStorage.removeItem("adminLoggedIn");
  window.location.href = "login.html";
}
