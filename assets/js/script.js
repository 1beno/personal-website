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
    contact_send: "Kirim ke WhatsApp",
    contact_sending: "Mengirim...",

    // NAVBAR
    nav_about: "Tentang",
    nav_resume: "Resume",
    nav_portfolio: "Portofolio",
    nav_blog: "Blog",
    nav_contact: "Kontak",

    // PORTFOLIO DETAIL
    portfolio_detail_title: "Detail Portfolio",
    portfolio_description: "Deskripsi",
    portfolio_tech: "Teknologi",
    portfolio_features: "Fitur Utama",
    portfolio_view: "Lihat Portfolio",
    portfolio_back: "Kembali ke Portfolio",

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
    contact_send: "Send to WhatsApp",
    contact_sending: "Sending...",

    // NAVBAR
    nav_about: "About",
    nav_resume: "Resume",
    nav_portfolio: "Portfolio",
    nav_blog: "Blog",
    nav_contact: "Contact",

    // PORTFOLIO DETAIL
    portfolio_detail_title: "Portfolio Detail",
    portfolio_description: "Description",
    portfolio_tech: "Technology",
    portfolio_features: "Key Features",
    portfolio_view: "View Portfolio",
    portfolio_back: "Back to Portfolio",

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

  // Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  localStorage.setItem("lang", lang);

  // Update portfolio detail jika sedang aktif
  updatePortfolioDetailLanguage();
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

    // Remove active class from all navigation links first
    for (let k = 0; k < navigationLinks.length; k++) {
      navigationLinks[k].classList.remove("active");
    }

    // Add active class to clicked navigation link
    navigationLinks[i].classList.add("active");

    // Handle page switching
    for (let j = 0; j < pages.length; j++) {
      if (pages[j].dataset.page === targetPage) {
        pages[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
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
    title: "Pengalaman Jadi Asisten Praktikum OOP Java",
    content: `
              <p>Saya mau cerita sedikit tentang salah satu pengalaman paling seru (dan kadang bikin pusing) selama kuliah: jadi asisten praktikum (asprak) di mata kuliah <i>Object-Oriented Programming</i> alias OOP Java.</p>

              <p>Jujur, awalnya saya nggak nyangka bakal dapet kesempatan ini. Dulu waktu masih duduk di bangku semester awal, saya juga pernah duduk di kursi peserta praktikum, ngerjain soal-soal OOP yang kadang bikin kepala pusing. Tapi siapa sangka, sekarang bisa bantuin teman-teman angkatan di bawah saya buat ngerti konsep-konsep OOP kayak <i>encapsulation, inheritance, polymorphism, abstraction</i> dan kawan-kawannya.</p>

              <p>Tugas jadi asprak itu lumayan beragam. Mulai dari bantuin mahasiswa yang kebingungan pas ngerjain modul, ngejelasin materi yang belum mereka pahami, sampai koreksi laporan dan kode program mereka. Kadang harus jawab pertanyaan yang sama berkali-kali, tapi ya namanya juga belajar, saya juga dulu sering nanya hal yang sama ke asprak sy dulu😅</p>

              <p>Yang paling saya suka dari jadi asprak adalah momen ketika mahasiswa yang awalnya nggak paham, tiba-tiba bilang, "<i>Ohhh, jadi kayak gitu toh!</i>" Rasanya puas banget bisa bantu mereka 'ngeh' sama konsep yang sebelumnya kerasa abstrak.</p>

              <p>Tapi ya nggak selalu mulus juga. Ada kalanya capek banget karena harus ngoreksi banyak laporan sambil tetap ngejar deadline tugas kuliah sendiri. Belum lagi kalau ada mahasiswa yang suka ngeluh, padahal belum usaha maksimal. Tapi dari situ saya belajar gimana caranya sabar, ngatur waktu, dan berkomunikasi dengan baik.</p>

              <p>Intinya, jadi asisten praktikum itu pengalaman yang ngasih saya banyak pelajaran, bukan cuma soal ngoding, tapi juga soal kerja tim, tanggung jawab, dan gimana jadi orang yang bisa diandalkan. Dan kalau ditanya, "Mau lagi nggak?" Jawabannya: MAU! Karena meskipun capek, tapi seru dan bener-bener bikin saya berkembang.</p>

              <p>Sekian dari saya, tetap semangat!!!. Jangan cuma jago koding, tapi juga jago bantu orang lain ngerti. Karena ilmu itu makin mantap justru saat kita bisa ngajarin ke orang lain 😉. Terima kasih!</p>              
              `,
    image: "./assets/images/blog-8.jpg",
  },
  {
    title: "Menang Proyek Terbaik di CSXHIBIT 2024/2025!",
    content: `
              <p>Beberapa waktu lalu, saya dan tim kecil saya baru aja menyelesaikan salah satu proyek paling seru selama kuliah: sistem deteksi asap dan api berbasis IoT. Proyek ini kami buat sebagai tugas besar untuk mata kuliah Mikrokontroller dan Internet of Things (IoT) di semester 6.</p>
              
              <p>Awalnya sih kami cuma ingin bikin sesuatu yang fungsional dan bisa bermanfaat, tapi ternyata di luar dugaan, proyek ini malah terpilih sebagai Proyek Terbaik di acara CSXHIBIT, yaitu pameran tugas besar mahasiswa jurusan Ilmu Komputer Universitas Pertamina. Jujur, rasanya campur aduk antara kaget, senang, dan bangga. Proyek ini sendiri pakai sensor MQ2 dan flame sensor yang dipasang di ESP32, lalu terhubung ke sistem berbasis web untuk menampilkan notifikasi secara real-time kalau terdeteksi asap atau api. Kami juga tambahkan fitur lokasi pakai Google Maps supaya pengguna bisa tahu titik kejadian kebakaran secara langsung.</p>

              <p>Selama ngerjain proyek ini, kami ngalamin banyak trial-error, mulai dari sensor yang terlalu sensitif sampai debugging sistem yang kadang bikin frustrasi. Tapi dari situ juga kami belajar banyak hal, terutama pentingnya kerja sama tim dan komunikasi. Kemenangan ini jadi semacam bukti bahwa kerja keras, walaupun penuh drama, bisa ngasih hasil yang manis. Dan yang paling penting, proyek ini nggak berhenti di sini, kami masih punya banyak ide untuk pengembangannya ke depan. Jadi ya, semoga ini bukan akhir dari perjalanan, tapi justru langkah awal buat bikin lebih banyak karya teknologi yang bermanfaat.</p>
              `,
    image: "./assets/images/blog-7a.jpg",
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
    title: "Agen AI Tak Terkalahkan dengan Algoritma Minimax",
    content: `
              <p>Saya pertama kali mengenal algoritma <i>minimax</i> saat mengikuti mata kuliah Artificial Intelligence di kampus. Saat itu, kami belajar bagaimana komputer bisa mengambil keputusan optimal dalam permainan dua pemain, seperti catur atau Tic Tac Toe. Dari situ, saya tertarik mencoba menerapkannya secara langsung dalam sebuah proyek kecil yang sederhana namun cukup menantang: membuat agen AI yang tak terkalahkan dalam permainan Tic Tac Toe.</p>

              <p>Tic Tac Toe memang kelihatannya sepele, papan 3x3, dua simbol, dan aturan yang sangat sederhana. Tapi justru karena kesederhanaannya itulah, game ini cocok sebagai latihan implementasi algoritma minimax. Algoritma ini bekerja dengan mengevaluasi semua kemungkinan langkah dari posisi sekarang hingga akhir permainan, lalu memilih langkah terbaik berdasarkan asumsi bahwa lawan juga akan bermain secara optimal. Intinya, AI akan mencari cara untuk memaksimalkan peluang menang, sambil meminimalkan kemungkinan kalah.</p>

              <p>Saya membangun game ini sepenuhnya menggunakan HTML, CSS, dan JavaScript, jadi semuanya berjalan langsung di browser tanpa perlu backend atau instalasi tambahan. Permainan Tic Tac Toe yang sederhana menjadi media yang pas untuk mengimplementasikan minimax, karena skenario langkah-langkahnya terbatas dan bisa diolah secara rekursif.</p>

              <p>Setelah AI selesai, saya mencobanya sendiri. Hasilnya? AI ini benar-benar sulit dikalahkan. Bahkan ketika saya bermain sebaik mungkin, hasil terbaik saya hanya seri. Proyek ini membuat saya semakin menghargai kekuatan logika dalam pengembangan game dan algoritma pencarian keputusan. Kalau kamu penasaran dan ingin mencobanya sendiri, kamu bisa memainkan gamenya langsung <a href="https://tic-tac-toe-tau-opal.vercel.app/" target="_blank" style="color: hsl(45, 100%, 72%);">disini</a>.</p>
              `,
    image: "./assets/images/blog-6.jpg",
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

// WHATSAPP FORM FUNCTIONALITY
const whatsappForm = document.getElementById("whatsapp-form");

// PENTING: Ganti dengan nomor WhatsApp Anda (format: 62XXXXXXXXXX tanpa tanda +)
// Contoh: untuk nomor 081234567890, tulis: 6281234567890
const WHATSAPP_NUMBER = "6282190919659"; // <-- GANTI DENGAN NOMOR WA ANDA

if (whatsappForm) {
  whatsappForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Ambil data dari form
    const nameInput = whatsappForm.querySelector('input[name="fullname"]');
    const messageInput = whatsappForm.querySelector('textarea[name="message"]');

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (name && message) {
      // Disable button dan tambah loading state
      const submitBtn = whatsappForm.querySelector("[data-form-btn]");
      const submitText = submitBtn.querySelector("span");
      const originalText = submitText.textContent;

      // Get current language
      const currentLang = localStorage.getItem("lang") || "id";
      const loadingText =
        translations[currentLang].contact_sending || "Mengirim...";

      submitBtn.setAttribute("disabled", "");
      submitText.textContent = loadingText;

      // Format pesan WhatsApp
      const whatsappMessage = `Halo, saya ${name}.%0A%0A${message}`;

      // URL WhatsApp
      const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

      // Delay sedikit untuk smooth UX
      setTimeout(() => {
        // Buka WhatsApp di tab baru
        window.open(whatsappURL, "_blank");

        // Reset form setelah submit
        setTimeout(() => {
          whatsappForm.reset();
          whatsappForm.classList.remove("success");
          submitText.textContent = originalText;

          // Re-enable validation untuk form kosong
          if (!whatsappForm.checkValidity()) {
            submitBtn.setAttribute("disabled", "");
          }
        }, 1000);
      }, 300);
    }
  });
}

// PORTFOLIO DETAIL FUNCTIONALITY
const portfolioLinks = document.querySelectorAll(".project-item > a");
const portfolioDetailTab = document.querySelector(
  '[data-page="portfolio-detail"]'
);
const portfolioDetailTitle = document.getElementById("portfolio-detail-title");
const portfolioDetailContent = document.getElementById(
  "portfolio-detail-content"
);
const backToPortfolioBtn = document.getElementById("back-to-portfolio");
const portfolioTab = document.querySelector('[data-page="portfolio"]');
const viewPortfolioBtn = document.getElementById("view-portfolio-btn");

// Variable global untuk menyimpan portfolio yang sedang aktif
let currentPortfolioInfo = null;
let currentPortfolioUrl = null;

// Fungsi untuk update bahasa portfolio detail
function updatePortfolioDetailLanguage() {
  // Cek apakah halaman portfolio detail sedang aktif
  const portfolioDetailPage = document.querySelector(
    '[data-page="portfolio-detail"]'
  );
  if (
    portfolioDetailPage &&
    portfolioDetailPage.classList.contains("active") &&
    currentPortfolioInfo
  ) {
    // Update konten dengan bahasa baru
    const currentLang = localStorage.getItem("lang") || "id";
    const data = currentPortfolioInfo[currentLang];

    if (data) {
      // Update konten portfolio detail
      document.getElementById("portfolio-detail-name").textContent = data.title;
      document.getElementById("portfolio-detail-category").textContent =
        data.category;
      document.getElementById("portfolio-detail-desc").textContent =
        data.description;
      document.getElementById("portfolio-detail-image").src = data.image;
      document.getElementById("portfolio-detail-image").alt = data.title;

      // Update tech stack
      const techList = document.getElementById("portfolio-detail-tech-list");
      techList.innerHTML = data.tech
        .map((tech) => `<span class="tech-tag">${tech}</span>`)
        .join("");

      // Update features
      const featuresList = document.getElementById(
        "portfolio-detail-features-list"
      );
      featuresList.innerHTML = data.features
        .map((feature) => `<li>${feature}</li>`)
        .join("");

      // Set URL untuk tombol view
      const viewBtn = document.getElementById("view-portfolio-btn");
      if (viewBtn) {
        viewBtn.onclick = () => window.open(data.url, "_blank");
      }
    }
  }
}

// Re-initialize portfolio links setelah DOM loaded
document.addEventListener("DOMContentLoaded", () => {
  // Re-select portfolio links setelah semua elemen dimuat
  const updatedPortfolioLinks = document.querySelectorAll(".project-item > a");
  initializePortfolioLinks(updatedPortfolioLinks);

  // Juga inisialisasi portfolio links yang sudah ada
  portfolioLinks.forEach((link) => {
    // Remove existing event listeners first
    const newLink = link.cloneNode(true);
    link.parentNode.replaceChild(newLink, link);
  });

  // Re-select dan re-attach event listeners
  const allPortfolioLinks = document.querySelectorAll(".project-item > a");
  initializePortfolioLinks(allPortfolioLinks);
});

// Fungsi inisialisasi portfolio links
function initializePortfolioLinks(links) {
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Ambil data dari elemen
      const projectItem = this.closest(".project-item");
      const titleElement = this.querySelector(".project-title");
      const title = titleElement.textContent.trim().replace(/\s+/g, " "); // Normalize whitespace
      const category = this.querySelector(".project-category").textContent;
      const imageUrl = this.querySelector("img").src;
      const projectUrl = this.getAttribute("data-portfolio-url") || this.href;

      // Cari data portfolio berdasarkan title atau buat mapping
      let portfolioKey = getPortfolioKey(title);
      let portfolioInfo = portfolioData[portfolioKey];

      if (!portfolioInfo) {
        // Fallback jika data tidak ditemukan
        portfolioInfo = createFallbackData(
          title,
          category,
          imageUrl,
          projectUrl
        );
      }

      showPortfolioDetail(portfolioInfo, projectUrl);
    });
  });
}

