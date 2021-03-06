var button = document.querySelector(".write-us");
var popup = document.querySelector(".modal-email");
var close = document.querySelector(".modal-close");

if(popup) {
  var userName = popup.querySelector("[name=user-name]");
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
    popup.classList.remove("form-error");
  });

  form.addEventListener("submit", function(evt) {
    if (!userName.value || !email.value) {
      evt.preventDefault();
      popup.classList.remove("form-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("form-error");
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
        popup.classList.remove("form-error");
        popup.classList.add("modal-show-close");
      }
    }
  });
}

var mapLink = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".modal-map");

if(mapPopup) {
  var mapClose = mapPopup.querySelector(".modal-close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
    mapPopup.classList.remove("modal-show-close");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
    mapPopup.classList.add("modal-show-close");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
        mapPopup.classList.add("modal-show-close");
      }
    }
  });
}

var addButton = document.querySelectorAll(".add-basket-button");
var addPopup = document.querySelector(".add-basket");

if(addPopup) {
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
}

if(document.querySelector(".slider")) {

  var slideIndex = 1;
  showSlides(slideIndex);



  function plusSlide() {
    showSlides(slideIndex += 1);
  }

  function minusSlide() {
    showSlides(slideIndex -= 1);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var j;
    var slides = document.getElementsByClassName("slider-item");
    var dots = document.getElementsByClassName("button-dot");

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (j = 0; j < slides.length; j++) {
      slides[j].style.display = "none";
    }
    for (j = 0; j < dots.length; j++) {
      dots[j].className = dots[j].className.replace(" button-dot-checked", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " button-dot-checked";
  }
}

if(document.querySelector(".service")) {
  var slideIndexService = 1;
  showSlidesService(slideIndexService);

  function currentSlideService(n) {
    showSlidesService(slideIndexService = n);
  }

  function showSlidesService(n) {
    var k;
    var slidesService = document.getElementsByClassName("slider-service");
    var dotsService = document.getElementsByClassName("service-button");

    for (k = 0; k < slidesService.length; k++) {
      slidesService[k].style.display = "none";
    }
    for (k = 0; k < dotsService.length; k++) {
      dotsService[k].className = dotsService[k].className.replace(" service-button-active", "");
    }
    slidesService[slideIndexService - 1].style.display = "block";
    dotsService[slideIndexService - 1].className += " service-button-active";
  }
}
