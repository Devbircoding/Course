const inputTags = document.querySelectorAll("input");

console.log(inputTags);
inputTags.forEach((inputTag) => {
  console.log("adding event listener click to input tag");
  inputTag.addEventListener("click", (inputTag) => {
    test(inputTag);
  });
});

function test(inputTag) {
  console.log(inputTag);
  if (inputTag.target.name == "color") {
    document.querySelector("body").style.color = inputTag.target.value;
  } else {
    document.querySelector("body").style.backgroundColor =
      inputTag.target.value;
  }
}
