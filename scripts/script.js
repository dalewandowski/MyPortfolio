const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");

  hamburger.classList.toggle("open");
});

const webDeveloper = {
  name: "Damian",
  lastName: "Lewandowski",
  age: 31,
  speciality: ["webPages", "webaApps"],
  available: true,
  skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "ReactJS"],
};

// let's make something yours

webDeveloper.createYourWebsite();
