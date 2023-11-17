function hamburgerMenu() {
  var id = null;
  var element = document.getElementById("menu");
  const compElementStyles = window.getComputedStyle(element);
  const menuWidth = compElementStyles.getPropertyValue("width");
  console.log(menuWidth)
  if (`${menuWidth}` === "0px") {
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

// sample code for css attribute logic
// const para = document.querySelector("p");
// const compStyles = window.getComputedStyle(para);
// para.textContent =
//   `My computed font-size is ${compStyles.getPropertyValue("font-size")},\n` +
//   `and my computed line-height is ${compStyles.getPropertyValue(
//     "line-height",
//   )}.`;


function sleep(ms, delayedfunc) {
  return new Promise(delayedfunc => setTimeout(delayedfunc, ms));
}

async function animate(element, opacity, framesperElementAnimation) {
  id = setInterval(frame, framesperElementAnimation);
  function frame() {
    if (opacity === 100) {
      clearInterval(id);
      return 0;
    } else {
      opacity = opacity + 10;
      element.style.setProperty('opacity', `${opacity}%`);
    }
  }
}

async function beginanimation() {
  var timebetweenElementAnimationsStart = 40;
  var framesperElementAnimation = 100;
  var id = null;
  // var lastelement = document.getElementById("last");
  var lastelement = document.getElementsByClassName("last")[0];
  maxitems = lastelement.classList[lastelement.classList.length - 1]; // get the number of items to animate
  // console.log(maxitems);
  for (let i = 1; i <= maxitems; i++) {
    // console.log("i",i);
    var opacity = 0;
    var position = 0;
    var element = document.getElementsByClassName(`animate ${i}`);
    // console.log(element);
    // console.log(window.getComputedStyle(element[0]).getPropertyValue("opacity"));
    let done = await sleep(timebetweenElementAnimationsStart, animate(element[0], opacity, framesperElementAnimation));
  }
}

window.onload = function() {
  // fade in elements in order numbered by class name. label last element with highest number with "last" and also have all of them include "animate" in their classname
  beginanimation();
}

function submitForm() {
  const answers = [
    "Answer: 6, because there is at least one primary node required and then 5 core nodes per Spark executor.",
    "Answer: RDS is fully managed unlike EC2",
    "Answer: They are all managed services where user does not need to worry about managing and scaling the underlying infrastructure.",
    "Answer: Cluster, Task Definition, Service, Container Instance",
    "Answer: Single node and Multi (up to 3) High Availability (HA) ",
    "Answer: An environment that can contain one or more DBs",
    "Answer: False",
    "Answer: EC2 and Fargate"
  ]
  var quizform = document.getElementById("quiz-form");
  var numquestions = quizform.className[quizform.className.length - 1];
  console.log(quizform);
  console.log(numquestions);
  for (let i = 1; i <= numquestions; i++) {
    var A = document.getElementById(`A${i}`);
    A.innerText = answers[i - 1];
  }
}

