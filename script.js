document.addEventListener("DOMContentLoaded", function () {
    console.log("Akademik Dashboard Motoru Fullscreen Modu Aktif.");

    // --- TR / EN DİL SÖZLÜĞÜ ---
    const languages = {
        tr: {
            navBrand: "Batman Üniversitesi",
            navAbout: "Hakkımda", navResearch: "Araştırma", navProjects: "Projeler", navPublications: "Yayınlar", navProfiles: "Akademik Kimlikler", navContact: "İletişim",
            navLectures: "Ders Notları",
            lecture1: "Katıhal Elektroniği", lecture2: "Dijital Okuryazarlık", lecture3: "Özel Konular", lecture4: "Yüksek Lisans Dersi",
            homeLecturesTitle: "Aktif Dönem Ders Notları",
            homeLecturesDesc: "İlgili dersin dökümanlarına, haftalık içeriklerine ve kaynaklarına erişmek için ders kartına tıklayınız.",
            viewNotes: "Notları İncele &rarr;",
            modalNotesTitle: "Ders Dökümanları",
            weekContent: "Haftalık Ders İçerikleri",
            syllabusDownload: "Ders izlencesini ve kaynakları bilgisayarınıza indirin:",
            gradLevel: "Derin Öğrenme Tabanlı Görüntü Analizi (MSc)",
            gradDesc: "Bu ders kapsamında lisansüstü düzeyde tıbbi görüntü segmentasyonu, CNN, Vision Transformers ve modern hibrid durum-uzay (Mamba) mimarileri incelenmektedir.",
            themeBtn: "Karanlık Mod",
            heroTitle: "Elektrik-Elektronik Mühendisliği Anabilim Dalı", heroFaculty: "Mühendislik-Mimarlık Fakültesi",
            sideIdentity: "Akademik Kimlik", sideFaculty: "Mühendislik-Mimarlık Fak.", sideMetrics: "Araştırma Metrikleri", metricJournals: "Dergiler", sideNetworks: "Hızlı Erişim Ağları",
            btnAllProfiles: "Tüm Profilleri Listele", homeProjTitle: "Öne Çıkan Mimari Tasarımlar", homeTimelineTitle: "Akademik Yol Haritası",
            tl1Title: "Doktora Mezuniyeti (PhD)", tl1Desc: "Elektrik-Elektronik Mühendisliği Anabilim Dalı, Yapay Zeka ve Medikal Görüntü İşleme Odaklı Tez Çalışması.",
            tl2Title: "Araştırma Görevlisi", tl2Desc: "Mühendislik-Mimarlık Fakültesi bünyesinde akademik araştırma, proje ve laboratuvar süreçlerinin yürütülmesi.",
            homePubTitle: "Son Literatür Yayınları", btnAll: "Tümünü Gör",
            modalAboutTitle: "Akademik Özgeçmiş",
            modalAboutSubtitle: "Batman Üniversitesi Elektrik-Elektronik Mühendisliği Bölümü bünyesinde akademik ve bilimsel araştırmalarımı yürütmekteyim.",
            modalAboutFocusTitle: "Uzmanlık ve Çalışma Alanları",
            modalAboutFocusDesc: "Doktora derecesine sahip bir araştırmacı olarak; yapay zeka tabanlı tıbbi veri analizi, bilgisayarlı görü, evrişimli sinir ağları (CNN), Vision Transformers (ViT) ve yeni nesil durum-uzay modelleri (Mamba mimarileri) üzerine odaklanmaktayım.",
            modalResTitle: "Araştırma Detayları", modalResItem1Title: "Derin Öğrenme ve Vision Transformers", modalResItem1Desc: "Büyük ölçekli medikal ve görsel veri setlerinde yüksek doğruluklu öznitelik çıkarımı.",
            modalProjTitle: "Bilimsel Projeler", modalProj1Desc: "Klinik görüntülerin sınıflandırılması ve morfolojik sınır analizi için geliştirilmiş, yüksek performanslı durum-uzay model mimarisi tasarımı ve PyTorch optimizasyonu.",
            modalProj2Title: "Lateral Diz Radyografisi Otomatik Segmentasyonu", modalProj2Desc: "Ortopedik lateral diz radyografilerinde patella ve patellar tendon yapılarının hibrid derin öğrenme ağları ile otomatik tespiti.",
            modalPubTitle: "Literatür ve Makaleler", modalPubIndexBadge: "Uluslararası Hakemli",
            modalProfTitle: "Uluslararası Akademik Ağlar", modalContTitle: "Akademik İletişim", modalContAddress: "Batman Üniversitesi, Mühendislik-Mimarlık Fakültesi",
            formNamePh: "Adınız Soyadınız", formEmailPh: "E-posta Adresiniz", formMsgPh: "Mesajınız...", formSubmit: "Güvenli Gönder",
            toastSuccess: "Mesajınız başarıyla akademisyene iletildi!", modalUniBtn: "Resmi Web Sitesi", footerText: "Tüm Hakları Saklıdır."
        },
        en: {
            navBrand: "Batman University",
            navAbout: "About Me", navResearch: "Research", navProjects: "Projects", navPublications: "Publications", navProfiles: "Academic IDs", navContact: "Contact",
            navLectures: "Lecture Notes",
            lecture1: "Solid State Electronics", lecture2: "Digital Literacy", lecture3: "Special Topics", lecture4: "Graduate Course",
            homeLecturesTitle: "Active Semester Lecture Notes",
            homeLecturesDesc: "Click on the lecture card to access related documents, weekly syllabus, and resources.",
            viewNotes: "View Notes &rarr;",
            modalNotesTitle: "Course Documents",
            weekContent: "Weekly Syllabus Content",
            syllabusDownload: "Download the syllabus and resources to your computer:",
            gradLevel: "Deep Learning-Based Image Analysis (MSc)",
            gradDesc: "This graduate course covers medical image segmentation, CNNs, Vision Transformers, and modern hybrid state-space (Mamba) architectures.",
            themeBtn: "Dark Mode",
            heroTitle: "Department of Electrical-Electronics Engineering", heroFaculty: "Faculty of Engineering & Architecture",
            sideIdentity: "Academic Identity", sideFaculty: "Faculty of Eng. & Architecture", sideMetrics: "Research Metrics", metricJournals: "Journals", sideNetworks: "Quick Access Networks",
            btnAllProfiles: "List All Profiles", homeProjTitle: "Featured Architecture Designs", homeTimelineTitle: "Academic Roadmap",
            tl1Title: "PhD Graduation", tl1Desc: "Department of Electrical-Electronics Engineering, AI and Medical Image Processing focused thesis.",
            tl2Title: "Research Assistant", tl2Desc: "Execution of academic research, project tracking and laboratory processes within the Faculty.",
            homePubTitle: "Recent Literature Publications", btnAll: "View All",
            modalAboutTitle: "Academic Biography",
            modalAboutSubtitle: "I am working as a Research Assistant PhD in the Department of Electrical-Electronics Engineering at Batman University.",
            modalAboutFocusTitle: "Expertise & Research Focus",
            modalAboutFocusDesc: "As a PhD researcher, I focus on AI-driven medical data analysis, computer vision, Convolutional Neural Networks (CNNs), Vision Transformers (ViTs), and next-generation state-space architectures (Mamba models).",
            modalResTitle: "Research Details", modalResItem1Title: "Deep Learning & Vision Transformers", modalResItem1Desc: "High-accuracy feature extraction on large-scale medical and visual datasets.",
            modalProjTitle: "Scientific Projects", modalProj1Desc: "Development and PyTorch optimization of an innovative, morphology-aware Vision Mamba framework for clinical classification tasks.",
            modalProj2Title: "Automated Lateral Knee Radiograph Segmentation", modalProj2Desc: "Automated identification and tracking of patellar structures on knee radiographs using hybrid deep networks.",
            modalPubTitle: "Literature & Articles", modalPubIndexBadge: "International Indexed",
            modalProfTitle: "International Academic Networks", modalContTitle: "Academic Correspondence", modalContAddress: "Batman University, Faculty of Engineering & Architecture",
            formNamePh: "Your Full Name", formEmailPh: "Your Email Address", formMsgPh: "Your Message...", formSubmit: "Secure Send",
            toastSuccess: "Your message has been successfully delivered!", modalUniBtn: "Official Website", footerText: "All Rights Reserved."
        }
    };

    let currentLang = localStorage.getItem("lang") || "tr";

    function updateLanguage(lang) {
        document.querySelectorAll("[data-lang]").forEach(element => {
            const key = element.getAttribute("data-lang");
            if (languages[lang][key]) element.textContent = languages[lang][key];
        });
        if (document.getElementById("formName")) {
            document.getElementById("formName").placeholder = languages[lang].formNamePh;
            document.getElementById("formEmail").placeholder = languages[lang].formEmailPh;
            document.getElementById("formMessage").placeholder = languages[lang].formMsgPh;
            document.getElementById("formSubmitBtn").textContent = languages[lang].formSubmit;
        }
        document.getElementById("langToggle").innerHTML = lang === "tr" ? '<i class="fa-solid fa-earth-americas me-1"></i> EN' : '<i class="fa-solid fa-earth-americas me-1"></i> TR';
    }

    updateLanguage(currentLang);

    document.getElementById("langToggle").addEventListener("click", function () {
        currentLang = currentLang === "tr" ? "en" : "tr";
        localStorage.setItem("lang", currentLang);
        updateLanguage(currentLang);
    });

    // --- GÜVENLİ MANUEL TETİKLEME MOTORU (DONMAYI / KAPANMAMAYI ÖNLER) ---
    const modalTriggers = document.querySelectorAll('.js-modal-trigger');
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            if (e.target.closest('[data-bs-dismiss="modal"]') || e.target.classList.contains('btn-close')) return;

            const targetId = this.getAttribute('data-target');
            if (targetId) {
                const modalElement = document.querySelector(targetId);
                if (modalElement && typeof bootstrap !== 'undefined') {
                    let modalInstance = bootstrap.Modal.getInstance(modalElement);
                    if (!modalInstance) {
                        modalInstance = new bootstrap.Modal(modalElement, { backdrop: true, keyboard: true });
                    }
                    modalInstance.show();
                }
            }
        });
    });

    // --- THEME ENGINE ---
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun me-1 text-warning"></i> Light Mode';
    }

    themeToggle.addEventListener('click', function () {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            this.innerHTML = `<i class="fa-solid fa-moon me-1"></i> ${languages[currentLang].themeBtn}`;
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            this.innerHTML = '<i class="fa-solid fa-sun me-1 text-warning"></i> Light Mode';
        }
    });

    // --- FORM HANDLER ---
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            if (typeof bootstrap !== 'undefined' && document.getElementById("successToast")) {
                document.getElementById("toastText").textContent = languages[currentLang].toastSuccess;
                new bootstrap.Toast(document.getElementById("successToast")).show();
            }
            contactForm.reset();
            const modalInstance = bootstrap.Modal.getInstance(document.getElementById("modalIletisim"));
            if (modalInstance) setTimeout(() => { modalInstance.hide(); }, 1200);
        });
    }
});
