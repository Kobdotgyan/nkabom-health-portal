document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. Theme toggle
    // ==========================================
    const themeToggle = document.getElementById('theme-toggle');
    const prefersLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;

    if (themeToggle) {
        const toggleLabel = themeToggle.querySelector('.toggle-label');
        const savedTheme = localStorage.getItem('nkabom-theme');
        const shouldUseLightMode = savedTheme ? savedTheme === 'light' : prefersLightMode;

        const updateThemeToggle = () => {
            const isLightMode = document.body.classList.contains('light-mode');
            themeToggle.setAttribute('aria-pressed', String(isLightMode));
            if (toggleLabel) {
                toggleLabel.textContent = isLightMode ? 'Dark' : 'Light';
            }
        };

        if (shouldUseLightMode) {
            document.body.classList.add('light-mode');
        }

        updateThemeToggle();

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isLightMode = document.body.classList.contains('light-mode');
            localStorage.setItem('nkabom-theme', isLightMode ? 'light' : 'dark');
            updateThemeToggle();
        });
    }

    // ==========================================
    // 2. Mobile Navigation Toggle
    // ==========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });

        document.querySelectorAll('#nav-links a').forEach((link) => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.textContent = '☰';
            });
        });
    }

    // ==========================================
    // 3. Appointment Form Validation
    // ==========================================
    const appointmentForm = document.getElementById('appointment-form');
    const formFeedback = document.getElementById('form-feedback');

    if (!appointmentForm || !formFeedback) {
        return;
    }

    appointmentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const phoneInput = document.getElementById('phone')?.value.trim() || '';
        const dateInput = document.getElementById('date')?.value || '';

        formFeedback.textContent = '';
        formFeedback.style.color = '';

        const phoneRegex = /^[0-9+\s-]{10,15}$/;
        if (!phoneRegex.test(phoneInput)) {
            formFeedback.textContent = 'Error: Please enter a valid phone number (10 to 15 digits).';
            formFeedback.style.color = '#dc3545';
            return;
        }

        if (!dateInput) {
            formFeedback.textContent = 'Error: Please choose a preferred appointment date.';
            formFeedback.style.color = '#dc3545';
            return;
        }

        const selectedDate = new Date(dateInput);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (Number.isNaN(selectedDate.getTime()) || selectedDate < today) {
            formFeedback.textContent = 'Error: Please select a current or future date for your appointment.';
            formFeedback.style.color = '#dc3545';
            return;
        }

        formFeedback.textContent = 'Success! Your appointment request has been submitted. We will contact you shortly.';
        formFeedback.style.color = '#28a745';
        appointmentForm.reset();
    });
});