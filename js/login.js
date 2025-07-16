// /js/login.js
import { auth, db } from './firebase.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("loginMsg");

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Get user data from Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (!userDoc.exists()) throw new Error("User profile not found in database.");

    const userData = userDoc.data();
    localStorage.setItem("currentUser", JSON.stringify(userData));

    // Redirect based on role
    if (userData.role === "admin") {
      location.href = "../admin/dashboard.html";
    } else {
      location.href = "shop.html";
    }

  } catch (error) {
    msg.innerText = "Login failed: " + error.message;
  }
});
