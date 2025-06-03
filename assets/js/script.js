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

// Semua elemen yang perlu diterjemahkan diberi atribut data-i18n="key"
// ...existing code...
const translations = {
  id: {
    // ABOUT
    about_title: "Tentang saya",
    about_text: `Mahasiswa Ilmu Komputer dengan pengalaman dalam pengembangan aplikasi web dan sistem berbasis AI, serta riset terkait algoritma dan pengolahan data. Mampu membangun website dengan PHP, Python dan menerapkan konsep machine learning dalam studi kasus nyata. Berkomitmen untuk terus mengasah keterampilan dalam Web Development, Machine Learning, dan Cybersecurity guna berkontribusi dalam menciptakan sistem yang aman, efisien, dan berdampak luas di dunia profesional.`,
    service_title: "Bidang Minat",
    service_cyber_title: "Keamanan Siber",
    service_cyber_text:
      "Melindungi sistem dan data dari ancaman digital menggunakan teknologi keamanan canggih.",
    service_web_title: "Pengembangan Web",
    service_web_text:
      "Membangun situs web yang modern dan aman yang disesuaikan dengan kebutuhan bisnis.",
    service_mobile_title: "Aplikasi Mobile",
    service_mobile_text:
      "Mengembangkan aplikasi seluler yang fungsional dan intuitif untuk platform iOS dan Android.",
    service_ai_title: "Kecerdasan Buatan",
    service_ai_text:
      "Menerapkan kecerdasan buatan untuk menciptakan solusi cerdas dan otomatis.",
    testimonials_title: "Testimoni",
    testi_1:
      "Benony adalah pribadi yang rajin, selalu sigap dalam menyelesaikan tugas, dan cepat beradaptasi saat mempelajari hal baru. Ia juga mampu mengambil peran sebagai pemimpin, mengarahkan tim dengan baik, serta terbuka terhadap pendapat dan sudut pandang yang berbeda.",
    testi_2:
      "Benony menunjukkan sikap terbuka terhadap perbedaan pandangan dalam diskusi kelompok. Ia aktif dalam brainstorming dan mempermudah penyusunan tugas dengan menyajikan kerangka kerja yang jelas, sehingga proses kerja kelompok menjadi lebih efisien dan terarah.",
    testi_3:
      "Sebagai Kepala Departemen Internal HMIK, bang beno selalu menunjukkan kepemimpinan yang tenang dan penuh tanggung jawab. Berkerja sama dengannya terasa ada jalan untuk kedepan dan menyenangkan.",
    testi_4:
      "Kerja bareng Benony selama di kelompok seru banget! Dia selalu sigap dan gak pernah bikin kita stuck. Kalau ada yang bingung, dia dengan sabar bantu jelasin sampai ngerti. Gak cuma ngerjain tugasnya aja, tapi juga perhatian sama temen-temen yang lain. Pokoknya, Benony itu teman kerja yang asik dan bisa diandalkan banget.",

    clients_title: "Bagian dari",

    // RESUME
    resume_title: "Resume",
    resume_education: "Pendidikan",
    edu_1_title: "Universitas Pertamina",
    edu_1_year: "2022 — Sekarang",
    edu_1_desc:
      "Mahasiswa Ilmu Komputer yang fokus pada pemrograman, pengembangan perangkat lunak, dan keamanan siber.",
    edu_2_title: "SMAN 7 Maluku Barat Daya",
    edu_2_year: "2019 — 2022",
    edu_2_desc:
      "Sekolah menengah dengan kinerja akademis yang kuat, terutama dalam mata pelajaran sains dan matematika.",

    resume_experience: "Pengalaman",
    exp_1_title: "Kepala Departemen Internal HMIK Universitas Pertamina",
    exp_1_year: "Februari 2025 — Sekarang",
    exp_1_desc:
      "Memimpin tim dalam menyusun agenda internal himpunan, monitoring kinerja divisi, dan membangun kultur kerja yang kolaboratif dan produktif di lingkungan organisasi.",
    exp_2_title: "Asisten Praktikum Object Oriented Programming Java",
    exp_2_year: "Februari 2025 — Sekarang",
    exp_2_desc:
      "Bertanggung jawab dalam memberikan penjelasan materi, membantu menyelesaikan permasalahan praktikum, serta mengevaluasi tugas dan proyek mahasiswa secara objektif.",
    exp_3_title: "Anggota Komite Penerjemah Indonesia-Meher-Woirata",
    exp_3_year: "Juli 2022 — Sekarang",
    exp_3_desc:
      "Bergabung sebagai anggota komite penerjemah untuk membantu dalam pembuatan kamus digital untuk bahasa Meher dan Woirata.",
    exp_4_title: "Ketua OSIS SMAN 7 Maluku Barat Daya",
    exp_4_year: "April 2021 — April 2022",
    exp_4_desc:
      "Memimpin organisasi siswa, mengoordinasikan acara sekolah, dan menjembatani komunikasi antara siswa dan administrasi sekolah.",
    resume_techstack: "Teknologi",

    // PORTFOLIO
    portfolio_title: "Portofolio",
    portfolio_select: "Pilih kategori",
    portfolio_all: "Semua",
    portfolio_ds: "Data Science",
    portfolio_ai: "AI/ML",
    portfolio_frontend: "Web Dev",
    portfolio_mobile: "Aplikasi Mobile",
    portfolio_cyber: "Keamanan Siber",
    portfolio_other: "Lainnya",

    // BLOG
    blog_title: "Blog",
    blog_detail_title: "Detail Blog",
    blog_back: "Kembali ke Blog",

    // CONTACT
    contact_title: "Kontak",
    contact_form_title: "Formulir Kontak",
    contact_fullname: "Nama Lengkap",
    contact_email: "Alamat Email",
    contact_message: "Pesan Anda",
    contact_send: "Kirim Pesan",

    // NAVBAR
    nav_about: "Tentang",
    nav_resume: "Resume",
    nav_portfolio: "Portofolio",
    nav_blog: "Blog",
    nav_contact: "Kontak",

    // TOOGLE LANGUAGE
    lang_label: "Bahasa:",
  },
  en: {
    // ABOUT
    about_title: "About me",
    about_text: `Computer Science student with experience in web application and AI-based system development, as well as research related to algorithms and data processing. Able to build websites using PHP, Python, and apply machine learning concepts to real-world cases. Committed to continuously improving skills in Web Development, Machine Learning, and Cybersecurity to contribute to creating secure, efficient, and impactful systems in the professional world.`,
    service_title: "Fields of Interest",
    service_cyber_title: "Cyber Security",
    service_cyber_text:
      "Protecting systems and data from digital threats using advanced security technologies.",
    service_web_title: "Web Development",
    service_web_text:
      "Building modern, secure, and responsive websites tailored to business and user needs.",
    service_mobile_title: "Mobile Apps",
    service_mobile_text:
      "Developing functional and intuitive mobile applications for both iOS and Android platforms.",
    service_ai_title: "Artificial Intelligence",
    service_ai_text:
      "Applying artificial intelligence to create intelligent and automated solutions.",
    testimonials_title: "Testimonials",
    testi_1:
      "Benony is a diligent person, always quick to complete tasks, and adapts quickly when learning new things. He is also able to take on leadership roles, guide the team well, and is open to different opinions and perspectives.",
    testi_2:
      "Benony shows openness to differing views in group discussions. He is active in brainstorming and makes task structuring easier by providing a clear framework, making group work more efficient and focused.",
    testi_3:
      "As Head of the Internal Department of HMIK, Ben always demonstrates calm and responsible leadership. Working with him feels like there is always a way forward and it's enjoyable.",
    testi_4:
      "Working with Benony has been a great experience! He is always quick to help and never lets us get stuck. If anyone is confused, he patiently explains things until they understand. He not only completes his tasks but also pays attention to his teammates. Overall, Benony is a fun and reliable coworker.",
    clients_title: "Part of",

    // RESUME
    resume_title: "Resume",
    resume_education: "Education",
    edu_1_title: "Pertamina University",
    edu_1_year: "2022 — Present",
    edu_1_desc:
      "Computer Science student focusing on programming, software development, and cybersecurity.",
    edu_2_title: "SMAN 7 Maluku Barat Daya",
    edu_2_year: "2019 — 2022",
    edu_2_desc:
      "High school with strong academic performance, especially in science and mathematics.",
    resume_experience: "Experience",
    exp_1_title: "Head of Internal Department, HMIK Pertamina University",
    exp_1_year: "February 2025 — Present",
    exp_1_desc:
      "Led a team to organize internal agendas, monitor division performance, and build a collaborative and productive work culture within the organization.",
    exp_2_title: "Teaching Assistant for Object Oriented Programming Java",
    exp_2_year: "February 2025 — Present",
    exp_2_desc:
      "Responsible for explaining material, helping solve practical problems, and objectively evaluating student assignments and projects.",
    exp_3_title: "Member of Indonesia-Meher-Woirata Translation Committee",
    exp_3_year: "July 2022 — Present",
    exp_3_desc:
      "Joined the translation committee to help develop a digital dictionary for the Meher and Woirata languages.",
    exp_4_title: "Student Council President, SMAN 7 Maluku Barat Daya",
    exp_4_year: "April 2021 — April 2022",
    exp_4_desc:
      "Led the student organization, coordinated school events, and bridged communication between students and school administration.",
    resume_techstack: "Tech Stack",

    // PORTFOLIO
    portfolio_title: "Portfolio",
    portfolio_select: "Select category",
    portfolio_all: "All",
    portfolio_ds: "Data Science",
    portfolio_ai: "AI/ML",
    portfolio_frontend: "Frontend",
    portfolio_webapp: "Web App",
    portfolio_mobile: "Mobile App",
    portfolio_cyber: "Cyber Security",
    portfolio_other: "Other",

    // BLOG
    blog_title: "Blog",
    blog_detail_title: "Blog Detail",
    blog_back: "Back to Blog",

    // CONTACT
    contact_title: "Contact",
    contact_form_title: "Contact Form",
    contact_fullname: "Full name",
    contact_email: "Email address",
    contact_message: "Your Message",
    contact_send: "Send Message",

    // NAVBAR
    nav_about: "About",
    nav_resume: "Resume",
    nav_portfolio: "Portfolio",
    nav_blog: "Blog",
    nav_contact: "Contact",

    // TOOGLE LANGUAGE
    lang_label: "Language:",
  },
};

