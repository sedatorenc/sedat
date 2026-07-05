document.addEventListener("DOMContentLoaded", function () {
    console.log("Akademik Motor 3.0: Çoklu Dil Desteği ve Güvenli Kapatma Sistemleri Hazır.");

    // --- 1. DİL VERİ HAVUZU (TR / EN) ---
    const languages = {
        tr: {
            navBrand: "Batman Üniversitesi",
            navAbout: "Hakkımda", navResearch: "Araştırma", navProjects: "Projeler", navPublications: "Yayınlar", navProfiles: "Akademik Kimlikler", navContact: "İletişim",
            themeBtn: "Karanlık Mod",
            heroTitle: "Elektrik-Elektronik Mühendisliği Anabilim Dalı", heroFaculty: "Mühendislik-Mimarlık Fakültesi",
            heroCard1Title: "M²-ViM Projesi", heroCard1Desc: "Morphology-Aware Vision Mamba ve derin öğrenme çalışmaları.",
            heroCard2Title: "Q1 İndeksli Yayınlar", heroCard2Desc: "Uluslararası hakemli dergilerde basılmış güncel makaleler.",
            gridCard1Title: "Araştırma Alanları", gridCard1Desc: "Tıbbi görüntü işleme, yapay zeka mimarileri ve hibrid sinir ağları.",
            gridCard2Title: "Akademik Yayınlar", gridCard2Desc: "Uluslararası makaleler, Q1 indeksli çalışmalar ve bildiriler.",
            gridCard3Title: "Akademik Profiller", gridCard3Desc: "Scholar, YÖK, ORCID ve ABİS resmi ağ profilleriniz.",
            btnViewDetails: "Detayları Gör", btnViewPubs: "Yayınları İncele", btnGoProfiles: "Profillere Git",
            modalAboutTitle: "Akademik Özgeçmiş",
            modalAboutSubtitle: "Batman Üniversitesi Elektrik-Elektronik Mühendisliği Bölümü bünyesinde akademik ve bilimsel araştırmalarımı yürütmekteyim.",
            modalAboutFocusTitle: "Uzmanlık ve Çalışma Alanları",
            modalAboutFocusDesc: "Doktora derecesine sahip bir araştırmacı olarak; yapay zeka tabanlı tıbbi veri analizi, bilgisayarlı görü, evrişimli sinir ağları (CNN), Vision Transformers (ViT) ve yeni nesil durum-uzay modelleri (Mamba mimarileri) üzerine odaklanmaktayım. Uluslararası yayın süreçleri yönetimi, Q1 düzeyindeki makale hazırlıkları ve robotik sistem tasarımları süreçlerinde deneyim sahibiyim.",
            modalResTitle: "Araştırma Detayları",
            modalResItem1Title: "Derin Öğrenme ve Vision Transformers", modalResItem1Desc: "Büyük ölçekli medikal ve görsel veri setlerinde yüksek doğruluklu öznitelik çıkarımı ve sınıflandırma hiyerarşileri.",
            modalResItem2Title: "Tıbbi Görüntü Bölütleme (Segmentation)", modalResItem2Desc: "Radyografiler ve klinik görüntü tipleri üzerinde patolojik yapıların otomatik tespiti ve morfolojik segmentasyonu.",
            modalResItem3Title: "Robotik ve Gömülü Sistemler Eğitimi", modalResItem3Desc: "Arduino ve Raspberry Pi platformları üzerinden akıllı donanım entegrasyonu ve otonom sistem müfredatları.",
            modalProjTitle: "Bilimsel Projeler",
            modalProj1Desc: "Klinik görüntülerin sınıflandırılması ve morfolojik sınır analizi için geliştirilmiş, yüksek performanslı durum-uzay model mimarisi tasarımı ve PyTorch optimizasyonu.",
            modalProj2Title: "Lateral Diz Radyografisi Otomatik Segmentasyonu", modalProj2Desc: "Ortopedik lateral diz radyografilerinde patella ve patellar tendon yapılarının hibrid derin öğrenme ağları ile otomatik tespiti.",
            modalPubTitle: "Literatür ve Makaleler", modalPubIndexBadge: "Uluslararası Hakemli",
            modalProfTitle: "Uluslararası Akademik Ağlar", modalProfSubtitle: "Güncel akademik performans, atıflar ve resmi kurumsal profillerinize aşağıdaki bağlantılardan erişebilirsiniz:",
            scholarDesc: "Atıflar, h-endeksi ve kronolojik yayın listesi", yokDesc: "Yükseköğretim Kurulu resmi araştırmacı havuz kaydı", abisDesc: "Resmi Kurumsal Akademik Bilgi Sistemi Sayfası",
            modalContTitle: "Akademik İletişim", modalContAddress: "Batman Üniversitesi, Mühendislik-Mimarlık Fakültesi",
            formNamePh: "Adınız Soyadınız", formEmailPh: "E-posta Adresiniz", formMsgPh: "Mesajınız...", formSubmit: "Güvenli Gönder",
            toastSuccess: "Mesajınız başarıyla akademisyene iletildi!",
            modalUniDesc: "Mühendislik-Mimarlık Fakültesi<br>Elektrik-Elektronik Mühendisliği", modalUniBtn: "Resmi Web Sitesi", footerText: "Tüm Hakları Saklıdır."
        },
        en: {
            navBrand: "Batman University",
            navAbout: "About Me", navResearch: "Research Areas", navProjects: "Projects", navPublications: "Publications", navProfiles: "Academic IDs", navContact: "Contact",
            themeBtn: "Dark Mode",
            heroTitle: "Department of Electrical-Electronics Engineering", heroFaculty: "Faculty of Engineering and Architecture",
            heroCard1Title: "M²-ViM Project", heroCard1Desc: "Morphology-Aware Vision Mamba framework and deep learning research.",
            heroCard2Title: "Q1 Indexed Publications", heroCard2Desc: "Recent articles published in international peer-reviewed Q1 journals.",
            gridCard1Title: "Research Areas", gridCard1Desc: "Medical image processing, deep learning architectures, and hybrid neural networks.",
            gridCard2Title: "Academic Publications", gridCard2Desc: "International articles, Q1 tier papers, and conference proceedings.",
            gridCard3Title: "Academic Profiles", gridCard3Desc: "Scholar, YÖK, ORCID, and ABIS institutional networks.",
            btnViewDetails: "View Details", btnViewPubs: "View Publications", btnGoProfiles: "Go to Profiles",
            modalAboutTitle: "Academic Biography",
            modalAboutSubtitle: "I am working as a Research Assistant PhD in the Department of Electrical-Electronics Engineering at Batman University.",
            modalAboutFocusTitle: "Expertise & Research Focus",
            modalAboutFocusDesc: "As a PhD researcher, I focus on AI-driven medical data analysis, computer vision, Convolutional Neural Networks (CNNs), Vision Transformers (ViTs), and next-generation state-space architectures (Mamba models). I have intensive experience in international Q1 publishing workflows and academic robotics projects.",
            modalResTitle: "Research Details",
            modalResItem1Title: "Deep Learning & Vision Transformers", modalResItem1Desc: "High-accuracy feature extraction and classification hierarchies on large-scale medical and visual datasets.",
            modalResItem2Title: "Medical Image Segmentation", modalResItem2Desc: "Automated detection and morphology-aware boundary segmentation of anatomical structures on radiographs.",
            modalResItem3Title: "Robotics & Embedded Systems Curriculum", modalResItem3Desc: "Smart hardware integration via Arduino and Raspberry Pi for student-driven engineering projects.",
            modalProjTitle: "Scientific Projects",
            modalProj1Desc: "Development and PyTorch optimization of an innovative, morphology-aware Vision Mamba framework for clinical classification tasks.",
            modalProj2Title: "Automated Lateral Knee Radiograph Segmentation", modalProj2Desc: "Automated identification and tracking of patellar structures on knee radiographs using hybrid deep networks.",
            modalPubTitle: "Literature & Articles", modalPubIndexBadge: "International Indexed",
            modalProfTitle: "International Academic Networks", modalProfSubtitle: "You can access up-to-date research metrics, citations, and official institutional records via the links below:",
            scholarDesc: "Citations, h-index, and chronological publication tracking", yokDesc: "Official researcher database of the Council of Higher Education", abisDesc: "Official Institutional Academic Information System page",
            modalContTitle: "Academic Correspondence", modalContAddress: "Batman University, Faculty of Engineering & Architecture",
            formNamePh: "Your Full Name", formEmailPh: "Your Email Address", formMsgPh: "Your Message...", formSubmit: "Secure Send",
            toastSuccess: "Your message has been successfully delivered to the researcher!",
            modalUniDesc: "Faculty of Engineering and Architecture<br>Electrical-Electronics Engineering", modalUniBtn: "Official Website", footerText: "All Rights Reserved."
        }
    };

    let currentLang = localStorage.getItem("lang") || "tr";

    function updateLanguage(lang) {
        document.querySelectorAll("[data-lang]").forEach(element => {
            const key = element.getAttribute("data-lang");
            if (languages[lang][key]) {
                if (key === "modalUniDesc") {
                    element.innerHTML = languages[lang][key];
                } else {
                    element.textContent = languages[lang][key];
                }
            }
        });

        // Form placeholder'larını güncelle
        if (document.getElementById("formName")) {
            document.getElementById("formName").placeholder = languages[lang].formNamePh;
            document.getElementById("formEmail").placeholder = languages[lang].formEmailPh;
            document.getElementById("formMessage").placeholder = languages[lang].formMsgPh;
            document.getElementById("formSubmitBtn").textContent = languages[lang].formSubmit;
        }

        // Dil Değiştirme Butonu Tasarımını Güncelle
        const langToggle = document.getElementById("langToggle");
        langToggle.innerHTML = lang === "tr" ? '<i class="fa-solid fa-earth-americas me-1"></i> EN' : '<i class="fa-solid fa-earth-americas me-1"></i> TR';
    }

    // İlk açılışta dili ayarla
    updateLanguage(currentLang);

    document.getElementById("langToggle").addEventListener("click", function () {
        currentLang = currentLang === "tr" ? "en" : "tr";
        localStorage.setItem("lang", currentLang);
        updateLanguage(currentLang);
    });

    // --- 2. ÇAKIŞMA/DONMA ÖNLEYİCİ MİMARİ ---
    const modalTriggers = document.querySelectorAll('.js-modal-trigger');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Eğer pencere içindeki X butonuna veya kapatma elemanına basıldıysa JS tetiklemesini kes
            if (e.target.closest('[data-bs-dismiss="modal"]') || e.target.classList.contains('btn-close')) {
                return;
            }

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

    // --- 3. DARK MODE (TEMA) MOTORU ---
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

    // --- 4. İLETİŞİM FORMU ---
    const contactForm = document.getElementById("contactForm");
    const successToast = document.getElementById("successToast");
    const toastText = document.getElementById("toastText");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            if (typeof bootstrap !== 'undefined' && successToast) {
                toastText.textContent = languages[currentLang].toastSuccess;
                const toast = new bootstrap.Toast(successToast);
                toast.show();
            }

            contactForm.reset();

            const modalElement = document.getElementById("modalIletisim");
            if (modalElement) {
                const modalInstance = bootstrap.Modal.getInstance(modalElement);
                if (modalInstance) {
                    setTimeout(() => { modalInstance.hide(); }, 1200);
                }
            }
        });
    }
});