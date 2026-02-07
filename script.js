// ================= TAB SELECT =================
const tabs = document.querySelectorAll(".tab__list button");
const searchForm = document.querySelector(".search__form");
const checkinForm = document.querySelector(".checkin");
const lookupForm = document.querySelector(".lookup");

// ================= TRIP TYPE =================
const tripRadios = document.querySelectorAll('input[name="trip"]');

// ================= DATE =================
const returnDateField = document.querySelector(".return-date");
const returnDateInput = returnDateField.querySelector("input");

// ================= PASSENGER =================
const passengerInput = document.querySelector(".passengers input");
const plusBtn = document.querySelector(".passengers .plus");
const minusBtn = document.querySelector(".passengers .minus");

// ================= DEFAULT STATE =================
tabs[0].classList.add("active");
searchForm.classList.remove("hidden");
checkinForm.classList.add("hidden");
lookupForm.classList.add("hidden");

// mặc định: một chiều
returnDateField.classList.add("is-hidden");

// ================= FLATPICKR =================
document.addEventListener("DOMContentLoaded", () => {
  flatpickr("#leaveDate, #returnDate", {
    enableTime: true,
    time_24hr: true,
    minuteIncrement: 15,
    minDate: "today",
    altInput: true,
    altFormat: "d/m/Y H:i",
    dateFormat: "Y-m-d H:i",
    closeOnSelect: false
  });

  flatpickr("#check-day", {
    enableTime: false,
    altInput: true,
    altFormat: "d/m/Y",
    dateFormat: "Y-m-d"
  });
});

// ================= TAB CLICK =================
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const type = tab.dataset.type;

    searchForm.classList.add("hidden");
    checkinForm.classList.add("hidden");
    lookupForm.classList.add("hidden");

    if (type === "oneway") searchForm.classList.remove("hidden");
    if (type === "checkin") checkinForm.classList.remove("hidden");
    if (type === "lookup") lookupForm.classList.remove("hidden");
  });
});

// ================= TRIP TYPE =================
tripRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "roundtrip") {
      returnDateField.classList.remove("is-hidden");
    } else {
      returnDateField.classList.add("is-hidden");
      returnDateInput.value = "";
    }
  });
});

// ================= PASSENGER CONTROL =================
plusBtn.addEventListener("click", () => {
  let value = parseInt(passengerInput.value, 10);
  if (value < 9) passengerInput.value = value + 1;
});

minusBtn.addEventListener("click", () => {
  let value = parseInt(passengerInput.value, 10);
  if (value > 1) passengerInput.value = value - 1;
});



// ===================== FAQ ==================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');

    faqItems.forEach(i => {
      i.classList.remove('active');
      i.querySelector('.faq-answer').style.maxHeight = null;
    });

    if (!isOpen) {
      item.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});
// ===================== Navbar responsive =============
const toggle = document.querySelector('.navbar__toggle');
const mobileMenu = document.querySelector('.mobile-menu');

// mở / đóng bằng nút ☰
toggle.addEventListener('click', (e) => {
  e.stopPropagation(); // chặn lan ra ngoài
  mobileMenu.classList.toggle('active');
});

// click ngoài menu → đóng
document.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

// click trong menu → không đóng
mobileMenu.addEventListener('click', (e) => {
  e.stopPropagation();
});
