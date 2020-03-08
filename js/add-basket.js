var addButton = document.querySelectorAll(".add-basket-button");
var addPopup = document.querySelector(".add-basket");
var addClose = addPopup.querySelector(".modal-close");
var resumeClose = addPopup.querySelector(".button-next");

for (var i = 0; i < addButton.length; i ++) {
  addButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    addPopup.classList.remove("modal-show-close");
    if (addPopup.classList.contains("modal-show")) {
      addPopup.classList.remove("modal-show");
    } else {
      addPopup.classList.add("modal-show");
    }
  }, false);
}

addClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  addPopup.classList.remove("modal-show");
  addPopup.classList.add("modal-show-close");
});

resumeClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  addPopup.classList.remove("modal-show");
  addPopup.classList.add("modal-show-close");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (addPopup.classList.contains("modal-show")) {
      addPopup.classList.remove("modal-show");
      addPopup.classList.add("modal-show-close");
    }
  }
});
