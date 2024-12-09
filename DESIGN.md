# 🎨 Design Document: Portfolio Website

## 💡 Project Purpose
This portfolio website serves as a showcase of my professional journey, projects, and skills. The focus is on creating a visually appealing, responsive, and interactive experience for users while demonstrating my expertise in modern web development practices.

---

## 🏗 Technical Architecture

The project is built using the following stack:

- **Next.js**: Provides server-side rendering (SSR) and static site generation (SSG) for enhanced performance and SEO.
- **React**: Forms the foundation for building reusable UI components.
- **TypeScript**: Ensures type safety, making the application robust and maintainable.
- **Tailwind CSS**: Simplifies styling with utility-first CSS classes.
- **Framer Motion**: Adds smooth animations and interactivity.

### Folder Structure

```plaintext
cs50-final-project/
├── .next/            # Next.js build output (auto-generated, should be ignored in Git)
├── node_modules/     # Node.js dependencies (auto-generated, should be ignored in Git)
├── public/           # Static assets like images, fonts, etc.
├── src/              # Source files for the application
│   ├── components/   # Reusable UI components
│   ├── pages/        # Application pages (automatically routed by Next.js)
│   ├── styles/       # Global and component-specific styles (e.g., CSS or Tailwind files)
│   ├── utils/        # Utility functions (e.g., helper functions or constants)
│   ├── hooks/        # Custom React hooks
│   └── sections/     # Sections for page layouts (optional, based on your project structure)
├── .gitignore        # Specifies intentionally untracked files to ignore
├── DESIGN.md         # Project design documentation (if needed)
├── next-env.d.ts     # TypeScript environment declarations (auto-generated)
├── next.config.mjs   # Next.js configuration file
├── package.json      # Node.js dependencies and scripts
├── package-lock.json # Lockfile for Node.js dependencies
├── postcss.config.mjs # PostCSS configuration
├── README.md         # Project documentation
├── tailwind.config.ts # Tailwind CSS configuration (if using Tailwind)
└── tsconfig.json     # TypeScript configuration
```

---

## 🧩 Features and Design Choices

### 1. **Header Component**
The `<Header>` component includes:
- A fixed navigation bar with links to sections such as "About," "Projects," and "Contact."
- Designed for clarity and ease of access.
- Implements Framer Motion for fade-in and slide-down effects when the page loads.

#### Code Example:
```jsx
<motion.header
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="mt-[50px] flex items-center"
>
</motion.header>
```

---

### 2. **About Section**
The "About Me" section introduces my background and professional experiences:
- **Image Integration:** A dynamically loaded image using Next.js’s `Image` component for performance.
- **Text Content:** A narrative that highlights my skills and achievements.
- **Responsive Layout:** Adapts for both desktop and mobile screens.

#### Design Considerations:
- Used Tailwind CSS for consistent spacing and typography.
- Enabled dynamic content animations using `RevealContent`.

---

### 3. **Projects Section**
The "Projects" section showcases my key projects with:
- **Dynamic Cards:** Each `<ProjectCard>` is reusable, displaying project name, description, technologies used, and links.
- **Flexibility:** Supports both left and right image alignments to maintain visual balance.
- **Animations:** Cards appear with smooth transitions powered by Framer Motion.

#### Code Example:
```jsx
<ProjectCard
  name={"Intus Care Dashboard Optimization"}
  description={
    "Conducted healthcare data analysis using Python and SQL, identifying $500K in cost-saving opportunities."
  }
  technologies={["Data Analytics", "Python", "SQL"]}
  imageSrc={"/images/IntusCareScreenshot.webp"}
  imagePosition={"right"}
  directLink={"https://www.intuscare.com/"}
/>
```

---

### 4. **Skills Section**
The "Skills" section dynamically showcases my technical proficiencies:
- **Marquee Effect:** A scrolling animation implemented with `react-fast-marquee`.
- **Dynamic Badges:** Skill names are rendered as badges, emphasizing adaptability.

#### Code Example:
```jsx
<Marquee speed={15} gradient gradientColor="#f3f3e3">
  <SkillsBadge />
</Marquee>
```

---

### 5. **Contact Section**
The "Contact" section allows users to get in touch via:
- **Interactive Buttons:** Links to GitHub, LinkedIn, and email.
- **Styled Form:** Includes input fields for name, email, and message, ensuring accessibility and usability.

---

## 🛠 Design Principles

1. **Responsive Design:** Tailwind CSS ensures components adapt seamlessly to different screen sizes.
2. **Reusable Components:** Each UI element (e.g., `<ProjectCard>`, `<SkillsBadge>`) is modular, making it easy to scale.
3. **Animations:** Framer Motion enhances user engagement without compromising performance.
4. **Optimized Assets:** Images and static resources are optimized using Next.js’s `Image` component and `public/` directory.

---

## 🚀 Future Enhancements
- **Accessibility Improvements:** Ensure WCAG compliance for all elements.
- **Search Functionality:** Add a search bar to quickly navigate projects or skills.
- **Backend Integration:** Implement an API for dynamic content updates.
- **Global State Management:** Use Zustand or Redux for shared state across components.


