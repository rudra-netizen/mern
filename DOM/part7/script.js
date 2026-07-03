var main = document.getElementsByClassName("main");

var arr = [
  {
    name: "Riya Patel",
    age: 24,
    Martial: "Married",
    imgSrc:
      "https://images.unsplash.com/photo-1524080909555-5ca9077eaeaf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGJvbGx5d29vZHxlbnwwfHwwfHx8MA%3D%3D",
    isStatus: "Stranger",
  },

  {
    name: "Chris Evans",
    age: 32,
    Martial: "Married",
    imgSrc:
      "https://content2.promiflash.de/article-images/square600/chris-evans-guckt-neutral.jpg",
    isStatus: "Stranger",
  },

  {
    name: "Tom Holland",
    age: 29,
    Martial: "UnMarried",
    imgSrc:
      "https://www.alistmagazine.ro/wp-content/uploads/2024/02/tom-holland.jpg",
    isStatus: "Stranger",
  },
];

function hero() {
  var sum = "";

  arr.forEach(function (element, index) {
    sum =
      sum +
      `<div class="card">
      <img
        src="${element.imgSrc}"
        alt=""
      />
      <h1>${element.name}, ${element.age}</h1>
      <h3>${element.isStatus}</h3>
      <h5>${element.Martial}</h5>
      <button id=${index}>Add Friend</button>
    </div>`;

    main[0].innerHTML = sum;
  });
}

hero();

main[0].addEventListener("click", function (dets) {
  if (arr[dets.target.id].isStatus == "Stranger") {
    arr[dets.target.id].isStatus = "Processing";
    hero();
    //console.log(arr[dets.target.id]);
    setTimeout(function () {
      arr[dets.target.id].isStatus = "Friend";
      console.log(arr[dets.target.id]);
      hero();
    }, 4000);
    hero();
  } else {
    arr[dets.target.id].isStatus = "Stranger";
    hero();
  }
});
