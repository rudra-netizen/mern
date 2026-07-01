var btn = document.querySelector("button");
var h1 = document.querySelector("h1");
var h4 = document.querySelector("h4");
var flag = 0;
btn.addEventListener("click", function () {
  btn.style.scale = `0.95`;
  if (flag === 0) {
    h4.innerHTML = `Processing`;
    h4.style.color = `blue`;
    setTimeout(function () {
      h4.innerHTML = `Freinds`;
      h4.style.color = `green`;
      btn.innerHTML = `Remove Freind`;
      btn.style.color = `red`;
    }, 5000);
    flag = 1;
  } else {
    h4.innerHTML = `Processing`;
    h4.style.color = `blue`;
    setTimeout(function () {
      h4.innerHTML = `Stranger`;
      h4.style.color = `red`;
      btn.innerHTML = `Add Freind`;
      btn.style.color = `green`;
    }, 5000);
    flag = 0;
  }
});
