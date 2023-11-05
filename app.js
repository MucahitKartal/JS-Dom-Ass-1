const header = document.querySelector(".header");

header.style.backgroundColor = "#FF4500";
header.style.color = "white";
header.style.padding = "1rem";
header.style.textAlign = "center";

const title = document.getElementById("title");
title.textContent = "Javascript Dom Assignemnt 1";

const navİtem = document.querySelector(".nav-item");
navİtem.style.display = "flex";
navİtem.style.gap = "1rem";
navİtem.style.justifyContent = "center";
navİtem.style.listStyleType = "none";

const username = document.querySelector("#username");
const password = document.querySelector("#password");
username.value = "Anthony";
password.value = "123456";
password.type = "text";

username.disabled = true;
password.disabled = true;

const button = document.querySelector(".btn");
button.style.backgroundColor = "#C0EFC0";
button.style.color = "black";
button.style.padding = ".3rem";
button.style.borderRadius = "10%";
button.style.cursor = "pointer";
button.style.border = "none";
button.textContent = "Giriş Yap";

const project = document.getElementById("projects");
project.firstElementChild.textContent = "Js Dom Projects";

const myProjects = [
  "Hello World!",
  "Guess Number",
  "Checkout Page",
  "Gelir-Gider Projesi",
  "Api Projects",
];

myProjects.forEach((i) => {
  let listİtem = document.createElement("li");
  listİtem.innerHTML = i;
  project.appendChild(listİtem);
});