// Data portfolio dengan deskripsi lengkap
const portfolioData = {
  "ai-powered-pdf-assessment": {
    id: {
      title: "AI-Powered PDF Assessment System",
      category: "AI/ML",
      description:
        "Sistem penilaian otomatis untuk tugas mahasiswa dalam format PDF, menggunakan AI dan NLP untuk menganalisis kualitas jawaban, grammar, struktur, dan referensi, serta menghasilkan feedback dan nilai akhir secara efisien.",
      tech: [
        "Python",
        "NLP",
        "OpenAI API",
        "Flask",
        "PyMuPDF",
        "HTML",
        "Tailwind CSS",
      ],
      features: [
        "Ekstraksi teks otomatis dari file PDF",
        "Analisis grammar dan struktur jawaban",
        "Kustomisasi parameter penilaian",
        "Pencocokan makna jawaban dengan soal",
        "Feedback otomatis dan laporan penilaian",
      ],
      image: "./assets/images/project-16.png",
      url: "https://github.com/gbennnn/grader-ai",
    },
    en: {
      title: "AI-Powered PDF Assessment System",
      category: "AI/ML",
      description:
        "An automated assessment system for student assignments in PDF format, utilizing AI and NLP to analyze answer quality, grammar, structure, and references, while efficiently generating feedback and final grades.",
      tech: [
        "Python",
        "NLP",
        "OpenAI API",
        "Flask",
        "PyMuPDF",
        "HTML",
        "Tailwind CSS",
      ],
      features: [
        "Automatic text extraction from PDF files",
        "Grammar and structure analysis of answers",
        "Customizable assessment parameters",
        "Semantic matching of answers with questions",
        "Automatic feedback and assessment reports",
      ],
      image: "./assets/images/project-16.png",
      url: "https://github.com/gbennnn/grader-ai",
    },
  },

  "sentiment-analysis": {
    id: {
      title: "Sentiment Analysis on APERTI BUMN University Reviews",
      category: "AI/ML",
      description:
        "Proyek ini bertujuan untuk mengklasifikasikan sentimen dari ulasan pengguna terhadap kampus-kampus APERTI BUMN menggunakan pendekatan machine learning. Label sentimen diperoleh melalui API OpenAI, kemudian data diproses dan diseimbangkan untuk membangun model klasifikasi yang akurat.",
      tech: [
        "Python",
        "Scikit-learn",
        "imbalanced-learn (SMOTE)",
        "OpenAI API",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
      ],
      features: [
        "Preprocessing teks lengkap (normalisasi, tokenisasi, dll)",
        "Labeling otomatis menggunakan OpenAI GPT API",
        "Penanganan data tidak seimbang dengan SMOTE",
        "Pembandingan model SVM, Random Forest, dan Logistic Regression",
        "Evaluasi performa sebelum dan sesudah tuning",
      ],
      image: "./assets/images/project-15.png",
      url: "https://github.com/gbennnn/sentiment-analysis-aperti-bumn",
    },
    en: {
      title: "Sentiment Analysis on APERTI BUMN University Reviews",
      category: "AI/ML",
      description:
        "This project aims to classify the sentiment of user reviews for APERTI BUMN universities using machine learning approaches. Sentiment labels are obtained through the OpenAI API, then the data is processed and balanced to build an accurate classification model.",
      tech: [
        "Python",
        "Scikit-learn",
        "imbalanced-learn (SMOTE)",
        "OpenAI API",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
      ],
      features: [
        "Complete text preprocessing (normalization, tokenization, etc.)",
        "Automatic labeling using OpenAI GPT API",
        "Handling imbalanced data with SMOTE",
        "Comparison of SVM, Random Forest, and Logistic Regression models",
        "Performance evaluation before and after tuning",
      ],
      image: "./assets/images/project-15.png",
      url: "https://github.com/gbennnn/sentiment-analysis-aperti-bumn",
    },
  },

  "fire-and-smoke-detector": {
    id: {
      title: "IoT - Fire and Smoke Detector System",
      category: "Lainnya",
      description:
        "Sistem ini dirancang untuk mendeteksi keberadaan asap dan api secara real-time menggunakan sensor MQ2 dan flame sensor yang terintegrasi dengan mikrokontroler ESP32. Data deteksi ditampilkan melalui antarmuka web responsif, dilengkapi dengan alarm peringatan dan visualisasi lokasi menggunakan Google Maps. Sistem ini bertujuan untuk mendukung mitigasi dini kebakaran pada skala kecil hingga menengah dengan pendekatan berbasis Internet of Things.",
      tech: [
        "Microcontroller",
        "MQ2 Sensor",
        "Flame Sensor",
        "ESP32",
        "Micropython",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      features: [
        "<b>Deteksi Real-Time:</b> Menggunakan sensor untuk memantau asap dan api secara langsung.",
        "<b>Peringatan Otomatis:</b> Mengaktifkan buzzer sebagai alarm saat terdeteksi kondisi berbahaya.",
        "<b>Antarmuka Web Responsif:</b> Menampilkan status sensor dan grafik deteksi melalui dashboard web.",
        "<b>Integrasi Lokasi:</b> Menyediakan visualisasi lokasi melalui Google Maps saat kebakaran terdeteksi.",
      ],
      image: "./assets/images/project-14.png",
      url: "https://github.com/gbennnn/fire-and-smoke-detector",
    },
    en: {
      title: "IoT - Fire and Smoke Detector System",
      category: "Others",
      description:
        "This system is designed to detect the presence of smoke and fire in real-time using MQ2 and flame sensors integrated with an ESP32 microcontroller. Detection data is displayed through a responsive web interface, complete with warning alarms and location visualization using Google Maps. The system aims to support early fire mitigation on a small to medium scale with an Internet of Things-based approach.",
      tech: [
        "Microcontroller",
        "MQ2 Sensor",
        "Flame Sensor",
        "ESP32",
        "Micropython",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      features: [
        "<b>Real-Time Detection:</b> Monitors smoke and fire conditions directly using sensors.",
        "<b>Automatic Alerts:</b> Activates a buzzer as an alarm when dangerous conditions are detected.",
        "<b>Responsive Web Interface:</b> Displays sensor status and detection graphs through a web dashboard.",
        "<b>Location Integration:</b> Provides location visualization via Google Maps when a fire is detected.",
      ],
      image: "./assets/images/project-14.png",
      url: "https://github.com/gbennnn/fire-and-smoke-detector",
    },
  },

  stegcrypt: {
    id: {
      title:
        "Secure Image-based Message Encryption using AES and Steganography",
      category: "Cyber Security",
      description:
        "Aplikasi berbasis web yang mengenkripsi pesan teks menggunakan algoritma AES-128 (Rijndael) dan menyisipkan pesan terenkripsi ke dalam gambar PNG menggunakan teknik steganografi LSB (Least Significant Bit). Proyek ini menggabungkan kriptografi dan penyembunyian data untuk menjaga kerahasiaan pesan saat dikirim.",
      tech: ["Python", "Flask", "PIL", "Tailwind CSS", "AES-128", "JavaScript"],
      features: [
        "<b>AES-128 Encryption:</b> Mengamankan pesan teks menjadi ciphertext menggunakan algoritma Rijndael",
        "<b>Steganographic Embedding:</b> Menyembunyikan pesan ke dalam piksel gambar PNG.",
        "<b>Decryption Support:</b> Mengekstrak dan mendekripsi pesan tersembunyi dengan kunci yang sesuai.",
        "<b>User-Friendly Interface:</b> Pengguna dapat dengan mudah mengunggah gambar dan menginput pesan.",
      ],
      image: "./assets/images/project-13.png",
      url: "https://stegcrypt.onrender.com",
    },
    en: {
      title:
        "Secure Image-based Message Encryption using AES and Steganography",
      category: "Cyber Security",
      description:
        "A web-based application that encrypts textual messages using the AES-128 (Rijndael) algorithm and embeds the encrypted data into PNG images using Least Significant Bit (LSB) steganography. This project ensures secure message transmission by combining cryptography and data hiding techniques.",
      tech: ["Python", "Flask", "PIL", "Tailwind CSS", "AES-128", "JavaScript"],
      features: [
        "<b>AES-128 Encryption:</b> Converts plaintext into secure ciphertext using Rijndael algorithm.",
        "<b>Steganographic Embedding:</b> Hides encrypted messages inside PNG image pixels.",
        "<b>Decryption Support:</b> Extracts and decrypts hidden messages using the correct key.",
        "<b>User-Friendly Interface:</b> Simple web interface to upload images and enter messages.",
      ],
      image: "./assets/images/project-13.png",
      url: "https://stegcrypt.onrender.com",
    },
  },
  "topic-modeling": {
    id: {
      title: "Topic Modelling with LDA",
      category: "Data Science",
      description:
        "Proyek analisis topik menggunakan algoritma Latent Dirichlet Allocation (LDA) untuk mengidentifikasi tema-tema utama dalam kumpulan dokumen teks. Implementasi menggunakan Python dengan library scikit-learn dan NLTK.",
      tech: [
        "Python",
        "Scikit-learn",
        "NLTK",
        "Pandas",
        "Matplotlib",
        "Jupyter Notebook",
      ],
      features: [
        "Preprocessing teks (tokenization, stopword removal)",
        "Implementasi algoritma LDA untuk topic modeling",
        "Visualisasi distribusi topik",
        "Analisis kata kunci per topik",
        "Export hasil dalam berbagai format",
        "Dokumentasi lengkap dalam Jupyter Notebook",
      ],
      image: "./assets/images/project-10.jpg",
      url: "https://github.com/gbennnn/topic-modeling-bumn-campus",
    },
    en: {
      title: "Topic Modelling with LDA",
      category: "Data Science",
      description:
        "A topic analysis project using Latent Dirichlet Allocation (LDA) algorithm to identify main themes in text document collections. Implementation using Python with scikit-learn and NLTK libraries.",
      tech: [
        "Python",
        "Scikit-learn",
        "NLTK",
        "Pandas",
        "Matplotlib",
        "Jupyter Notebook",
      ],
      features: [
        "Text preprocessing (tokenization, stopword removal)",
        "LDA algorithm implementation for topic modeling",
        "Topic distribution visualization",
        "Keyword analysis per topic",
        "Export results in various formats",
        "Complete documentation in Jupyter Notebook",
      ],
      image: "./assets/images/project-10.jpg",
      url: "https://github.com/gbennnn/topic-modeling-bumn-campus",
    },
  },
  "des-encryption": {
    id: {
      title: "A Simple Data Encryption Standard",
      category: "Cyber Security",
      description:
        "Implementasi sederhana dari algoritma Data Encryption Standard (DES) untuk pembelajaran konsep kriptografi.",
      tech: ["Python", "Cryptography", "NumPy", "Tkinter"],
      features: [
        "Implementasi algoritma DES dari scratch",
        "Interface GUI untuk mudah digunakan",
        "Support enkripsi teks",
        "Dokumentasi algoritma yang lengkap",
      ],
      image: "./assets/images/project-11.jpg",
      url: "https://github.com/gbennnn/data-encryption-standard",
    },
    en: {
      title: "A Simple Data Encryption Standard",
      category: "Cyber Security",
      description:
        "A simple implementation of Data Encryption Standard (DES) algorithm for learning cryptography concepts.",
      tech: ["Python", "Cryptography", "NumPy", "Tkinter"],
      features: [
        "DES algorithm implementation from scratch",
        "GUI interface for easy use",
        "Text encryption support",
        "Complete algorithm documentation",
      ],
      image: "./assets/images/project-11.jpg",
      url: "https://github.com/gbennnn/data-encryption-standard",
    },
  },
  "open-data": {
    id: {
      title: "Open Data Contributions",
      category: "Data Science",
      description:
        "Kumpulan dataset yang saya kontribusikan ke platform Kaggle untuk keperluan penelitian dan pembelajaran. Dataset mencakup berbagai domain seperti pendidikan, teknologi, dan sosial.",
      tech: ["Python", "Pandas", "Scraping", "CSV", "JSON"],
      features: [
        "Dataset berkualitas tinggi dan terstruktur",
        "Dokumentasi metadata yang lengkap",
        "Format data yang standar dan mudah digunakan",
        "Covering berbagai domain penelitian",
        "Regular updates dan maintenance",
        "Community feedback dan improvement",
      ],
      image: "./assets/images/project-12.jpg",
      url: "https://www.kaggle.com/onydrive/datasets",
    },
    en: {
      title: "Open Data Contributions",
      category: "Data Science",
      description:
        "Collection of datasets I contributed to Kaggle platform for research and learning purposes. Datasets cover various domains such as education, technology, and social.",
      tech: ["Python", "Pandas", "Scraping", "CSV", "JSON"],
      features: [
        "High-quality and structured datasets",
        "Complete metadata documentation",
        "Standard and easy-to-use data formats",
        "Covering various research domains",
        "Regular updates and maintenance",
        "Community feedback and improvement",
      ],
      image: "./assets/images/project-12.jpg",
      url: "https://www.kaggle.com/onydrive/datasets",
    },
  },
  "countdown-timer": {
    id: {
      title: "Countdown Timer",
      category: "Web Dev",
      description:
        "Web statis sederhana countdown timer yang responsif dan interaktif.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Interface yang responsif dan modern",
        "Animasi smooth dan menarik",
      ],
      image: "./assets/images/project-1.png",
      url: "https://countdown-timer-iambeno.vercel.app/",
    },
    en: {
      title: "Countdown Timer",
      category: "Web Dev",
      description:
        "A responsive and interactive web countdown timer application.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Responsive and modern interface",
        "Smooth and attractive animations",
      ],
      image: "./assets/images/project-1.png",
      url: "https://countdown-timer-iambeno.vercel.app/",
    },
  },
  "kedai-kopi": {
    id: {
      title: "Website Kedai Kopi",
      category: "Web Dev",
      description:
        "Website company profile untuk kedai kopi dengan desain yang menarik dan user-friendly. Menampilkan menu, galeri, dan informasi kontak dengan animasi yang smooth.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Responsive design untuk semua device",
        "Interactive menu dengan filter kategori",
        "Galeri foto",
        "Smooth scrolling",
      ],
      image: "./assets/images/project-2.png",
      url: "https://kedai-kopi-iambeno.vercel.app/",
    },
    en: {
      title: "Coffee Shop Website",
      category: "Web Dev",
      description:
        "A company profile website for coffee shop with attractive and user-friendly design. Features menu, gallery, and contact information with smooth animations.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Responsive design for all devices",
        "Interactive menu with category filter",
        "Photo gallery",
        "Smooth scrolling",
      ],
      image: "./assets/images/project-2.png",
      url: "https://kedai-kopi-iambeno.vercel.app/",
    },
  },
  "explore-indonesia": {
    id: {
      title: "Explore Indonesia",
      category: "Web Dev",
      description:
        "Website Landing Page untuk menjelajahi destinasi wisata di Indonesia. Menampilkan informasi lengkap tentang tempat wisata, budaya, dan kuliner khas daerah.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Interactive map dengan marker destinasi",
        "Slideshow foto destinasi wisata",
        "Detail informasi setiap destinasi",
      ],
      image: "./assets/images/project-3.png",
      url: "https://travel-lilac-three.vercel.app/",
    },
    en: {
      title: "Explore Indonesia",
      category: "Web Dev",
      description:
        "A travel landing page website to explore tourist destinations in Indonesia. Features complete information about tourist spots, culture, and local cuisine.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Interactive map with destination markers",
        "Tourist destination photo slideshow",
        "Detailed information for each destination",
      ],
      image: "./assets/images/project-3.png",
      url: "https://travel-lilac-three.vercel.app/",
    },
  },
  "minimax-tictactoe": {
    id: {
      title: "Minimax Algorithm Tic Tac Toe",
      category: "AI/ML",
      description:
        "Implementasi algoritma Minimax untuk game Tic Tac Toe yang tidak terkalahkan. AI menggunakan algoritma Minimax dengan Alpha-Beta Pruning untuk optimasi performa.",
      tech: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "Minimax Algorithm",
        "Alpha-Beta Pruning",
      ],
      features: [
        "AI yang tidak pernah kalah",
        "Implementasi Minimax dengan Alpha-Beta Pruning",
        "Smooth animations dan effects",
        "Responsive design",
      ],
      image: "./assets/images/project-7.png",
      url: "https://tic-tac-toe-tau-opal.vercel.app/",
    },
    en: {
      title: "Minimax Algorithm Tic Tac Toe",
      category: "AI/ML",
      description:
        "Implementation of Minimax algorithm for unbeatable Tic Tac Toe game. AI uses Minimax algorithm with Alpha-Beta Pruning for performance optimization.",
      tech: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "Minimax Algorithm",
        "Alpha-Beta Pruning",
      ],
      features: [
        "Unbeatable AI",
        "Minimax implementation with Alpha-Beta Pruning",
        "Smooth animations and effects",
        "Responsive design",
      ],
      image: "./assets/images/project-7.png",
      url: "https://tic-tac-toe-tau-opal.vercel.app/",
    },
  },
  "otomatisasi-penjualan": {
    id: {
      title: "Otomatisasi Penjualan Kafe",
      category: "Lainnya",
      description:
        "Sistem otomatisasi penjualan untuk kafe yang mengelola menu, pesanan, dan laporan penjualan. Dibangun dengan C++ untuk memahami konsep struktur data yang efisien.",
      tech: ["C++"],
      features: [
        "Manajemen menu dan kategori produk",
        "Laporan penjualan harian dan bulanan",
        "Manajemen stok inventory",
        "Multi-user dengan role management",
      ],
      image: "./assets/images/project-4.png",
      url: "https://github.com/iambeno1/data-structures-cpp/tree/main/Tugas_Besar",
    },
    en: {
      title: "Cafe Sales Automation",
      category: "Other",
      description:
        "A sales automation system for cafes that manages menus, orders, and sales reports. Built with C++ to understand efficient data structure concepts.",
      tech: ["C++"],
      features: [
        "Menu and product category management",
        "Daily and monthly sales reports",
        "Inventory stock management",
      ],
      image: "./assets/images/project-4.png",
      url: "https://github.com/iambeno1/data-structures-cpp/tree/main/Tugas_Besar",
    },
  },
  "petal-cafe": {
    id: {
      title: "Petal Cafe",
      category: "Lainnya",
      description:
        "Implementasi konsep dasar pemrograman dengan bahasa C++ untuk membuat sistem penualan berbasis CLI",
      tech: ["C++"],
      features: [
        "Implementasi konsep dasar pemrograman",
        "Sistem penjualan berbasis CLI",
        "Pengelolaan menu dan kategori produk",
      ],
      image: "./assets/images/project-5.jpg",
      url: "https://github.com/iambeno1/fundamentals-programming-cpp/tree/main/Tubes",
    },
    en: {
      title: "Petal Cafe",
      category: "Other",
      description:
        "Implementation of basic programming concepts using C++ to create a CLI-based sales system.",
      tech: ["C++"],
      features: [
        "Basic programming concepts implementation",
        "CLI-based sales system",
        "Menu and product category management",
      ],
      image: "./assets/images/project-5.jpg",
      url: "https://github.com/iambeno1/fundamentals-programming-cpp/tree/main/Tubes",
    },
  },
  "crud-java-gui": {
    id: {
      title: "CRUD Java with GUI",
      category: "Lainnya",
      description:
        "Aplikasi desktop Java dengan GUI untuk operasi CRUD (Create, Read, Update, Delete) menggunakan Swing dan database MySQL. Implementasi pattern MVC untuk struktur kode yang rapi.",
      tech: ["Java", "Swing", "MySQL", "JDBC"],
      features: [
        "GUI interface yang intuitif",
        "Full CRUD operations pada database",
        "Data validation dan error handling",
        "Search dan filtering data",
      ],
      image: "./assets/images/project-6.png",
      url: "https://github.com/Turtle-Forge/java-crud",
    },
    en: {
      title: "CRUD Java with GUI",
      category: "Other",
      description:
        "A Java desktop application with GUI for CRUD (Create, Read, Update, Delete) operations using Swing and MySQL database. Implements MVC pattern for clean code structure.",
      tech: ["Java", "Swing", "MySQL", "JDBC"],
      features: [
        "Intuitive GUI interface",
        "Full CRUD operations on database",
        "Data validation and error handling",
        "Search and data filtering",
      ],
      image: "./assets/images/project-6.png",
      url: "https://github.com/Turtle-Forge/java-crud",
    },
  },
  "ffe-app": {
    id: {
      title: "FFE App",
      category: "Lainnya",
      description:
        "Ini adalah tugas akhir dari mata kuliah Java OOP yang mengembangkan aplikasi 'Food for Everyone: Aplikasi jual beli makanan antara penjual dan pelanggan' yang menerapkan konsep OOP, dilengkapi dengan Java Swing GUI dan database MySQL.",
      tech: ["Java", "Swing", "MySQL", "JDBC"],
      features: [
        "Aplikasi berbasis desktop dengan GUI",
        "Fitur login dan registrasi pengguna",
        "Pengelolaan menu dan kategori produk",
        "Fitur keranjang belanja dan checkout",
      ],
      image: "./assets/images/project-8.png",
      url: "https://github.com/iambeno1/ffe-app",
    },
    en: {
      title: "FFE App",
      category: "Other",
      description:
        "This is the final project for the Java OOP course, developing the 'Food for Everyone: A food buying and selling application between sellers and customers' that applies OOP concepts, complete with Java Swing GUI and MySQL database.",
      tech: ["Java", "Swing", "MySQL", "JDBC"],
      features: [
        "Desktop application with GUI",
        "User login and registration features",
        "Menu and product category management",
        "Shopping cart and checkout features",
      ],
      image: "./assets/images/project-8.png",
      url: "https://github.com/iambeno1/ffe-app",
    },
  },
  "personal-website": {
    id: {
      title: "Personal Website",
      category: "Web Dev",
      description:
        "Website portfolio pribadi yang responsif dengan fitur portfolio detail, dan navigasi yang smooth. Dibangun dengan bootstrap",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      features: [
        "Fully responsive design",
        "Portfolio detail pages",
        "Smooth page transitions",
      ],
      image: "./assets/images/project-9.png",
      url: "https://beno-portfolio.vercel.app/",
    },
    en: {
      title: "Personal Website",
      category: "Web Dev",
      description:
        "A responsive personal portfolio website with detailed portfolio pages and smooth navigation. Built with Bootstrap.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      features: [
        "Fully responsive design",
        "Portfolio detail pages",
        "Smooth page transitions",
      ],
      image: "./assets/images/project-9.png",
      url: "https://beno-portfolio.vercel.app/",
    },
  },
};

