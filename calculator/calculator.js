const buttons = document.querySelectorAll("button");
let valueScreen = "";

const onButtonClick = (event) => {
  if (event.target.innerHTML == "×") {
    valueScreen = valueScreen + "*";
  } else if (event.target.innerHTML == "÷") {
    valueScreen = valueScreen + "/";
  } else if (event.target.innerHTML == "=") {
    valueScreen = eval(valueScreen);
  } else if (event.target.innerHTML == "AC") {
    valueScreen = document.querySelector(".screen").innerHTML = "";
  } else if (event.target.innerHTML == "+/-") {
    valueScreen = "-" + valueScreen;
  } else {
    valueScreen = valueScreen + event.target.innerHTML;
  }
  document.querySelector(".screen").innerHTML = valueScreen;
};

buttons.forEach((button) => {
  button.addEventListener("click", (event) => onButtonClick(event));
});
