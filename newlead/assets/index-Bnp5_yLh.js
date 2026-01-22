const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
const clodebutton = document.getElementById("close-button");
burger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  document.body.classList.add("overflow-hidden");
});
clodebutton.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  document.body.classList.remove("overflow-hidden");
});
mobileMenu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    mobileMenu.classList.remove("active");
    document.body.classList.remove("overflow-hidden");
  }
});
const section = document.querySelector(".scroll-section");
const content = document.querySelector(".scroll-content");
const text = document.querySelector(".scroll-content-text");
if (section && content && text) {
  let scrollFunction = function() {
    const rect = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    let progress = (viewportHeight - rect.top) / (viewportHeight + sectionHeight / 5);
    progress = Math.min(Math.max(progress, 0), 1);
    const width = startWidth + progress * (endWidth - startWidth);
    const height = startHeight + progress * (endHeight - startHeight);
    const radius = startRadius + progress * (endRadius - startRadius);
    content.style.width = width + "%";
    content.style.height = height + "%";
    content.style.borderRadius = radius + "px";
    let textProgress = (progress - 0.7) / 0.3;
    textProgress = Math.min(Math.max(textProgress, 0), 1);
    text.style.opacity = textProgress;
  };
  var scrollFunction2 = scrollFunction;
  const sectionHeight = section.offsetHeight;
  const startWidth = 50;
  const endWidth = 100;
  const startHeight = 25;
  const endHeight = window.innerWidth < 768 ? 41 : 50;
  const startRadius = 100;
  const endRadius = 48;
  window.addEventListener("scroll", scrollFunction);
  scrollFunction();
}
document.addEventListener("DOMContentLoaded", () => {
  const sticky = document.querySelector(".scroll-sticky");
  const parent = document.querySelector(".scroll-parent");
  if (!sticky || !parent) return;
  function handleScroll() {
    if (window.innerWidth < 992) {
      sticky.classList.remove("is-fixed", "is-stopped");
      sticky.style.width = "";
      sticky.style.left = "";
      return;
    }
    const parentRect = parent.getBoundingClientRect();
    const stickyHeight = sticky.offsetHeight;
    const offsetTop = 40;
    const parentWidth = parent.offsetWidth;
    const parentLeft = parentRect.left + 12;
    if (parentRect.top <= offsetTop && parentRect.bottom > stickyHeight + offsetTop) {
      sticky.classList.add("is-fixed");
      sticky.classList.remove("is-stopped");
      sticky.style.width = `${parentWidth}px`;
      sticky.style.left = `${parentLeft}px`;
    } else if (parentRect.bottom <= stickyHeight + offsetTop) {
      sticky.classList.remove("is-fixed");
      sticky.classList.add("is-stopped");
      sticky.style.width = "";
      sticky.style.left = "";
    } else {
      sticky.classList.remove("is-fixed", "is-stopped");
      sticky.style.width = "";
      sticky.style.left = "";
    }
  }
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
  handleScroll();
});
document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const id = link.getAttribute("href");
  if (id === "#") return;
  const target = document.querySelector(id);
  if (!target) return;
  e.preventDefault();
  const offset = window.innerWidth < 768 ? 100 : 130;
  const elementPosition = target.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
});
