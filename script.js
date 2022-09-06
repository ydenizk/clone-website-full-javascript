/* card animation */
const card = document.querySelector(".card");
const cardContainer = document.querySelector(".card-container");

cardContainer.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 4 - e.pageX) / 22;
  let yAxis = (window.innerHeight / 4 - e.pageY) / 40;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

cardContainer.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.6s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

/* tabs */

const tabs = document.querySelector(".tab-container");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = (e) => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach((content) => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
};

/* animation on viewport */

const element = document.querySelector(".nav-buildings");
const observer = new IntersectionObserver((entries) => {
  element.classList.toggle("buildings-anima", entries[0].isIntersecting);
});

observer.observe(element);

/* dropdown menu */
const crossBtn = document.querySelector(".menu .cross");
const navLinks = document.querySelector(".menu .nav-links");

crossBtn.addEventListener("click", () => {
  navLinks.classList.toggle("navHeight");
  console.log("yyyyyyyy");
});
