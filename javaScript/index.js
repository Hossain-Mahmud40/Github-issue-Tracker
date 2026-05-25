const userInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginBtn");
const errorModal = document.getElementById("errorModal");
loginButton.addEventListener("click", function () {
  const username = userInput.value;
  const password = passwordInput.value;

  if (username === "admin" && password === "admin123") {
    window.location.href = "./dashboard.html";
  } else {
    errorModal.showModal();
  }
});
