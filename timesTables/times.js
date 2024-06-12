document.addEventListener("keydown", function (event) {
  checkKeyPressed(event);
});
function printTable() {
  if (document.querySelector(".tableHolder")) {
    document.querySelector(".tableHolder").remove();
  }

  const pTableHolder = document.createElement("p");
  pTableHolder.classList.add("tableHolder");
  document.querySelector(".main").appendChild(pTableHolder);

  const n = document.querySelector("input").value;
  if (!isNaN(n)) {
    for (let i = 1; i <= 12; i = i + 1) {
      const p = document.createElement("p");
      p.innerHTML = n * i;
      document.querySelector(".tableHolder").appendChild(p);
    }
  } else {
    alert("Enter A Valid number");
  }
  document.querySelector("input").value = " ";
}

function checkKeyPressed(event) {
  if (event.key == "Enter") {
    printTable();
  }
}
