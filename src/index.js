import "./style.scss";

let year = document.getElementById("year");
let marker = document.querySelector("a-marker");

marker.addEventListener("markerFound", function() {
  year.emit("anim-restart");
  year.emit("anim-start");
});

document.querySelector("a-scene").addEventListener("loaded", function() {
  console.log("loaded");
});
