// /js/firebase.js

// Import the Firebase scripts (you can also include them via script tags in HTML if not using modules)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI9naB1e-YhSykK8hEeX2k0MO7lZwJ7sE",
  authDomain: "scwweb-cb579.firebaseapp.com",
  projectId: "scwweb-cb579",
  storageBucket: "scwweb-cb579.appspot.com", // Corrected from .app to .com
  messagingSenderId: "75456145215",
  appId: "1:75456145215:web:a9945dc6852546909f558a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export to use in other scripts
export { auth, db };