function getPortfolioKey(title) {
  // Bersihkan title dari whitespace berlebih dan normalize
  const cleanTitle = title.trim().replace(/\s+/g, " ");

  const mapping = {
    "AI-Powered PDF Assessment System": "ai-powered-pdf-assessment",
    "Sentiment Analysis on APERTI BUMN University Reviews":
      "sentiment-analysis",
    "IoT - Fire and Smoke Detector System": "fire-and-smoke-detector",
    "Secure Image-based Message Encryption using AES and Steganography":
      "stegcrypt",
    "Topic Modelling with LDA": "topic-modeling",
    "A Simple Data Encryption Standard": "des-encryption",
    "Open Data Contributions": "open-data",
    "Countdown Timer": "countdown-timer",
    "Website Kedai Kopi": "kedai-kopi",
    "Explore Indonesia": "explore-indonesia",
    "Minimax Algorithm Tic Tac Toe": "minimax-tictactoe",
    "Otomatisasi Penjualan Kafe": "otomatisasi-penjualan",
    "Petal Cafe": "petal-cafe",
    "CRUD Java with GUI": "crud-java-gui",
    "FFE App": "ffe-app",
    "Personal Website": "personal-website",
  };

  return mapping[cleanTitle] || null;
}

function createFallbackData(title, category, imageUrl, projectUrl) {
  return {
    id: {
      title: title,
      category: category,
      description: "Deskripsi portfolio akan segera ditambahkan.",
      tech: ["Coming Soon"],
      features: ["Detail fitur akan segera ditambahkan"],
      image: imageUrl,
      url: projectUrl,
    },
    en: {
      title: title,
      category: category,
      description: "Portfolio description will be added soon.",
      tech: ["Coming Soon"],
      features: ["Feature details will be added soon"],
      image: imageUrl,
      url: projectUrl,
    },
  };
}

