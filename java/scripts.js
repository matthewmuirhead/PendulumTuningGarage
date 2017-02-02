var menu;
var aside;

function loadFunction() {
  var menu = document.getElementById('menu');
  aside = document.getElementById('aside');

  menu.addEventListener('mouseenter', showNav);
  menu.addEventListener('mouseleave', hideNav);

}

function showNav() {
  //heading.style.display = "block";
  console.log("1");
}

function hideNav() {
  //aside.style.display = "none";
  console.log("0");
}

document.addEventListener('DOMContentLoaded', loadFunction);
