function toggleText(el) {
  var text = el.closest('div').querySelector(".demo");

  text.style.display = "block";

}


function hamburgerMenu() {
  var id = null;
  var element = document.getElementById("menu");
  const compElementStyles = window.getComputedStyle(element);
  const menuWidth = compElementStyles.getPropertyValue("width");
  console.log(menuWidth)

  // if (element.style.width === "0em" || `${element.style.width}` === "0px") {
  if (`${menuWidth}` === "0px") {

    // element.style.display = "none";
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
    // } else if (element.style.width === "10em") {
  } else if (`${menuWidth}` !== "0px") {

    var id = null;
    // element.style.display = "block";
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
