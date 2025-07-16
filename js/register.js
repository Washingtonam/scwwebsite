// /js/register.js
import { auth, db } from './firebase.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const statusMsg = document.getElementById('statusMessage');

  try {
    // Create user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save extra details to Firestore
    await setDoc(doc(db, "users", user.uid), {
      fullName,
      email,
      role: "user", // Can be "admin" if needed later
      createdAt: new Date().toISOString()
    });

    statusMsg.textContent = "Registration successful! You can now log in.";
    statusMsg.style.color = "green";
    document.getElementById("registerForm").reset();
  } catch (error) {
    console.error("Registration error:", error.message);
    statusMsg.textContent = "Registration failed: " + error.message;
    statusMsg.style.color = "red";
  }
});
