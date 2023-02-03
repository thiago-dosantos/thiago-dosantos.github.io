// var string = "Hello, my name is Thiago"; /* type your text here */
var array = string.split("");
var timer;

function frameLooper () {
  if (array.length > 0) {
    document.querySelector("h3").innerHTML += array.shift();
  } else {
    clearTimeout(timer);
      }
  loopTimer = setTimeout('frameLooper()',70); /* change 70 for speed */

}
frameLooper();


class MobileNavbar {
  constructor(mobileMenu) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navLeft = document.querySelector(mobileMenu);
    this.navLinks = document.querySelectorAll(mobileMenu);
  }
}