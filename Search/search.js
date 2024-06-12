const bookmarks = [
  "Aesthetic inspiration!",
  "Fun quizzes with friends!",
  "Catch up with the news!",
  "All makeup products!",
  "The best TV shows!",
  "Animal education",
  "The cutest puppies!",
  "Shop all home and food essentials!",
  "Catch up with all good movies!",
  "Our very own IYA!",
  "Catch up with the news!",
  "Get idea inspiration and knowledge!",
  "Web design",
  "AI imagery generator",
  "Organise your work with mindmaps!",
  "Catch up with the news!",
  "Catch up with the news!",
  "Make team work easier!",
  "Vegan Recipes!",
  "Latest fashion!",
];

const onDown = (event) => {
  if (event.key == "Enter") {
    const val = document.querySelector("input").value.toLowerCase();
    const bookmarks_names = bookmarks.filter((bookmark) => {
      let bookmark_lower = bookmark.toLowerCase();
      if (bookmark_lower.includes(val)) {
        return true;
      } else {
        return false;
      }
    });
    document.querySelector(".bookmarks-container").innerHTML = "";
    bookmarks_names.forEach((bookmark) => {
      const p = document.createElement("p");
      p.innerHTML = bookmark;
      document.querySelector(".bookmarks-container").appendChild(p);
      document.addEventListener("keydown", onDown);
    });
  }
};
bookmarks.forEach((bookmark) => {
  const p = document.createElement("p");
  p.innerHTML = bookmark;
  document.querySelector(".bookmarks-container").appendChild(p);
  document.addEventListener("keydown", onDown);
});
