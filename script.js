document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer for Section Reveal
    const observerOptions = {
        threshold: 0.15
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });

    // 2. Typing Effect for Hero
    const roles = ["Android Kotlin Developer", "Mobile Systems Engineer", "ML Integration Specialist", "Flutter Developer"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeTarget = document.querySelector('.typing-text');

    function type() {
        if (!typeTarget) return;

        const currentRole = roles[roleIndex];
        if (isDeleting) {
            typeTarget.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typeTarget.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 100 : 200;

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    if (typeTarget) type();

    // 3. Smooth Scroll progress indicator
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const progressBar = document.getElementById("scroll-progress");
        if (progressBar) progressBar.style.width = scrolled + "%";
    });

    // 4. Tab Logic for About Section
    window.opentab = function (tabname) {
        const tablinks = document.getElementsByClassName("tab-links");
        const tabcontents = document.getElementsByClassName("tab-contents");

        for (let tablink of tablinks) {
            tablink.classList.remove("active-links");
        }
        for (let tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-links");
        const targetTab = document.getElementById(tabname);
        if (targetTab) targetTab.classList.add("active-tab");
    }

    // 5. Project Modal Logic & Data
    const projectData = {
        competishun: {
            title: "Competishun (May 2024 - Aug 2025)",
            subtitle: "Learning Platform | 1 Lakh+ Installs",
            impact: "40% Engagement Increase | 25% Helpdesk Reduction",
            playStoreLink: "https://play.google.com/store/apps/details?id=xyz.penpencil.competishun&hl=en_IN&pli=1",
            metrics: [
                { value: "1Lakh+", label: "Installations" },
                { value: "40%", label: "Engagement Boost" },
                { value: "25%", label: "Support Reduction" }
            ],
            description: "Architected the ed-tech Android app using Kotlin, XML, and MVVM. Featured in deep module development for a massive user base.",
            tasks: [
                "Engineered core modules: Live Streaming and Offline Downloads.",
                "Integrated Razorpay gateway and FCM notifications.",
                "Designed Test Management module with resume/reattempt support.",
                "Implemented video-integrated quizzes and personalized Community module."
            ]
        },
        lnt: {
            title: "L&T Metro Rail (Aug 2025 - Dec 2025)",
            subtitle: "Embedded Metro Ticketing & Kiosks",
            impact: "Production Grade Operational Stability",
            metrics: [
                { value: "TOM/TVM", label: "Kiosk Software" },
                { value: "NCMC", label: "Transaction Systems" },
                { value: "Root", label: "System Automation" }
            ],
            description: "Developed mission-critical Android applications for kiosk systems (TOM, TVM, TR, PTD) on-site for Hyderabad Metro.",
            tasks: [
                "Implemented QR scanning, ticket validation, and NCMC transaction history modules.",
                "Managed root-level automation, boot scripts, and Android init services.",
                "Optimized QR tables and managed scanner conflicts/focus issues.",
                "Handled ADB-based deployment workflows for rooted and non-rooted devices."
            ]
        },
        nord: {
            title: "Nord (Feb 2024 - April 2024)",
            subtitle: "NFC Attendance Tracker",
            impact: "50% Manual Effort Reduction",
            playStoreLink: "https://play.google.com/store/apps/details?id=com.oakridge&hl=en_IN",
            metrics: [
                { value: "50%", label: "Time Saved" },
                { value: "NFC", label: "Secure Protocol" },
                { value: "Real-time", label: "Safety Tracking" }
            ],
            description: "Implemented a secure NFC-based attendance and pickup/drop system for institutional safety (Oakridge App).",
            tasks: [
                "Built secure NFC transaction logic with real-time history logs.",
                "Facilitated seamless student drop-off/pickup tracking.",
                "Enhanced safety protocols with instant dashboard updates."
            ]
        },
        diabetes: {
            title: "Diabetic Predictor",
            subtitle: "ML Health Analytics Web App",
            impact: "High Reliability Medical Predictions",
            playStoreLink: "https://aryanmahesh.pythonanywhere.com/",
            metrics: [
                { value: "KNN", label: "Algorithm" },
                { value: "Flask", label: "Framework" },
                { value: "90%+", label: "Accuracy" }
            ],
            description: "Developed an ML-based web application utilizing K-Nearest Neighbor (KNN) for accurate diabetes prediction.",
            tasks: [
                "Rigorous data preprocessing and model fine-tuning for reliability.",
                "Deployed on PythonAnywhere with a responsive Flask-based UI.",
                "Implemented clean diagnostic input forms and result visualization.",
                "Optimized model inference time for real-time health feedback."
            ]
        },
        taskmanager: {
            title: "TaskManager",
            subtitle: "Android Task-Tracking App | Play Store",
            impact: "Monetized with Rewarded & Interstitial Ads",
            playStoreLink: "https://play.google.com/store/apps/details?id=com.aryanmaheshwari.taskmanager",
            metrics: [
                { value: "Kotlin", label: "Language" },
                { value: "MVVM", label: "Architecture" },
                { value: "AdMob", label: "Monetization" }
            ],
            description: "Built a comprehensive task-tracking application featuring premium functionality unlocked via rewarded ads, with interstitial ads displaying after every 4 tasks.",
            tasks: [
                "Implemented full CRUD task flow with live search and filtering capabilities.",
                "Integrated Google AdMob with rewarded ad premium unlock and interstitial ad placements.",
                "Developed Room database for robust offline persistence and data management.",
                "Designed polished UI with glass-morphic cards, custom drawables, and animated onboarding.",
                "Applied Clean Architecture separating UI, business logic, and data layers for scalability."
            ]
        }
    };

    const modal = document.getElementById("projectModal");
    const modalBody = document.getElementById("modalBody");
    const closeBtn = document.querySelector(".close-modal");

    window.openProjectModal = function (projectId) {
        const data = projectData[projectId];
        if (!data) return;

        modalBody.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:20px;">
                <div>
                    <h2 class="modal-title" style="margin-bottom:5px;">${data.title}</h2>
                    <p class="modal-subtitle" style="margin-bottom:0;">${data.subtitle}</p>
                </div>
                ${data.playStoreLink ? `<a href="${data.playStoreLink}" target="_blank" class="btn primary-btn" style="padding: 10px 20px; font-size: 0.9rem;"><i class="fab fa-google-play"></i> View on Play Store</a>` : ''}
            </div>
            
            <div class="modal-metrics" style="margin-top:30px;">
                ${data.metrics.map(m => `
                    <div class="metric-card">
                        <span class="metric-value">${m.value}</span>
                        <span class="metric-label">${m.label}</span>
                    </div>
                `).join('')}
            </div>

            <div class="modal-section">
                <h4>Business Impact</h4>
                <p>${data.impact}</p>
            </div>

            <div class="modal-section">
                <h4>Core Implementation</h4>
                <p>${data.description}</p>
                <ul style="margin-top:20px; color:var(--text-dim);">
                    ${data.tasks.map(t => `<li style="margin-bottom:10px;"><i class="fas fa-check-circle" style="color:var(--primary); margin-right:10px;"></i> ${t}</li>`).join('')}
                </ul>
            </div>
        `;
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    };

    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        };
    }

    window.onclick = (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    };
});
