function action() {
  const character = document.getElementById("Character");
  const mood = document.getElementById("Mood");
  const img = document.querySelector("img");
  if (character.selectedIndex == "0" && mood.selectedIndex == "1") {
    img.src = "Luke.jpeg";
  } else if (character.selectedIndex == "2" && mood.selectedIndex == "1") {
    img.src = "angryobi-wan.jpg";
  } else if (character.selectedIndex == "2" && mood.selectedIndex == "0") {
    img.src = "visiblehappinessobi-wan.jpg";
  } else if (character.selectedIndex == "1" && mood.selectedIndex == "0") {
    img.src = "Anakinhappy.jpg";
  } else if (character.selectedIndex == "1" && mood.selectedIndex == "1") {
    img.src = "anakin-rage.jpg";
  } else if (character.selectedIndex == "0" && mood.selectedIndex == "0") {
    img.src = "Luke-happy.jpeg";
  }
}
