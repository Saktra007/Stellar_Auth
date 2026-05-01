# 🌌 Stellar Auth | Premium 3D Glassmorphism Portal

![React](https://img.shields.io/badge/React-18-blue)
![Three.js](https://img.shields.io/badge/Three.js-R3F-black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.2-38B2AC)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-61DAFB)
![Vite](https://img.shields.io/badge/Build-Vite-646CFF)

**Stellar Auth** is a high-end authentication interface that merges **3D Rendering** technology with **Glassmorphism Design**. It provides an immersive user experience (UX) through dynamic card tilting based on mouse movement and a living 3D starfield background.

---

## 🚀 Live Demo

🔗 [stellar-auth.vercel.app](https://stellar-auth-bsfs6gq66-saktras-projects.vercel.app/)

---

## ✨ Key Features

- **🌀 Interactive 3D Background**: Powered by **Three.js** (React Three Fiber) to create a gentle, GPU-accelerated celestial environment.
- **🔮 Dynamic Glassmorphism**: High-fidelity frosted glass effects using advanced `backdrop-blur` and `useMotionTemplate` for mouse-following spotlights.
- **📐 Physics-Based Tilt**: Custom `useMouseTilt` hook that calculates rotation angles to create a tactile 3D floating effect.
- **⚡ Seamless State Switching**: Fluid transitions between Login and Register states powered by **Framer Motion** layout projections.
- **📱 Ultra Responsive**: A flexible grid architecture optimized for flawless performance across mobile, tablet, and desktop screens.
- **🛡️ Smart Validation**: Real-time error handling and feedback integrated directly into the form logic.

---

## 🛠️ Tech Stack

- **React.js**: Functional components with Hooks for efficient state management.
- **Three.js / @react-three/fiber**: For high-performance 3D graphics rendering.
- **Framer Motion**: For production-ready physics animations and smooth transitions.
- **Tailwind CSS**: For utility-first styling and sophisticated glass effects.
- **Lucide React**: For clean, consistent, and modern iconography.

---

## 📂 Project Structure

The project follows a clean, modular architecture for maximum scalability:

```txt
src/
├── components/
│   ├── auth/           # Core Authentication components
│   │   ├── index.js    # Centralized component exports
│   │   ├── LoginForm.jsx
│   │   ├── RegisterForm.jsx
│   │   └── SidePanel.jsx
│   ├── ui/             # Reusable UI Atoms
│   │   └── GlassCard.jsx # Perspective-ready glass container
│   └── visual/
│       └── Background3D.jsx # R3F Canvas & Scene setup
├── hooks/
│   └── useMouseTilt.js # Mouse tracking & tilt logic
├── index.css           # Tailwind directives & Global styles
├── App.jsx             # Main Orchestrator & Perspective Root
└── main.jsx            # React entry point
```

---

## ⚙️ Installation & Setup

1. Clone the repository

```bash
git clone [https://github.com/Saktra007/Stellar_Auth_3D.git](https://github.com/Saktra007/Stellar_Auth_3D.git)
```

2. Navigate to the project folder

```bash
cd Stellar_Auth
```

3. Install dependencies

```bash
npm install
```

4. Run the project locally

```bash
npm run dev
```

---

## 👨‍💻 Developed By

**Saktra C.**
_Professional Frontend Developer & Freelancer based in Phnom Penh._
_Specializing in React, Tailwind CSS, and Modern UI/UX Trends._

---

## 📜 License

This project is for personal portfolio use. All rights reserved.

---

> [!IMPORTANT]
> For the best visual experience, ensure your browser supports **WebGL 2.0** and has Hardware Acceleration enabled.
