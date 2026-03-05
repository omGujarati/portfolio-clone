# Figma to React.js (Portfolio UI)

This project is the implementation of **Task 1** assigned during the Full Stack Developer interview process.

The objective was to convert the provided **Figma design** into a **fully responsive React.js application** while maintaining visual accuracy, proper layout structure, and clean component architecture.

---

## 📌 Task Objective

Convert the first two sections of the given Figma design into a responsive React application using modern frontend practices.

✅ Figma Design
https://www.figma.com/design/anWAMdHd4HWGRTexYLRcVo/Portfolio-Design--Community-

---

## 🧱 Tech Stack

* **React.js**
* **Material UI (MUI)**
* **AOS (Animate On Scroll)**
* **Vanilla Tilt**
* **Custom CSS / MUI SX Styling**

---

## ✨ Implemented Features

### 🎨 UI Implementation

* Pixel-accurate Figma to React conversion
* Custom gradients & glow effects
* Typography matching design system
* Proper spacing and layout alignment
* Dark theme portfolio design

### 📱 Responsive Design

* Mobile responsive
* Tablet optimized
* Desktop layout support
* Flexible container system

### ⚡ Animations & Interactions

* Scroll animations using AOS
* Typing text animation in Hero section
* Decrypted hover text effect
* 3D profile image tilt interaction
* Smooth hover transitions

---

## 📂 Project Structure

```
src
│
├── components
│   ├── hero
│   |  ├── Hero.jsx
│   |  ├── HeroAvatar.jsx
│   |  ├── HeroIntro.jsx
│   |  └── HeroTyping.jsx
│   | 
│   ├── experience
│   |  ├── WorkExperience.jsx
│   |  ├── ExperienceCard.jsx
│   |  └── IconPlatform.jsx
│   │
│   └── layout
│      └── Header.jsx
|
├── pages
│  └── Home.jsx
| 
├── shared
│  ├── DecryptText.jsx
│  ├── TypingText.jsx
│  └── HamburgerButton.jsx
| 
├── styles
│  ├── base.css
│  ├── tokens.css
│  ├── utilities.css
│  ├── main.css
|  |
│  |  ├── hero
│  |  └── hero.css
|  |
│  ├── experience
│  |  └── work.css
|  |
│  ├── layout
│  |  ├── header.css
│  |  └── container.css
|  |
│  └── components
│     ├── button.css
│     └── card.css
├── theme
│  └── theme.js
|
├── App.js
└── index.js

```
### ⚙️ Architecture Principles

* **Feature-based component structure for scalability**
* **Reusable shared components**
* **Modular CSS structure instead of inline styles**
* **Clean separation between UI, layout, and shared logic**
---

Animation support using AOS and VanillaTilt
---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

---

### 2️⃣ Install Dependencies

```
npm install
```

---

### 3️⃣ Run Project

```
npm start
```

Application runs at:

```
http://localhost:3000
```

---

## 🎯 Development Focus

This task focuses on:

* Figma to Code accuracy
* Component-based architecture
* Responsive layout design
* Animation integration
* Clean and maintainable React code

---
