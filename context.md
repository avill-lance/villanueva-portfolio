# Portfolio Website Project Brief

## Overview
Create a modern, single-page portfolio website that showcases skills, projects, and professional experience. The design should be clean, animated, and highly professional, drawing inspiration from https://ankushrathour.com/ while maintaining a unique personal brand.

## Tech Stack
- **Framework:** Vue 3 (Composition API)
- **Styling:** Tailwind CSS
- **Animation:** Vue Transition / CSS animations
- **Deployment:** Static host (Vercel, Netlify, or similar)

## Design Inspiration (from ankushrathour.com)
The reference site features:
- **Hero Section:** Bold headline, subtitle with role description, call-to-action buttons, and quick stats/achievements
- **Scroll-triggered animations:** Elements fade/slide in as user scrolls
- **Interactive elements:** Subtle hover effects on buttons, cards, and links
- **Status indicator:** "Available for opportunities" badge with live indicator
- **Section dividers:** Numbered section headers (01, 02, 03...)
- **Project cards:** Grid layout with hover effects and tech stack tags
- **Skills/Stack display:** Categorized technology badges
- **Contact section:** Clear call-to-action with social links
- **Footer:** Social links, copyright, and optional navigation

## Website Structure (Single Page)

### 1. Header/Navigation (Sticky)
- Sticky top navigation bar
- Logo/name on left
- Navigation links: Home, About, Projects, Skills, Contact
- Optional: Mobile hamburger menu
- Smooth scroll to sections

### 2. Hero Section
- **Availability badge:** "Available for new opportunities" with live dot indicator
- **Headline:** Name + role (e.g., "Software Engineer" or relevant title)
- **Subheadline:** Short tagline describing expertise (1-2 lines)
- **Key stats:** 3-4 achievement metrics (e.g., years experience, projects built, etc.) displayed as mini-cards or inline numbers
- **CTA buttons:** Primary (View Projects) and Secondary (Get in Touch)
- **Scroll indicator:** Animated chevron pointing down

### 3. About Section
- Section number: "01 — About"
- Brief professional summary paragraph
- Core expertise areas (e.g., "Full-stack development", "Cloud architecture", etc.)
- Expandable details or bullet highlights
- Optional: Photo or avatar

### 4. Skills / Stack Section
- Section number: "02 — Stack" or "Skills"
- Categorized technology list:
  - Frontend (Vue, React, Tailwind, etc.)
  - Backend (Node.js, Python, etc.)
  - Cloud & DevOps (AWS, Docker, etc.)
  - Databases (PostgreSQL, MongoDB, etc.)
  - Tools & Others
- Display as chips/badges with subtle hover effects

### 5. Projects Showcase
- Section number: "03 — Projects"
- Grid of project cards (2-6 projects)
- Each card shows:
  - Project title
  - Brief description
  - Tech stack tags
  - Live demo / GitHub links (hover-reveal)
- Optional: Filter by category
- Hover effects on cards (lift, shadow, or overlay)

### 6. Contact Section
- Section number: "04 — Contact"
- Clear call-to-action: "Let's build something great"
- Brief statement about availability
- Social links (GitHub, LinkedIn, Email, Twitter)
- Contact form (optional, can be simple email link)

### 7. Footer
- Name and copyright
- Quick navigation links
- Social icons (small)
- Optional: "Back to top" button

## Key Visual & Interaction Details
- **Color scheme:** Dark background with accent colors (or light with accents) — choose based on personal brand
- **Typography:** Clean sans-serif font (Inter, Poppins, or similar)
- **Animations:**
  - Fade-in on scroll (using Intersection Observer)
  - Subtle button hover states (translateY(-2px), shadow change)
  - Card hover effects
  - Smooth scroll navigation
- **Responsive:** Mobile-first approach, fully responsive down to small screens

## Implementation Notes
- Use Vue single-file components (.vue) for each section
- Leverage Tailwind's utility classes for styling
- Keep state minimal (no global store needed for a single-page portfolio)
- Optimize images and assets for web
- Add meta tags for SEO and social sharing

## Content to Include
Replace placeholders with actual information:
- Name, title, and tagline
- About me text
- Skills and technologies
- Project details (name, description, tech, links)
- Contact information and social profiles

## Next Steps
1. Set up Vue + Tailwind project
2. Create component structure
3. Build each section as a separate component
4. Add animations and interactions
5. Populate with real content
6. Test responsiveness
7. Deploy
