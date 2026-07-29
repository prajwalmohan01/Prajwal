# Prajwal G N — Personal Portfolio & Showcase

A modern, high-performance developer portfolio built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Motion (Framer Motion)**. Features a live GitHub integration, dynamic project showcases, interactive tech stack explorer, dark futuristic aesthetic, and contact form integration.

![Portfolio Preview](https://prajwalmohan04.vercel.app)

---

## ✨ Key Features

- 💼 **Interactive Project Showcase**: Detailed project pages with tech stack breakdowns, key features, architecture details, and live/demo links.
- 🐙 **Live GitHub Integration**: Fetches public profile stats, followers, repository count, and top pinned/updated repositories directly from the GitHub API.
- ⚡ **Interactive Skills Matrix**: Filterable skills section grouped by frontend, backend, tools, and devops with proficiency indicators.
- 📄 **Resume / Experience Timeline**: Downloadable resume integration with visual career milestone timeline and education details.
- 📬 **Interactive Contact Form**: Custom form validation with smooth toast notifications and direct communication channels.
- 🎨 **Sleek Aesthetic & Animations**: Built with Tailwind CSS and Framer Motion for smooth micro-interactions, responsive grid layouts, and glassmorphism styling.
- 🚀 **Vercel & SPA Ready**: Fully configured single-page application router with rewrite configuration for smooth page refreshes on Vercel or Netlify.

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion / Framer Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)

---

## 📁 Directory Structure

```text
├── public/              # Static assets & favicon
├── src/
│   ├── components/      # Reusable UI components (Navbar, Footer, ProjectCard, GithubProfile, etc.)
│   ├── data/            # Static configuration files (info.ts, projects.ts, skills.ts)
│   ├── pages/           # Application views (Home, ProjectDetails, Resume)
│   ├── types.ts         # Global TypeScript interfaces
│   ├── App.tsx          # Main Router configuration
│   ├── main.tsx         # React application entrypoint
│   └── index.css        # Global Tailwind CSS imports
├── vercel.json          # SPA rewrite rules for Vercel deployment
├── vite.config.ts       # Vite build configuration
└── package.json         # Project metadata & scripts
```

---

## 🚀 Quick Start & Development

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** or **yarn** installed.

### 2. Clone the Repository
```bash
git clone https://github.com/prajwalmohan01/prajwal.git
cd prajwal
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the port specified in terminal) in your browser.

### 5. Build for Production
```bash
npm run build
```
The compiled output will be generated in the `dist/` directory.

---

## 🌐 Deploying to Vercel

Eg:

1. Push your repository to **GitHub**.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your `prajwal-portfolio` GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Leave Build Command as `npm run build` and Output Directory as `dist`.
6. Click **Deploy**!

> **Note**: The included `vercel.json` ensures all route refreshes (e.g., `/project/1`) correctly fallback to `index.html`.

---

## 👤 Author & Contact

**Prajwal G N**
- **GitHub**: [@prajwalmohan01](https://github.com/prajwalmohan01)
- **LinkedIn**: [Prajwal G N](https://linkedin.com/in/prajwalmohan)
- **Portfolio**: [Prajwal G N Portfolio](https://prajwalmohan04.vercel.app)

---

## 📄 License

This project is licensed under the **MIT License**.
