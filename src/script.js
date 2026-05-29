// MENU
function toggleMenu() {
  document.getElementById("sideMenu")?.classList.toggle("active");
}

// SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// SLIDER
const slides = document.querySelectorAll(".slide");

if (slides.length) {
  let i = 0;
  slides[i].classList.add("active");

  setInterval(() => {
    slides[i].classList.remove("active");
    i = (i + 1) % slides.length;
    slides[i].classList.add("active");
  }, 3000);
}

// FAQ
document.querySelectorAll(".faq-item").forEach(item => {
  const q = item.querySelector(".faq-q");

  q?.addEventListener("click", () => {
    document.querySelectorAll(".faq-item").forEach(el => {
      if (el !== item) el.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});

// FORMS
function sendForm(e) {
  e.preventDefault();
  document.getElementById("successModal")?.classList.add("show");
}

function closeModal() {
  document.getElementById("successModal")?.classList.remove("show");
}

function sendReview(e) {
  e.preventDefault();

  const input = document.getElementById("reviewInput");
  const modal = document.getElementById("reviewModal");

  if (input?.value.trim()) {
    modal?.classList.add("show");
    input.value = "";
  }
}

function closeReviewModal() {
  document.getElementById("reviewModal")?.classList.remove("show");
}

function addQuestion() {

  const input = document.getElementById("questionInput");
  const faqList = document.getElementById("faqList");
  const modal = document.getElementById("faqModal");

  if (!input.value.trim()) return;

  const item = document.createElement("div");
  item.className = "faq-item";

  item.innerHTML = `
    <div class="faq-q">${input.value}</div>
    <div class="faq-a">Ответ появится после рассмотрения вопроса</div>
  `;

  faqList.appendChild(item);

  const question = item.querySelector(".faq-q");

  question.addEventListener("click", () => {

    document.querySelectorAll(".faq-item").forEach(el => {
      if (el !== item) el.classList.remove("active");
    });

    item.classList.toggle("active");
  });

  modal.classList.add("show");

  input.value = "";
}

function closeFaqModal() {
  document.getElementById("faqModal")?.classList.remove("show");
}