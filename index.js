const titles = [
  "Bulb",
  "Calculator",
  "Search",
  "Hobbies",
  "Star Wars Image Generator",
  "Times Tables Finder",
  "To Do List",
];
const descripts = [
  "The Bulb project is my first project in this unit. It has a slider and buttons to get the bulb on or off The link to it is below. We explored how to utilize buttons and sliders in this project",
  "The Calculator project is a project to recreate an iOS caculator in HTML.",
  "The Search project is a project in which you van search through a list of bookmarks to find one. It was done to practice how to do the search functionality and to utilize it for future projects.",
  "The Hobbies project is a project in which I experiment with different ways of letting the useres pick steetings, styles and many more. It explored functions and user access in more detail than ever.",
  "The Star Wars Image Generator was a project with simple UI to expeiment with dropdowns as part of a new  type of project. As one of my first projects, it is simple but does its job really well",
  "The Times Tables Finder is a project that was a segway into more expansive ways of using mathematical equations to help further projects get better and easier results in a short amount of time.",
  "The To-Do List Project was a project in which I explored how to make user added content integrate into the webpage so that they can use the webpage with infinite possibility, rather than being limited",
];
descripts.forEach((descript, index) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  // cardDiv.classList.add("col-md-3");
  // cardDiv.classList.add("col-sm-6");
  cardDiv.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${titles[index]}</h5>
          <p class="card-text">${descript}</p>
          <a href="" class="btn btn-primary">Click</a>
        </div>`;
  document.querySelector(".cards").appendChild(cardDiv);
});
