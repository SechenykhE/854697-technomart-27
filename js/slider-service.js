var slideIndexService = 1;
showSlidesService(slideIndexService);

function currentSlideService(n) {
  showSlidesService(slideIndexService = n);
}

function showSlidesService(n) {
  var i;
  var slidesService = document.getElementsByClassName("slider-service");
  var dotsService = document.getElementsByClassName("service-button");

  for (i = 0; i < slidesService.length; i++) {
    slidesService[i].style.display = "none";
  }
  for (i = 0; i < dotsService.length; i++) {
    dotsService[i].className = dotsService[i].className.replace(" service-button-active", "");
  }
  slidesService[slideIndexService - 1].style.display = "block";
  dotsService[slideIndexService - 1].className += " service-button-active";
}
