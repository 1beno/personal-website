"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// BLOG DETAIL TAB FUNCTIONALITY
const blogLinks = document.querySelectorAll(".blog-post-item > a");
const blogDetailTab = document.querySelector('[data-page="blog-detail"]');
const blogDetailTitle = document.getElementById("blog-detail-title");
const blogDetailContent = document.getElementById("blog-detail-content");
const backToBlogBtn = document.getElementById("back-to-blog");
const blogTab = document.querySelector('[data-page="blog"]');

// Simpan data blog (bisa juga ambil dari HTML jika mau)
const blogData = [
  {
    title: "Membangun Web Pertamaku",
    content: `<p>Semua orang punya “pertama kali”-nya. Dan untukku, momen itu datang ketika aku akhirnya memberanikan diri untuk bikin website pertamaku sendiri.</p> <p>Waktu itu, aku lagi iseng nonton YouTube dan nemu satu tutorial membuat website sederhana dengan HTML, CSS, dan sedikit JavaScript. Kelihatannya seru, jadi aku pikir: <i>“Kenapa nggak coba aja?”</i></p>`,
    image: "./assets/images/blog-1.jpg",
  },
  {
    title: "Best fonts every designer",
    content: `<p>Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.</p>`,
    image: "./assets/images/blog-2.jpg",
  },
  {
    title: "Design digest #80",
    content: `<p>Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.</p>`,
    image: "./assets/images/blog-3.jpg",
  },
  {
    title: "UI interactions of the week",
    content: `<p>Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.</p>`,
    image: "./assets/images/blog-4.jpg",
  },
  {
    title: "The forgotten art of spacing",
    content: `<p>Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`,
    image: "./assets/images/blog-5.jpg",
  },
  {
    title: "Design digest #79",
    content: `<p>Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.</p>`,
    image: "./assets/images/blog-6.jpg",
  },
];

// Event untuk klik blog post
blogLinks.forEach((link, idx) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // Sembunyikan semua tab
    document
      .querySelectorAll("[data-page]")
      .forEach((tab) => tab.classList.remove("active"));
    // Tampilkan tab detail
    blogDetailTab.classList.add("active");
    // Isi konten detail
    blogDetailTitle.textContent = blogData[idx].title;
    blogDetailContent.innerHTML = `
      <img src="${blogData[idx].image}" alt="${blogData[idx].title}" style="width:100%;border-radius:12px;margin-bottom:20px;">
      ${blogData[idx].content}
    `;
    window.scrollTo(0, 0);
  });
});

// Tombol kembali ke blog
backToBlogBtn.addEventListener("click", function () {
  document
    .querySelectorAll("[data-page]")
    .forEach((tab) => tab.classList.remove("active"));
  blogTab.classList.add("active");
  window.scrollTo(0, 0);
});