function showPortfolioDetail(portfolioInfo, projectUrl) {
  // Simpan portfolio info untuk peralihan bahasa
  currentPortfolioInfo = portfolioInfo;
  currentPortfolioUrl = projectUrl;

  const currentLang = localStorage.getItem("lang") || "id";
  const data = portfolioInfo[currentLang];

  // Update konten portfolio detail
  document.getElementById("portfolio-detail-name").textContent = data.title;
  document.getElementById("portfolio-detail-category").textContent =
    data.category;
  document.getElementById("portfolio-detail-desc").textContent =
    data.description;
  document.getElementById("portfolio-detail-image").src = data.image;
  document.getElementById("portfolio-detail-image").alt = data.title;

  // Update tech stack
  const techList = document.getElementById("portfolio-detail-tech-list");
  techList.innerHTML = data.tech
    .map((tech) => `<span class="tech-tag">${tech}</span>`)
    .join("");

  // Update features
  const featuresList = document.getElementById(
    "portfolio-detail-features-list"
  );
  featuresList.innerHTML = data.features
    .map((feature) => `<li>${feature}</li>`)
    .join("");

  // Set URL untuk tombol view
  viewPortfolioBtn.onclick = () => window.open(data.url, "_blank");

  // Show portfolio detail page
  pages.forEach((page) => page.classList.remove("active"));
  portfolioDetailTab.classList.add("active");

  // Update navbar
  navigationLinks.forEach((link) => link.classList.remove("active"));
  // Tidak ada navbar link untuk portfolio-detail, jadi kita biarkan
}

// Back to portfolio button
document.addEventListener("DOMContentLoaded", () => {
  const backToPortfolioBtn = document.getElementById("back-to-portfolio");

  if (backToPortfolioBtn) {
    backToPortfolioBtn.addEventListener("click", function () {
      pages.forEach((page) => page.classList.remove("active"));
      portfolioTab.classList.add("active");

      // Update navbar
      navigationLinks.forEach((link) => link.classList.remove("active"));
      // Cari navbar link yang mengarah ke portfolio
      navigationLinks.forEach((link) => {
        if (link.getAttribute("data-page-target") === "portfolio") {
          link.classList.add("active");
        }
      });
    });
  }
});
