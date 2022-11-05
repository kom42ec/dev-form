const overlayEl = document.querySelector(".overlay");
const logIn = document.getElementById("login");
const modalEl = document.getElementById("login-box");

logIn.onclick = function () {
  overlayEl.style.display = "block";
  modalEl.style.display = "block";
};

overlayEl.onclick = function () {
  overlayEl.style.display = "none";
  modalEl.style.display = "none";
};
