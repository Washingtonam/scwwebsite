import { db } from "../js/firebase.js";
import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

async function approveProduct(productId) {
  try {
    const productRef = doc(db, "products", productId);
    await updateDoc(productRef, { approved: true });
    alert("Product approved successfully.");
    loadProducts(); // Reload the list
  } catch (err) {
    console.error("Error approving product:", err);
    alert("Approval failed.");
  }
}

window.approveProduct = approveProduct;
