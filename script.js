import { englishData } from "./englishData.js";
import { arabicData } from "./arabicData.js";
let head;
let itemCotant;
let lang = document.getElementById("lang");
let main = document.querySelector("main");
let toTopButton = document.getElementById("toTopBtn");
// let categories = document.querySelector(".categories");
// let label = document.querySelector("label");
let title1 = document.querySelector("#title-1");
let title2 = document.querySelector("#title-2");
let data = arabicData;
if (localStorage.getItem("lang") === "en") {
  data = englishData;
  lang.value = "en";
  main.classList.add("english-text");
  main.classList.remove("arabic-text");
  // label.innerHTML = "Choose Language";
  // title1.innerHTML = "Categories";
  title2.innerHTML = "Menu";
}
// العصائر-الباردة/سموذي--items
for (let category in data) {
  head = "";
  itemCotant = "";
  head = `<div class="category">
  <h2 class="category--title" id=${category}>${category.replaceAll(
    "-",
    " "
  )}</h2>
  <div id=${category}--items class="category--items hidden">`;
  for (let item of data[category]) {
    itemCotant += `<div class="category--item">
    <div class="item--header">
      <h3 class="item--name">${item.name}</h3>
      <p class="item--divider">
        ..........................................................................................................................................................................................
      </p>
      <p class="item--price">${item.price} <span>JD</span></p>
    </div>
    <div class="item--description">
    ${item.disctiption}
    </div>
  </div>`;
  }
  let foot = `</div>
  </div>`;
  let markup = head + itemCotant + foot;
  let element = document.querySelector("main");
  element.insertAdjacentHTML("beforeend", markup);
  // let categoriesMarkUp = `<h2 class="category--title"><a href="#${category}">${category.replaceAll(
  //   "-",
  //   " "
  // )}</a></h2>`;
  // categories.insertAdjacentHTML("beforeend", categoriesMarkUp);
}

lang.addEventListener("change", function (e) {
  if (e.target.value == "en") {
    main.classList.remove("arabic-text");
    main.classList.add("english-text");
    localStorage.setItem("lang", "en");
    window.location.reload();
  } else {
    main.classList.add("arabic-text");
    main.classList.remove("english-text");
    data = arabicData;
    localStorage.setItem("lang", "ar");
    window.location.reload();
  }
});
main.addEventListener("click", function (e) {
  if (e.target.classList.contains("category--title")) {
    let itemsParent = document.getElementById(
      `${e.target.id}--items`
    ).classList;
    if (itemsParent.contains("hidden")) {
      itemsParent.remove("hidden");
    } else {
      itemsParent.add("hidden");
    }
  }
});

// Show or hide the "To Top" button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
});

// Scroll to the top of the page when the button is clicked
toTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
