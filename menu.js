var menuToggle = document.getElementById("menu-toggle-icon");
var over = document.getElementById("over-lay");
var sides = document.getElementById("sidebar");
var maincross = document.getElementById("main-cross");

menuToggle.onclick = function () {
  sides.style.display = "block";
  over.style.display = "block";
};
over.onclick = function () {
  sides.style.display = "none";
  over.style.display = "none";
  sidesp.style.display = "none";
  sidesc.style.display = "none";
};
maincross.onclick = function () {
  sides.style.display = "none";
  over.style.display = "none";
};

