var btn = document.querySelector("button");

btn.addEventListener("click", function () {
  var img = document.createElement("img");
  img.setAttribute("src", "./chutki.png");
  console.log(img);
  var x = Math.random() * 90;
  var y = Math.random() * 90;
  var rot = Math.random() * 360;
  img.style.position = "absolute";
  img.style.left = x + "%";
  img.style.top = y + "%";
  img.style.width = "100px";
  img.style.transform = "rotate(" + rot + "deg)";
  document.body.appendChild(img);
});
