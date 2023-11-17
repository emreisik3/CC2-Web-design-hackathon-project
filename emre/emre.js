//feedback section

function getValue() {
  var textValue = document.getElementById("feedback").value;
  console.log(textValue);
  alert("Thank you for your feedback.");
}

//slideshow

let slideIndex = 1;
let slides = document.getElementsByClassName("mySlides fade")
slides[1].style.display;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


// Mini quiz

function answer() {
  if (document.getElementById('11').checked || document.getElementById('12').checked) {
    alert("Correct answer is 80.");
  }
  else { alert("Correct :)") }
}


function answer2() {
  if (document.getElementById('21').checked || document.getElementById('22').checked) {
    alert("Correct answer is 14 billion+.");
  }
  else { alert("Correct :)") }
}

function answer3() {
  if (document.getElementById('31').checked || document.getElementById('32').checked) {
    alert("Correct answer is 100 million.");
  }
  else { alert("Correct :)") }
}


//optional background color

function bgcolor(bgvalue) {
  document.body.style.backgroundColor = bgvalue;
}


//Menu function

function hamburgerMenu() {
  var id = null;
  var element = document.getElementById("menu");
  const compElementStyles = window.getComputedStyle(element);
  const menuWidth = compElementStyles.getPropertyValue("width");
  console.log(menuWidth)

  if (`${menuWidth}` === "0px") {

    console.log("w 0");
    var width = 0;
    clearInterval(id);
    id = setInterval(frame, 15);
    function frame() {
      if (width == 40) {
        clearInterval(id);
      } else {
        width++;
        element.style.width = width + 'vw';
      }
    }

  } else if (`${menuWidth}` !== "0px") {

    var id = null;
    console.log("w 10");
    var width = 40;
    clearInterval(id);
    id = setInterval(frame, 15);
    function frame() {
      if (width == 0) {
        clearInterval(id);
      } else {
        width--;
        element.style.width = width + 'vw';
      }
    }
  }
}