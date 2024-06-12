function addToToDoList() {
  const text = document.querySelector("input").value;

  if (text != "") {
    const li = document.createElement("li");
    li.innerHTML = text;

    const input = document.createElement("input");
    input.type = "checkbox";

    li.prepend(input);

    input.addEventListener("click", () => {
      li.style.display = "none";
    });

    // add item to do list
    document.querySelector("#insert").appendChild(li);

    // clear text from input box
    document.querySelector("input").value = "";
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    addToToDoList();
  }
});
