document.addEventListener("DOMContentLoaded", function () {
    console.log("Akademik Dashboard Motoru 4.8 Aktif (Bologna, Çoklu Slayt ve Resimli Afiş Altyapısı Entegre Edildi).");

    // --- TR / EN DİL SÖZLÜĞÜ (Sekmeler İçin Genişletildi) ---
    const languages = {
        tr: {
            navBrand: "Batman Üniversitesi", navAbout: "Hakkımda", navResearch: "Araştırma", navProjects: "Projeler", navPublications: "Yayınlar", navProfiles: "Akademik Kimlikler", navContact: "İletişim",
            navLectures: "Ders Notları", lecture1: "Katıhal Elektroniği", lecture2: "Dijital Okuryazarlık", lecture3: "Özel Konular I", lecture4: "Yüksek Lisans Dersi",
            homeLecturesTitle: "Lisans/Lisansüstü Dersler", homeLecturesDesc: "İlgili dersin dökümanlarına, haftalık içeriklerine ve kaynaklarına erişmek için ders kartına tıklayınız.",
            viewNotes: "Notları İncele &rarr;", modalNotesTitle: "Ders Dökümanları", weekContent: "Haftalık Ders İçerikleri", syllabusDownload: "Ders izlencesini ve kaynakları bilgisayarınıza indirin:",
            gradLevel: "Derin Öğrenme Tabanlı Görüntü Analizi (MSc)", gradDesc: "Bu ders kapsamında lisansüstü düzeyde tıbbi görüntü segmentasyonu, CNN, Vision Transformers ve modern hibrid durum-uzay (Mamba) mimarileri incelenmektedir.",
            themeBtn: "Karanlık Mod", heroTitle: "Elektrik-Elektronik Mühendisliği Anabilim Dalı", heroFaculty: "Mühendislik-Mimarlık Fakültesi",
            sideIdentity: "Akademik Kimlik", sideFaculty: "Mühendislik-Mimarlık Fak.", sideMetrics: "Akademik Yayınlar", metricJournals: "Dergiler", metricConf: "Bildiriler", sideNetworks: "Hızlı Erişim Ağları",
            btnAllProfiles: "Tüm Profilleri Listele", homeProjTitle: "Yapay Zeka & Medikal Görüntü İşleme Laboratuvarı (AI-MedLab)", homeTimelineTitle: "Akademik Yol Haritası",
            tl1Title: "Doktora Mezuniyeti (PhD)", tl1Desc: "Elektrik-Elektronik Mühendisliği Anabilim Dalı, Yapay Zeka ve Medikal Görüntü İşleme Odaklı Tez Çalışması.",
            tl2Title: "Araştırma Görevlisi", tl2Desc: "Mühendislik-Mimarlık Fakültesi bünyesinde akademik araştırma, proje ve laboratuvar süreçlerinin yürütülmesi.",
            homePubTitle: "Son Literatür Yayınları", btnAll: "Tümünü Gör", modalAboutTitle: "Akademik Özgeçmiş",
            modalAboutFocusTitle: "Uzmanlık ve Çalışma Alanları", modalPubTitle: "Literatür ve Makaleler", modalProfTitle: "Uluslararası Akademik Ağlar", modalContTitle: "Akademik İletişim",
            formNamePh: "Adınız Soyadınız", formEmailPh: "E-posta Adresiniz", formMsgPh: "Mesajınız...", formSubmit: "Güvenli Gönder", toastSuccess: "Mesajınız iletildi!",
            addArticleTitle: "Yeni Çalışma/Makale Ekle", addArticleBtn: "Listeye Ekle", modalUniBtn: "Resmi Web Sitesi", footerText: "Tüm Hakları Saklıdır.",
            sideAnnouncements: "Duyurular", tabNotes: "Ders Notları", tabSyllabus: "Ders İçerikleri", tabReferences: "Kaynaklar"
        },
        en: {
            navBrand: "Batman University", navAbout: "About Me", navResearch: "Research", navProjects: "Projects", navPublications: "Publications", navProfiles: "Academic IDs", navContact: "Contact",
            navLectures: "Lecture Notes", lecture1: "Solid State Electronics", lecture2: "Digital Literacy", lecture3: "Special Topics", lecture4: "Graduate Course",
            homeLecturesTitle: "Active Semester Lecture Notes", homeLecturesDesc: "Click on the lecture card to access related documents.",
            viewNotes: "View Notes &rarr;", modalNotesTitle: "Course Documents", themeBtn: "Dark Mode", heroTitle: "Department of Electrical-Electronics Engineering",
            sideIdentity: "Academic Identity", sideFaculty: "Faculty of Eng. & Architecture", sideMetrics: "Research Metrics", btnAllProfiles: "List All Profiles",
            homeTimelineTitle: "Academic Roadmap", homePubTitle: "Recent Literature Publications", btnAll: "View All", modalPubTitle: "Literature & Articles", modalProfTitle: "International Academic Networks",
            addArticleTitle: "Add New Study/Article", addArticleBtn: "Add to List", footerText: "All Rights Reserved.", sideAnnouncements: "Announcements",
            tabNotes: "Lecture Notes", tabSyllabus: "Syllabus", tabReferences: "References"
        }
    };

    let currentLang = localStorage.getItem("lang") || "tr";

    function updateLanguage(lang) {
        document.querySelectorAll("[data-lang]").forEach(element => {
            const key = element.getAttribute("data-lang");
            if (languages[lang][key]) element.textContent = languages[lang][key];
        });
        document.getElementById("langToggle").innerHTML = lang === "tr" ? '<i class="fa-solid fa-earth-americas me-1"></i> EN' : '<i class="fa-solid fa-earth-americas me-1"></i> TR';
    }
    updateLanguage(currentLang);

    document.getElementById("langToggle").addEventListener("click", function () {
        currentLang = currentLang === "tr" ? "en" : "tr";
        localStorage.setItem("lang", currentLang);
        updateLanguage(currentLang);
    });

    // --- KALICI HAFIZA KONTROLLERİ ---
    const initialArticles = [
        { id: "art_1", title: "M²-ViM: Morphology-Aware Vision Mamba Framework for Clinical Image Classification", authors: "Örenç, S., Türkeri, C., Alaca, Y. (2026)", link: "https://scholar.google.com/citations?hl=tr&user=053kTJ8AAAAJ&view_op=list_works&sortby=pubdate", indexType: "SCI Indexed Q1", imgData: "" },
        { id: "art_2", title: "Automated Segmentation of Patellar Structures on Lateral Knee Radiographs Using Hybrid Architectures", authors: "Örenç, S. (2026)", link: "https://orcid.org/0000-0002-1190-2849", indexType: "TRDizin", imgData: "" }
    ];

    let articles = JSON.parse(localStorage.getItem("academic_articles")) || initialArticles;
    localStorage.setItem("academic_articles", JSON.stringify(articles));

    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');
    const isAdmin = (mode === "admin");

    const adminPanelContainer = document.getElementById("adminPanelContainer");
    const publicationsListColumn = document.getElementById("publicationsListColumn");

    if (isAdmin) {
        if (adminPanelContainer) adminPanelContainer.style.display = "block";
        if (publicationsListColumn) {
            publicationsListColumn.classList.remove("col-lg-12");
            publicationsListColumn.classList.add("col-lg-7");
        }
    }

    let activeFilter = "All";

    // --- MERKEZİ YAYIN RENDER MOTORU ---
    function renderPublications() {
        const homeContainer = document.getElementById("homePublicationsContainer");
        const modalContainer = document.getElementById("dynamicPublicationsContainer");

        if (homeContainer) homeContainer.innerHTML = "";
        if (modalContainer) modalContainer.innerHTML = "";

        let sciCount = 0, trDizinCount = 0, confCount = 0;

        articles.forEach(art => {
            if (art.indexType === "SCI Indexed Q1") sciCount++;
            else if (art.indexType === "TRDizin") trDizinCount++;
            else if (art.indexType === "Conference Proceeding") confCount++;

            let badgeClass = "bg-secondary-custom";
            if (art.indexType.includes("SCI")) badgeClass = "bg-success-custom";
            else if (art.indexType.includes("Conference")) badgeClass = "bg-warning text-dark";

            const imgHtml = art.imgData ? `<div class="mt-2 text-start"><img src="${art.imgData}" class="img-fluid rounded border shadow-xs animate-img" style="max-height: 110px; object-fit: contain;"></div>` : "";

            if (homeContainer) {
                const homeCard = document.createElement("div");
                homeCard.className = "publication-card p-3 mb-2 article-clickable-item";
                homeCard.setAttribute("data-link", art.link);
                homeCard.innerHTML = `
                    <div class="d-flex justify-content-between align-items-start">
                        <h6 class="fw-bold text-dark mb-1 data-theme-text">${art.title}</h6>
                        <span class="badge ${badgeClass}">${art.indexType}</span>
                    </div>
                    <small class="text-muted">${art.authors}</small>
                    ${imgHtml}
                `;
                homeContainer.appendChild(homeCard);
            }

            if (modalContainer) {
                if (activeFilter === "All" || art.indexType === activeFilter) {
                    const modalCard = document.createElement("div");
                    modalCard.className = "publication-card p-4 mb-3 article-clickable-item position-relative";
                    modalCard.setAttribute("data-link", art.link);
                    
                    const deleteButtonHtml = isAdmin 
                        ? `<button class="btn btn-sm btn-danger position-absolute top-0 end-0 m-3 js-delete-article" data-id="${art.id}"><i class="fa-solid fa-trash-can"></i></button>` : "";

                    modalCard.innerHTML = `
                        <div class="d-flex justify-content-between align-items-start pe-5">
                            <h5 class="fw-bold text-dark data-theme-text">${art.title}</h5>
                            <span class="badge ${badgeClass} p-2">${art.indexType}</span>
                        </div>
                        <p class="lead small text-muted mt-2 mb-0">${art.authors}</p>
                        ${imgHtml}
                        ${deleteButtonHtml}
                    `;
                    modalContainer.appendChild(modalCard);
                }
            }
        });

        const sciBadge = document.querySelector(".text-metric-sci");
        const trBadge = document.querySelector(".text-metric-tr");
        const confBadge = document.querySelector(".text-metric-conf");

        if (sciBadge) sciBadge.innerHTML = `<div class="d-block mb-1">SCI</div><span class="badge bg-primary rounded-pill mt-auto">${sciCount}</span>`;
        if (trBadge) trBadge.innerHTML = `<div class="d-block">TRDizin</div><span class="badge bg-success rounded-pill mt-1">${trDizinCount}</span>`;
        if (confBadge) confBadge.innerHTML = `<div class="d-block">Conf.</div><span class="badge bg-warning text-dark rounded-pill mt-1">${confCount}</span>`;
    }

    renderPublications();

    // --- YAYINLAR FİLTRELEME BUTONLARI TETİKLEYİCİSİ ---
    document.querySelectorAll(".js-pub-filter-btn").forEach(btn => {
        btn.addEventListener("click", function(e) {
            document.querySelectorAll(".js-pub-filter-btn").forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            activeFilter = this.getAttribute("data-target-filter");
            renderPublications();
        });
    });

    document.body.addEventListener('click', function(e) {
        const directBtn = e.target.closest('.metric-direct-btn');
        if (!directBtn) return;
        e.preventDefault();
        activeFilter = directBtn.getAttribute('data-filter');
        renderPublications();
        const pubModal = document.getElementById("modalYayinlar");
        if (pubModal && typeof bootstrap !== 'undefined') {
            bootstrap.Modal.getInstance(pubModal)?.show() || new bootstrap.Modal(pubModal).show();
        }
    });

    // --- MAKALELER / SEMİNERLER KAYIT MOTORU ---
    const addArticleForm = document.getElementById("addArticleForm");
    if (addArticleForm) {
        addArticleForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const fileInput = document.getElementById("artImageInput");
            let base64Img = "";

            const saveProcess = () => {
                const newArticle = {
                    id: "art_" + Date.now(),
                    title: document.getElementById("artTitle").value,
                    authors: document.getElementById("artAuthors").value,
                    link: document.getElementById("artLink").value,
                    indexType: document.getElementById("artIndex").value,
                    imgData: base64Img
                };
                articles.unshift(newArticle);
                localStorage.setItem("academic_articles", JSON.stringify(articles));
                renderPublications();
                addArticleForm.reset();
            };

            if (fileInput && fileInput.files && fileInput.files[0]) {
                const reader = new FileReader();
                reader.onload = function (event) { base64Img = event.target.result; saveProcess(); };
                reader.readAsDataURL(fileInput.files[0]);
            } else {
                saveProcess();
            }
        });
    }

    document.body.addEventListener('click', function(e) {
        const deleteBtn = e.target.closest('.js-delete-article');
        if (deleteBtn) {
            e.stopPropagation();
            if (confirm("Bu yayını kalıcı olarak silmek istediğinize emin misiniz?")) {
                articles = articles.filter(art => art.id !== deleteBtn.getAttribute('data-id'));
                localStorage.setItem("academic_articles", JSON.stringify(articles));
                renderPublications();
            }
        }
    });

    // --- SEKMELİ MODEL HIZLI AÇMA SİSTEMİ ---
    document.body.addEventListener('click', function(e) {
        if (e.target.closest('.js-delete-article') || e.target.closest('.btn-close') || e.target.closest('.metric-direct-btn') || e.target.closest('.dropdown-toggle') || e.target.closest('.nav-link') || e.target.closest('.js-delete-content') || e.target.closest('.js-delete-announcement') || e.target.closest('.js-delete-poster') || e.target.closest('.js-pub-filter-btn')) return;
        const clickable = e.target.closest('.article-clickable-item');
        if (clickable) {
            const link = clickable.getAttribute('data-link');
            if (link) window.open(link, '_blank');
        }
    });

    document.querySelectorAll('.js-modal-trigger').forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            if (targetId) {
                const modalElement = document.querySelector(targetId);
                if (modalElement && typeof bootstrap !== 'undefined') {
                    (bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement)).show();
                }
            }
        });
    });

    // ==========================================
    // --- DERS NOTLARI / İÇERİKLERİ YÖNETİM MOTORU ---
    // ==========================================
    const defaultCourseData = {
        katihal: [{ id: "k1", title: "Ch1: Crystal Structures & Lattice Physics" }],
        dijital: [{ id: "d1", title: "Temel Bilgisayar Mimarileri ve Bulut Bilişim" }],
        ozel: [{ id: "o1", title: "Edge AI Giriş ve Jetson Kurulum Modülleri" }],
        yukseklisans: [{ id: "y1", title: "Tıbbi Görüntü Segmentasyonu ve CNN Gelişimi" }]
    };

    let courseData = JSON.parse(localStorage.getItem("academic_courses_notes")) || defaultCourseData;
    localStorage.setItem("academic_courses_notes", JSON.stringify(courseData));

    if (isAdmin) {
        document.querySelectorAll(".admin-course-zone").forEach(z => z.style.display = "block");
    }

    function renderCourseContents() {
        Object.keys(courseData).forEach(courseKey => {
            const targetContainer = document.getElementById(`list-${courseKey}`);
            if (!targetContainer) return;
            targetContainer.innerHTML = "";
            
            if(courseData[courseKey].length === 0) {
                targetContainer.innerHTML = '<div class="p-2 text-muted small">Eklenmiş ders dökümanı bulunmuyor.</div>';
                return;
            }

            courseData[courseKey].forEach(item => {
                const row = document.createElement("div");
                row.className = "list-group-item d-flex justify-between align-items-center text-dark bg-white";
                
                const controlBtn = isAdmin 
                    ? `<button class="btn btn-xs btn-danger js-delete-content" data-course="${courseKey}" data-id="${item.id}"><i class="fa-solid fa-trash"></i></button>`
                    : `<button class="btn btn-sm btn-outline-primary"><i class="fa-solid fa-download"></i></button>`;

                row.innerHTML = `<span>${item.title}</span> ${controlBtn}`;
                targetContainer.appendChild(row);
            });
        });
    }
    renderCourseContents();

    document.querySelectorAll(".js-course-add-form").forEach(form => {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const courseKey = this.getAttribute("data-course");
            const inputField = this.querySelector(".js-course-input");
            if(!inputField || !inputField.value.trim()) return;

            courseData[courseKey].push({ id: "c_" + Date.now(), title: inputField.value.trim() });
            localStorage.setItem("academic_courses_notes", JSON.stringify(courseData));
            renderCourseContents();
            inputField.value = "";
        });
    });

    document.body.addEventListener("click", function(e) {
        const delBtn = e.target.closest(".js-delete-content");
        if(delBtn) {
            e.stopPropagation();
            const courseKey = delBtn.getAttribute("data-course");
            if(confirm("Bu dökümanı silmek istediğinize emin misiniz?")) {
                courseData[courseKey] = courseData[courseKey].filter(i => i.id !== delBtn.getAttribute("data-id"));
                localStorage.setItem("academic_courses_notes", JSON.stringify(courseData));
                renderCourseContents();
            }
        }
    });

    // ==========================================
    // --- CANLI DUYURULAR MOTORU ---
    // ==========================================
    const defaultAnnouncements = [
        { id: "ann_1", badge: "MSc", text: "Derin Öğrenme dersi proje teslim tarihi güncellendi." },
        { id: "ann_2", badge: "Research", text: "M²-ViM model test başarı metrikleri GitHub reposuna eklendi." }
    ];
    let announcements = JSON.parse(localStorage.getItem("academic_announcements")) || defaultAnnouncements;
    localStorage.setItem("academic_announcements", JSON.stringify(announcements));

    if (isAdmin) {
        document.getElementById("adminAnnouncementPanel").style.display = "block";
    }

    function renderAnnouncements() {
        const container = document.getElementById("dynamicAnnouncementsContainer");
        if (!container) return; container.innerHTML = "";

        announcements.forEach(ann => {
            const item = document.createElement("div");
            item.className = "announcement-box-item position-relative pe-4";
            let badgeClass = ann.badge === "MSc" ? "bg-danger" : (ann.badge === "Research" ? "bg-warning text-dark" : "bg-primary");
            const deleteBtn = isAdmin ? `<button type="button" class="btn btn-link text-danger p-0 position-absolute top-0 end-0 me-2 mt-1 js-delete-announcement" data-id="${ann.id}"><i class="fa-solid fa-trash"></i></button>` : "";
            item.innerHTML = `<span class="badge ${badgeClass} mb-1">${ann.badge}</span><p class="small mb-0 fw-bold text-dark data-theme-text">${ann.text}</p>${deleteBtn}`;
            container.appendChild(item);
        });
    }
    renderAnnouncements();

    if(document.getElementById("addAnnouncementForm")) {
        document.getElementById("addAnnouncementForm").addEventListener("submit", function(e) {
            e.preventDefault();
            announcements.unshift({ id: "a_" + Date.now(), text: document.getElementById("annText").value, badge: document.getElementById("annBadge").value });
            localStorage.setItem("academic_announcements", JSON.stringify(announcements));
            renderAnnouncements();
            this.reset();
        });
    }

    document.body.addEventListener("click", function(e) {
        const delAnnBtn = e.target.closest(".js-delete-announcement");
        if(delAnnBtn) {
            e.stopPropagation();
            if(confirm("Bu duyuruyu kaldırmak istediğinize emin misiniz?")) {
                announcements = announcements.filter(a => a.id !== delAnnBtn.getAttribute("data-id"));
                localStorage.setItem("academic_announcements", JSON.stringify(announcements));
                renderAnnouncements();
            }
        }
    });

    // ==========================================
    // --- ADMİN HAFIZALI PROFİL RESMİ YÜKLEME ---
    // ==========================================
    const mainProfileImg = document.getElementById("mainProfileImg");
    if (localStorage.getItem("academic_custom_avatar_base64") && mainProfileImg) {
        mainProfileImg.src = localStorage.getItem("academic_custom_avatar_base64");
    }
    if (isAdmin && document.getElementById("adminProfileImgBtnZone")) {
        document.getElementById("adminProfileImgBtnZone").style.display = "block";
    }
    if (document.getElementById("profileImgInput")) {
        document.getElementById("profileImgInput").addEventListener("change", function(e) {
            if (e.target.files[0]) {
                const reader = new FileReader();
                reader.onload = function(ev) {
                    if (mainProfileImg) mainProfileImg.src = ev.target.result;
                    localStorage.setItem("academic_custom_avatar_base64", ev.target.result);
                };
                reader.readAsDataURL(e.target.files[0]);
            }
        });
    }

    // ==========================================
    // --- SEMİNER & KONFERANS AFİŞ YÜKLEME MOTORU ---
    // ==========================================
    let posters = JSON.parse(localStorage.getItem("academic_seminar_posters")) || [
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400"
    ];
    localStorage.setItem("academic_seminar_posters", JSON.stringify(posters));

    if (isAdmin && document.getElementById("adminPosterUploadZone")) {
        document.getElementById("adminPosterUploadZone").style.display = "block";
    }

    function renderPosters() {
        const track = document.getElementById("posterCarouselTrack");
        if (!track) return; track.innerHTML = "";
        posters.forEach((postUrl, index) => {
            const div = document.createElement("div");
            div.className = "poster-slide-wrapper position-relative flex-shrink-0";
            const delBtn = isAdmin ? `<button class="btn btn-xs btn-danger position-absolute top-0 end-0 m-1 js-delete-poster" data-index="${index}"><i class="fa-solid fa-xmark"></i></button>` : "";
            div.innerHTML = `<img src="${postUrl}" class="rounded shadow-xs border" style="width:110px; height:150px; object-fit:cover;">${delBtn}`;
            track.appendChild(div);
        });
    }
    renderPosters();

    if (document.getElementById("posterFileInput")) {
        document.getElementById("posterFileInput").addEventListener("change", function(e) {
            if (e.target.files[0]) {
                const reader = new FileReader();
                reader.onload = function(ev) {
                    posters.unshift(ev.target.result);
                    localStorage.setItem("academic_seminar_posters", JSON.stringify(posters));
                    renderPosters();
                };
                reader.readAsDataURL(e.target.files[0]);
            }
        });
    }

    document.body.addEventListener("click", function(e) {
        const delPos = e.target.closest(".js-delete-poster");
        if(delPos) {
            e.stopPropagation();
            const idx = parseInt(delPos.getAttribute("data-index"));
            if(confirm("Bu afişi silmek istediğinize emin misiniz?")) {
                posters.splice(idx, 1);
                localStorage.setItem("academic_seminar_posters", JSON.stringify(posters));
                renderPosters();
            }
        }
    });

    // ==========================================
    // --- BAŞLIK ALANI (HERO) ÇOKLU SLAYT MOTORU ---
    // ==========================================
    let bannerSlides = JSON.parse(localStorage.getItem("academic_banner_slides")) || [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920"
    ];
    localStorage.setItem("academic_banner_slides", JSON.stringify(bannerSlides));

    if (isAdmin && document.getElementById("adminBannerControlZone")) {
        document.getElementById("adminBannerControlZone").style.display = "block";
    }

    function initHeroSlider() {
        const sliderContainer = document.getElementById("heroSliderContainer");
        if (!sliderContainer) return; sliderContainer.innerHTML = "";
        
        bannerSlides.forEach((imgSrc, index) => {
            const slide = document.createElement("div");
            slide.className = `hero-slide-img ${index === 0 ? 'active-slide' : ''}`;
            slide.style.backgroundImage = `url('${imgSrc}')`;
            sliderContainer.appendChild(slide);
        });

        let currentSlideIdx = 0;
        const slides = document.querySelectorAll(".hero-slide-img");
        if (slides.length > 1) {
            setInterval(() => {
                slides[currentSlideIdx].classList.remove("active-slide");
                currentSlideIdx = (currentSlideIdx + 1) % slides.length;
                slides[currentSlideIdx].classList.add("active-slide");
            }, 5000);
        }
    }
    initHeroSlider();

    if (document.getElementById("bannerImgInput")) {
        document.getElementById("bannerImgInput").addEventListener("change", function(e) {
            if (e.target.files[0]) {
                const reader = new FileReader();
                reader.onload = function(ev) {
                    bannerSlides.push(ev.target.result);
                    localStorage.setItem("academic_banner_slides", JSON.stringify(bannerSlides));
                    location.reload();
                };
                reader.readAsDataURL(e.target.files[0]);
            }
        });
    }

    if (document.getElementById("clearBannersBtn")) {
        document.getElementById("clearBannersBtn").addEventListener("click", function() {
            if(confirm("Tüm özel yüklenen başlık fotoğraflarını sıfırlamak istiyor musunuz?")) {
                localStorage.removeItem("academic_banner_slides");
                location.reload();
            }
        });
    }
});
