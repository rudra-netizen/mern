var button = document.querySelector("button");
var h1 = document.querySelector("h1");
var h4 = document.querySelector("h4");

flag = 0;

button.addEventListener("click", function () {
  if (flag == 0) {
    h4.textContent = ` Now we are Friends`;
    h4.fontWeight = 700;
    h1.style.color = "green";
    flag = 1;
  } else {
    h4.textContent = ` Dosti tut gyi`;
    h4.fontWeight = 400;
    h1.style.color = `red`;
    flag = 0;
  }
});
