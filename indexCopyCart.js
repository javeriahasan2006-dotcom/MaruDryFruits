
  // -------- CART SYSTEM --------
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Update cart count on page load
  updateCartCount();

 function addToCart(productName, price, image) {
  const existingItem = cart.find(item => item.productName === productName);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      productName,
      price,
      image,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showToast(`${productName} added to cart`);
}

  function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById("cartCount").textContent = count;
  }

function showToast(message) {
  const toastBox = document.getElementById("toastBox");

  let toast = document.createElement("div");
  toast.classList.add("toast-message");
  toast.innerText = message;

  toastBox.appendChild(toast);

  // Remove toast after animation
  setTimeout(() => {
    toast.remove();
  }, 2500);
}
