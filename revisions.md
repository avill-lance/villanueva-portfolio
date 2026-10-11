# Portfolio Revision Specification & Action Plan

## 1. Profile & Identity Updates
- **Priority:** High
- **Target Files:** `src/data/portfolioData.js`, `src/components/Hero.vue`, `src/components/About.vue`
- **Requirements:**
  - **Job Title:** Change from `"Full-Stack Software Engineer"` to `"Aspiring Full Stack developer"`.
  - **About Me / Bio:** Rewrite copy to reflect a dedicated student rather than a seasoned professional with enterprise experience.
    - Emphasize academic growth, eagerness to learn, computer science fundamentals, and hands-on coursework/personal projects.
    - Remove misleading enterprise metrics (e.g., "3+ Years Experience", "99.9% Uptime"). Replace with student-focused metrics (e.g., active technologies, personal projects, dedication).
  - **Acceptance Criteria:**
    - Hero and About sections consistently display "Aspiring Full Stack developer".
    - Narrative reflects a passionate, proactive student seeking to learn and grow.

---

## 2. Technical Stack & Specializations Alignment
- **Priority:** High
- **Target Files:** `src/data/portfolioData.js`, `src/components/Skills.vue`, `src/components/About.vue`
- **Scope of Approved Technologies:**
  - HTML, CSS, JS, PHP, BOOTSTRAP, TAILWIND, LARAVEL, C++, PYTHON, JAVA, MYSQL, FIGMA, GIT & GITHUB ACTIONS, ADOBE PHOTOSHOP, ADOBE ANIMATE.
- **Requirements:**
  - Audit and prune existing skill badges to strictly match this approved list.
  - Group technologies logically:
    - **Programming Languages:** JavaScript, Python, Java, C++, PHP, HTML5, CSS3
    - **Frameworks & Styling:** Bootstrap, Tailwind CSS, Laravel
    - **Databases & Backend:** MySQL, PHP / Laravel
    - **Tools & Media:** Git & GitHub Actions, Figma, Adobe Photoshop, Adobe Animate
- **Acceptance Criteria:**
  - Skills and About components accurately display only the approved technologies.
  - No unverified enterprise tech (e.g., Docker, AWS, React) remains displayed.

---

## 3. Project Section Refactor
- **Priority:** High
- **Target Files:** `src/components/Projects.vue`, `src/App.vue`, `src/components/Navbar.vue`, `src/components/Footer.vue`
- **Requirements:**
  - Completely remove the **Featured Projects** section from the active view.
  - Clean up navigation links in `Navbar.vue` and `Footer.vue` pointing to `#projects`.
  - Re-order section counters (01: About, 02: Skills, 03: Contact).
- **Acceptance Criteria:**
  - Page renders seamlessly without project cards or layout gaps.
  - Navigation anchors navigate smoothly to existing sections.

---

## 4. Contact & Social Link Integration
- **Priority:** High
- **Target Files:** `src/data/portfolioData.js`, `src/components/Contact.vue`, `src/components/Footer.vue`
- **Links to Configure:**
  - **Facebook:** `https://www.facebook.com/lanxietyyy`
  - **GitHub:** `https://github.com/avill-lance`
  - **Email:** `lancealexisv@gmail.com` (`mailto:lancealexisv@gmail.com`)
  - **Instagram:** `https://www.instagram.com/lance_alxs/`
- **Requirements:**
  - Integrate Facebook and Instagram icons alongside GitHub and Mail.
  - Replace any placeholder links with the exact accounts specified.
  - Ensure links have `target="_blank"` and `rel="noopener noreferrer"` for security.
- **Acceptance Criteria:**
  - All four contact channels work directly and open the correct targets.

---

## 5. Profile Image Integration
- **Priority:** Medium
- **Target Files:** `src/components/Hero.vue`, `src/components/About.vue`
- **Requirements:**
  - Integrate the photo located at `src/villanueva-photo.jpeg`.
  - Style with an elegant frame, subtle gradient border, glow effect, and rounded corners.
  - Ensure full responsiveness and accessibility (`alt="Lance Alexis Villanueva"`).
- **Acceptance Criteria:**
  - Profile image renders crisply on both desktop and mobile devices.

---

## 6. Theme Switching: Dark Mode & Light Mode
- **Priority:** High
- **Target Files:** `src/App.vue`, `src/components/Navbar.vue`, `tailwind.config.js`, `src/index.css`, `src/composables/useTheme.js`
- **Requirements:**
  - Create a theme toggle composable with `localStorage` persistence and system preference fallback.
  - Add an animated Sun/Moon toggle button in the Navbar.
  - Support both Light and Dark aesthetics cleanly across all sections.
  - Provide smooth CSS transition animations when switching themes.
- **Acceptance Criteria:**
  - Clicking toggle switches the theme instantly and smoothly.
  - Contrast and typography remain legible and stylish in both themes.

