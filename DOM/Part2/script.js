var box = document.querySelector(".box");
box.innerHTML = `<h6>Kaise hain aap log</h6>`;
box.textContent = `<h6>Kaise hain aap log</h6>`;

//var h = document.querySelector("h1");

var h = document.querySelectorAll("h1");

console.log(h);

h[1].textContent = `bye`;
