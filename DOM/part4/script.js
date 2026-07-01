var arr = [
  {
    team: "MI",
    primary: "blue",
    secondary: "gold",
  },
  {
    team: "CSK",
    primary: "yellow",
    secondary: "silver",
  },
  { team: "SRH", primary: "orange", secondary: "blue" },
  { team: "RR", primary: "pink", secondary: "skyblue" },
  { team: "KKR", primary: "purple", secondary: "white" },
  { team: "RCB", primary: "red", secondary: "black" },
  { team: "PBKS", primary: "green", secondary: "red" },
];

var btn = document.querySelector("button");
var box1 = document.getElementsByClassName("box");
var box = box1[0];
console.log(box);

btn.addEventListener("click", () => {
  var item = arr[Math.floor(Math.random() * arr.length)];
  box.innerHTML = `${item.team}`;
  box.style.backgroundColor = `${item.primary}`;
  box.style.color = `${item.secondary}`;
});
