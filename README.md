# 🧑‍💻 Hamidu Sodiq Omeiza - Developer Portfolio

A modern and responsive developer portfolio built with **React**, showcasing my skills, featured projects, and a contact form integrated with **EmailJS**.

---

## 🚀 Features

- ⚡ Smooth scrolling navigation
- 💼 Scroll-triggered animations using GSAP
- 📂 Data-driven sections powered by local JSON files
- 📧 Contact form with EmailJS integration
- 📱 Fully responsive and mobile-friendly layout
- 🎨 Styled with TailwindCSS

---

## 🖥️ Tech Stack

- **React**
- **TailwindCSS**
- **GSAP + ScrollTrigger**
- **EmailJS**
- **React Router**
- **Custom React Hooks**

---

## 📁 Folder Structure

```
src/
├── components/       # Reusable UI components (Card, Wrapper, Footer, etc.)
├── pages/            # Page-level components (Homepage)
├── hooks/            # Custom hooks like useFetchJson
├── assets/           # Static images, icons
└── App.jsx           # App entry with routes

public/
└── data/             # Local JSON data (about.json, skills.json, projects.json)
```

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/machiloop/portfolio-website.git
cd portfolio-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

---

## 🔐 EmailJS Setup

The contact form uses [EmailJS](https://www.emailjs.com) for sending messages without a backend.

### Steps:

1. Create an EmailJS account and email service
2. Create an email template
3. Get your:
   - **Service ID**
   - **Template ID**
   - **Public Key**
4. Replace the placeholders in the `sendEmail` function in `Homepage.jsx`

---

## 🔗 Live Demo

[View the live portfolio](https://portfolio-website-liard-nu.vercel.app/)

---

## 📸 Screenshots

### 🏠 Homepage

![Homepage](/public/screenshots/homepage.png)

### 💼 Projects Section

![Projects](/public/screenshots/projects.png)

### 📧 Contact Form

![Contact Form](/public/screenshots/contact.png)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Hamidu Sodiq Omeiza**  
Full-Stack Web + Mobile Developer  
[LinkedIn](https://linkedin.com/in/hsodiq14)
