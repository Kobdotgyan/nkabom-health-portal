# Nkabom Community Health Clinic Portal

A fully responsive, accessible, and modern web portal designed for a community health clinic in Ghana. This project demonstrates advanced frontend development skills, focusing on mobile-first design, user experience (UX), and robust client-side validation.

**Live Demo:** [Insert your GitHub Pages URL here once deployed]

## 🚀 Key Features

- **Responsive Mobile-First Design:** Adapts flawlessly from mobile devices to large desktop screens using CSS Grid and Flexbox.
- **Persistent Theme Toggle:** Users can switch between Dark and Light modes. The preference is saved in `localStorage` and respects the system `prefers-color-scheme` media query on the initial load.
- **Defensive Form Validation:** The appointment form utilizes vanilla JavaScript to validate phone number formats and prevent users from selecting past dates, providing clear, accessible feedback without page reloads.
- **Modern UI/UX:** Implements glassmorphism (`backdrop-filter`), smooth CSS keyframe animations (such as the scrolling health tips bar), and semantic HTML5 for optimal accessibility and search engine optimization (SEO).

## 🛠️ Technical Stack

- **Structure:** Semantic HTML5
- **Styling:** CSS3 (Custom Properties, Flexbox, CSS Grid, Media Queries, Keyframe Animations)
- **Interactivity:** Vanilla JavaScript (DOM Manipulation, Event Listeners, `localStorage`)
- **Version Control:** Git & GitHub
- **Deployment:** GitHub Pages

## 📂 Project Structure

```text
nkabom-health-portal/
├── index.html          # Main semantic HTML structure
├── css/
│   └── style.css       # Comprehensive responsive styling and theme variables
├── js/
│   └── script.js       # Theme persistence, mobile navigation, and form validation
└── assets/
    └── images/         # Placeholder for local assets (currently using optimized Unsplash URLs)