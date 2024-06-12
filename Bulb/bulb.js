function turnOn() {
  document.querySelector("img").src = "ON.png";
  document.querySelector("h1").style.color = "darkorange";
}
function turnOff() {
  console.log("Are you reching here???");
  document.querySelector("img").src = "OFF.png";
  document.querySelector("h1").style.color = "black";
}
function changingState() {
  const isInputChecked = document.querySelector("input:checked");
  if (isInputChecked != null) {
    turnOn();
  } else {
    turnOff();
  }
}
// event listener
const checkbox = document.querySelector("input");
checkbox.addEventListener("change", changingState);