// TOGGLE LANGUAGE FUNCTIONALITY
const langSwitch = document.getElementById("language-toggle");
if (langSwitch) {
  langSwitch.addEventListener("change", function () {
    setLanguage(this.checked ? "en" : "id");
  });
  // Set posisi switch sesuai localStorage saat load
  document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lang") || "id";
    langSwitch.checked = lang === "en";
    setLanguage(lang);
  });
} else {
  // Jika tidak ada switch, tetap set bahasa dari localStorage saat load
  document.addEventListener("DOMContentLoaded", () => {
    setLanguage(localStorage.getItem("lang") || "id");
  });
}

// Fungsi setLanguage hanya perlu ini:
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  localStorage.setItem("lang", lang);
}

// Set bahasa default dari localStorage atau ID
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(localStorage.getItem("lang") || "id");
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
    let selectedValue = this.getAttribute("data-filter");
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
    let selectedValue = this.getAttribute("data-filter");
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
    const targetPage = this.getAttribute("data-page-target");
    for (let j = 0; j < pages.length; j++) {
      if (pages[j].dataset.page === targetPage) {
        pages[j].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
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
    title: "Web Pertamaku",
    content: `
              <p>Semua orang punya “pertama kali”-nya. Dan untukku, momen itu datang ketika aku akhirnya memberanikan diri untuk bikin website pertamaku sendiri.</p> 
          
              <p>Waktu itu, aku lagi iseng nonton YouTube dan nemu satu tutorial membuat website sederhana dengan HTML dan CSS. Kelihatannya seru, jadi aku pikir: <i>“Kenapa nggak coba aja?”</i></p>

              <p>Awalnya, aku nggak tahu harus mulai dari mana. Buka VS Code aja masih bingung harus ngetik apa. Tapi setelah ikutin step-by-step di tutorialnya, pelan-pelan mulai kebentuk: dari bikin struktur HTML-nya, kasih sentuhan gaya dengan CSS, sampai akhirnya coba bikin navigasi dan tombol yang bisa diklik pakai JavaScript.</p>

              <p>
              Tantangan terbesarnya? CSS! 😵‍💫<br>
              Bayangin aja, cuma mau bikin satu bagian rata tengah, bisa ngabisin waktu hampir sejam. Tapi dari situ aku belajar pentingnya sabar (dan Googling 😆).
              </p>

              <p>Di tengah proses, aku juga kenalan sama yang namanya Bootstrap. Framework ini bener-bener nyelametin hidup. Banyak komponen yang tinggal pakai aja, dari navbar sampai card. Jadi tampilannya nggak terlalu kaku dan lebih modern.</p>

              <p>Meski hasil akhirnya jauh dari kata sempurna, tapi rasanya puas banget. Website itu jadi semacam “monumen” pertama dalam perjalanan belajarku sebagai calon web developer. Dari situ juga aku makin semangat buat belajar lebih dalam, dan mulai explore hal-hal lain kayak Laravel, Tailwind, sampai backend pakai PHP dan Python.</p>

              <p>Sekarang, kalau aku lihat kembali website pertama itu, mungkin bakal sedikit ketawa sendiri. Tapi justru dari situ semuanya mulai.</p>

              <p>Kalau kamu juga lagi bingung mau mulai belajar web dari mana, coba aja langsung praktek. Cari tutorial yang cocok, buka code editor, dan mulai ngetik. Karena percaya deh, belajar koding paling asik kalau langsung dicoba.</p>
    
              `,
    image: "./assets/images/blog-1.jpg",
  },
  {
    title: "Menjaga Bahasa Ibu Lewat Teknologi",
    content: `
              <p>Bahasa ibu adalah warisan paling murni yang kita terima sejak lahir. Sayangnya, di tengah dunia yang semakin global, bahasa daerah perlahan-lahan mulai ditinggalkan. Begitu juga yang terjadi di kampung halaman saya, Pulau Kisar, Kabupaten Maluku Barat Daya. Di sana, kami punya dua bahasa daerah yang begitu kaya: bahasa Meher dan bahasa Woirata. Tapi hari ini, keduanya nyaris hanya tinggal cerita.</p>

              <p>Anak-anak muda sudah jarang yang bisa mengucapkan salam atau bercakap dalam bahasa ini. Bahkan, tak sedikit orang tua yang memilih untuk tak lagi mengajarkannya, karena dianggap sudah tidak relevan. Saat itu, sejumlah kakak-kakak dari Pulau Kisar yang sedang menempuh studi di luar daerah menggagas sebuah inisiatif penting untuk melestarikan bahasa Meher dan Woirata. Saya yang saat itu baru lulus SMA, diajak bergabung dalam proyek ini untuk ikut berkontribusi sebagai bagian dari tim penerjemah.</p>

              <p>Lalu lahirlah satu ide: membuat kamus digital Meher–Woirata–Indonesia. Proyek ini bukan hanya soal daftar kata, tapi soal menyelamatkan identitas. Kami membentuk tim berdasarkan peran masing-masing. Ada yang bertugas membangun websitenya, ada juga yang mengumpulkan data. Saya sendiri menjadi bagian dari komite penerjemah, yang langsung turun ke lapangan menemui tetua adat, menggali ingatan mereka tentang bahasa, dan mencatat sebanyak mungkin kosakata, ungkapan, bahkan cara pengucapannya. Kami juga merekam audio agar pelafalan tidak hilang begitu saja.</p>

              <p>Proyek ini bukan hal yang mudah. Minimnya dokumentasi membuat kami benar-benar bergantung pada ingatan para tetua. Tapi justru dari keterbatasan itu, kami jadi lebih semangat. Dibantu juga oleh kepala desa, bahkan didukung oleh Kemdikbud dan Badan Bahasa, kami merasa kerja keras kami punya makna besar.</p>

              <p>Dan kini, hasilnya mulai terlihat. Kami sudah berhasil mengumpulkan lebih dari 15.000 kosakata, lengkap dengan terjemahan otomatis Meher–Woirata–Indonesia, bahkan dilengkapi fitur audio. Meski belum sempurna, ini jadi langkah awal yang sangat berarti.</p>

              <p>Jika teman-teman penasaran dan ingin melihat langsung hasil kerja kami, kunjungi website kamus digital bahasa Meher dan Woirata yang telah dibuat di <a href='https://www.yotowawa.com/' target="_blank" style="color: hsl(45, 100%, 72%);">www.yotowawa.com</a>. Semoga bisa menjadi jembatan untuk mengenal dan mencintai bahasa ibu kita bersama.</p>

              <p>Buat saya pribadi, menjaga bahasa ibu bukan cuma soal nostalgia, tapi soal keberanian untuk merawat akar identitas. Karena kalau bukan kita, siapa lagi? Dan kalau bukan sekarang, kapan lagi?</p>

              `,
    image: "./assets/images/blog-2.jpg",
  },
  {
    title: "Ngoding Harus Hafal?",
    content: `
              <p>Waktu pertama kali belajar programming, saya sempat merasa harus hafal semua kode kalau mau jadi jago. Rasanya kayak belajar matematika campur bahasa asing—panik kalau lupa titik koma, bingung kalau salah indentasi, belum lagi nama-nama fungsi yang kadang susah diingat.</p>

              <p>Tapi makin lama belajar, saya mulai sadar satu hal penting: menghafal semua sintaks itu bukan kunci utama untuk jadi programmer yang baik.</p>

              <p>Dunia programming itu luas banget. Ada Python, JavaScript, PHP, C++, Java, dan masih banyak lagi. Setiap bahasa punya ciri khasnya masing-masing, kayak gaya bicara yang beda-beda di tiap daerah.</p>
              <p>Dan kalau kamu pikir kamu harus menghafal semuanya, bisa-bisa waktu kamu habis cuma buat <i>ngafal</i> tanpa pernah benar-benar <i>paham</i>. Padahal, yang lebih penting dari hafalan adalah pemahaman terhadap dasar-dasarnya. Seperti bagaimana program dijalankan dari awal sampai akhir, apa itu variabel, fungsi, kondisi, dan perulangan, serta bagaimana cara berpikir secara logis untuk menyelesaikan sebuah masalah. Dan ketika sudah mulai belajar tentang OOP (Object-Oriented Programming), memahami konsep seperti inheritance, encapsulation, dan polymorphism justru jauh lebih bermanfaat daripada tahu semua perintah dalam satu bahasa.</p>

              <p>Saya sendiri pertama kali belajar bahasa C++. Bahasa ini memang cukup “keras” tapi sangat membantu membentuk pola pikir yang sistematis dan rapi. Struktur C++ yang ketat dan pendekatan yang dekat dengan sistem membuat saya terbiasa berpikir secara detail. Namun, ketika saya beralih ke Java yang lebih berorientasi objek dan punya struktur yang lebih besar, saya tidak merasa mulai dari nol. Karena saya sudah memahami konsep-konsep dasar pemrograman, saya hanya perlu menyesuaikan diri dengan sintaks dan gaya penulisan Java. Dan kalaupun saya lupa sesuatu? Tinggal buka dokumentasi, cari di internet, atau tanya ke ChatGPT.</p>

              <p>Jadi, apakah perlu hafal semua sintaks? Jawaban singkatnya: <i>tidak harus</i>. Memang, punya ingatan yang baik itu membantu, tapi yang lebih penting adalah punya pemahaman yang kuat. Karena saat kamu mengerti bagaimana dan kenapa sesuatu bekerja, kamu bisa menulis kode di bahasa apa pun. Jadi programmer bukan soal lomba hafalan, tapi soal bagaimana menyelesaikan masalah dengan logika yang tepat.</p>

              <p>Kalau kamu sedang belajar dan merasa kesulitan menghafal semua sintaks, santai aja. Fokuslah untuk membangun fondasi logika dan pemahaman dasar yang kuat. Pahami alur program dan cara berpikir sebagai seorang developer. Sisanya? Bisa kamu pelajari sambil jalan 😉</p>

            `,
    image: "./assets/images/blog-3.jpg",
  },
  {
    title: "Mengenalkan Python ke Adik-Adik SMA",
    content: `
              <p>Beberapa waktu lalu, saya mendapat kesempatan untuk ikut serta dalam kegiatan pengabdian masyarakat yang diselenggarakan oleh program studi saya. Kegiatan ini bertujuan untuk memperkenalkan dasar-dasar bahasa pemrograman Python kepada siswa-siswi MAN 1 Tangerang Selatan. Sebuah pengalaman yang sederhana, tapi penuh pelajaran dan kesan.</p>

              <p>Sebagai mahasiswa ilmu komputer, rasanya senang sekali bisa berbagi sedikit ilmu yang sudah saya pelajari di kampus kepada adik-adik yang mungkin baru pertama kali mengenal dunia koding. Dalam kegiatan ini, saya tidak bertugas sebagai pemateri utama, tapi peran saya cukup penting, yakni sebagai pendamping praktik. Saat sesi praktik dimulai, saya bersama teman-teman lain bertugas untuk membantu para siswa jika mengalami kendala saat menulis atau menjalankan kode.</p>

              <p>Ternyata, menjadi “kakak pendamping” di sesi coding itu nggak semudah kelihatannya. Ada siswa yang belum familiar sama sekali dengan laptop atau IDE, ada yang bingung kenapa programnya nggak jalan, padahal cuma karena lupa tanda titik dua. Tapi di situlah letak keseruannya. Setiap siswa punya tantangannya masing-masing, dan kami berusaha hadir untuk membantu sebisa mungkin.</p>

              <p>Saya juga belajar banyak hal dari pengalaman ini. Misalnya, bagaimana menyampaikan solusi dengan bahasa yang lebih mudah dipahami, atau sabar saat harus menjelaskan hal yang sama berulang-ulang. Bahkan, saya jadi sadar bahwa memahami materi belum tentu sama dengan mampu mengajarkannya.</p>

              <p>Melalui kegiatan ini, saya jadi makin yakin bahwa berbagi ilmu itu bukan cuma soal memberi, tapi juga soal belajar kembali dari sudut pandang yang berbeda. Pengabdian masyarakat bukan berarti kita yang lebih tahu, lalu membagikan semua yang kita bisa. Tapi lebih dari itu, tentang hadir, mendampingi, dan bertumbuh bersama.</p>

              <p>Semoga ke depan akan ada lebih banyak kegiatan seperti ini. Karena ilmu yang dibagikan tak pernah berkurang, dan justru membuat kita semakin kaya akan pengalaman dan perspektif baru.</p>
            `,
    image: "./assets/images/blog-4.jpg",
  },
  {
    title: "Mengakses Lokasi dan Kamera Target via Link",
    content: `
              <p>Dalam dunia keamanan siber, tidak semua serangan dilakukan lewat coding yang rumit atau brute force terhadap sistem. Justru, sering kali celah paling besar justru berasal dari manusia itu sendiri—alias human error. Inilah mengapa social engineering jadi salah satu teknik yang sangat powerful, dan juga berbahaya kalau jatuh ke tangan yang salah.</p>

              <p>Sebagai mahasiswa yang tertarik di bidang cybersecurity, saya mencoba sebuah eksperimen ethical hacking menggunakan tool bernama Stormbreaker. Tool ini memungkinkan kita membuat sebuah link berisi skrip <i>payload</i> yang, jika dibuka oleh target, bisa memberikan informasi seperti lokasi, foto dari kamera, dan lain-lain. Tapi ingat—ini semua saya lakukan hanya dalam konteks simulasi, dengan izin penuh dari target.</p>

              <p>Simulasi Dimulai: Merancang Serangan yang "Ramah"</p>
              <p>Skenarionya sederhana: saya meminta seorang teman untuk ikut berpartisipasi dalam simulasi ini. Saya menjelaskan bahwa saya sedang belajar social engineering dan ingin mencoba sebuah teknik phishing berbasis link. Dengan persetujuan penuh, saya kemudian mulai membuat link menggunakan Stormbreaker.</p>

              <p>Setelah tool disiapkan dan server dijalankan, saya mendapat URL yang tampak cukup meyakinkan. Saya kemudian membungkusnya agar lebih rapi menggunakan layanan pemendek URL Bitly. Lalu saya kirimkan pesan sederhana untuk memanipulasi target korban dengan pesan seperti ini: <i>"Eh bro, bisa bantu vote desain ini sebentar? Lagi ikut lomba kampus nih hehe, ini link nya bit.ly/LombaPoster2024"</i></p>

              <p>Apa yang Terjadi Setelah Link Dibuka?</p>
              <p>Begitu teman saya mengklik link tersebut, saya langsung bisa melihat log aktivitas di terminal Stormbreaker. Lokasi perangkatnya terdeteksi, informasi sistemnya muncul, bahkan kamera sempat aktif dan menangkap gambar.</p>

              <p>Ini bukan tentang mengintimidasi atau mencuri data, tapi lebih ke menunjukkan betapa mudahnya seseorang bisa terjebak dalam jebakan yang tampak sepele. Hanya dengan satu klik, informasi yang sangat pribadi bisa diakses oleh orang lain.</p>

              <p>Pengalaman ini membuat saya semakin paham bahwa belajar cybersecurity tidak cukup hanya teori. Tapi juga perlu merasakan langsung, dengan tetap menjaga etika, batasan, dan rasa tanggung jawab.</p>

              <p>Stormbreaker hanyalah satu dari sekian banyak alat yang bisa digunakan dalam dunia ethical hacking. Tapi pengalaman belajar yang saya dapat dari simulasi kecil ini sangat besar dampaknya. Saya jadi lebih memahami cara kerja penyerang, dan yang terpenting: bagaimana kita bisa melindungi diri dan orang-orang di sekitar kita dari ancaman seperti ini.</p>

              `,
    image: "./assets/images/blog-5.jpg",
  },
  {
    title: "Agen AI Tak Terkalahkan dengan Algoritma Minimax",
    content: `
              <p>Saya pertama kali mengenal algoritma <i>minimax</i> saat mengikuti mata kuliah Artificial Intelligence di kampus. Saat itu, kami belajar bagaimana komputer bisa mengambil keputusan optimal dalam permainan dua pemain, seperti catur atau Tic Tac Toe. Dari situ, saya tertarik mencoba menerapkannya secara langsung dalam sebuah proyek kecil yang sederhana namun cukup menantang: membuat agen AI yang tak terkalahkan dalam permainan Tic Tac Toe.</p>

              <p>Tic Tac Toe memang kelihatannya sepele, papan 3x3, dua simbol, dan aturan yang sangat sederhana. Tapi justru karena kesederhanaannya itulah, game ini cocok sebagai latihan implementasi algoritma minimax. Algoritma ini bekerja dengan mengevaluasi semua kemungkinan langkah dari posisi sekarang hingga akhir permainan, lalu memilih langkah terbaik berdasarkan asumsi bahwa lawan juga akan bermain secara optimal. Intinya, AI akan mencari cara untuk memaksimalkan peluang menang, sambil meminimalkan kemungkinan kalah.</p>

              <p>Saya membangun game ini sepenuhnya menggunakan HTML, CSS, dan JavaScript, jadi semuanya berjalan langsung di browser tanpa perlu backend atau instalasi tambahan. Permainan Tic Tac Toe yang sederhana menjadi media yang pas untuk mengimplementasikan minimax, karena skenario langkah-langkahnya terbatas dan bisa diolah secara rekursif.</p>

              <p>Setelah AI selesai, saya mencobanya sendiri. Hasilnya? AI ini benar-benar sulit dikalahkan. Bahkan ketika saya bermain sebaik mungkin, hasil terbaik saya hanya seri. Proyek ini membuat saya semakin menghargai kekuatan logika dalam pengembangan game dan algoritma pencarian keputusan. Kalau kamu penasaran dan ingin mencobanya sendiri, kamu bisa memainkan gamenya langsung <a href="https://tic-tac-toe-tau-opal.vercel.app/" target="_blank" style="color: hsl(45, 100%, 72%);">disini</a>.</p>
              `,
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
