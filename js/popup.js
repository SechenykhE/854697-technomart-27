var button = document.querySelector(".write-us");
var popup = document.querySelector(".modal-email");
var close = document.querySelector(".modal-close");
var userName = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=e-mail]");
var message = popup.querySelector("textarea");
var form = popup.querySelector("form");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("userName");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  popup.classList.remove("modal-show-close");

  if (storageName && storageEmail) {
    userName.value = storageName;
    email.value = storageEmail;
    message.focus();
  } else {
    userName.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show-close");
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!userName.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      popup.classList.add("modal-show-close");
    }
  }
});
