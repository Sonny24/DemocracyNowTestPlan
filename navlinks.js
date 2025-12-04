const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

function jumpToElement(link, targetId) {
  pages.forEach((page) => page.classList.remove("active"));
  navLinks.forEach((l) => l.classList.remove("active"));

  document.getElementById(targetId).classList.add("active");
  link.classList.add("active");
}

const initTarget = window.location.hash.substring(1);
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    window.location.hash = `#${targetId}`;
    jumpToElement(link, targetId);
  });

  if (link.getAttribute("href") === `#${initTarget}`) {
    jumpToElement(link, initTarget);
  }
});
