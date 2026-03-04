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
const items = document.querySelectorAll("#accordion > div");
items.forEach((item) => {
  const btn = item.querySelector("button");
  const content = item.querySelector("div");
  btn.addEventListener("click", () => {
    content.classList.toggle("hidden");
    items.forEach((i) => {
      if (i !== item) i.querySelector("div").classList.add("hidden");
    });
  });
});
const openBtns = document.querySelectorAll(".openModalBtn");
const modal = document.querySelector(".modal");
const closeBtn = modal.querySelector(".closeModal");
const form = modal.querySelector(".requestForm");
openBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    modal.classList.remove("hidden");
  });
});
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    comment: form.comment.value
  };
  console.log("Form submitted:", formData);
  alert("Thank you! Your request has been submitted.");
  form.reset();
  modal.classList.add("hidden");
});
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove("opacity-0", "pointer-events-none");
    backToTopBtn.classList.add("opacity-100");
  } else {
    backToTopBtn.classList.add("opacity-0", "pointer-events-none");
    backToTopBtn.classList.remove("opacity-100");
  }
});
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
