# 🚀 My Personal Portfolio — React + Vite

A modern, responsive personal portfolio website built with React.
Supports dark/light mode, smooth scrolling, and is beginner-friendly!

---

## 📁 Project Structure

```
portfolio/
├── index.html                  ← HTML entry point
├── src/
│   ├── main.jsx                ← React app starts here
│   ├── App.jsx                 ← Root component (dark mode, routing)
│   ├── components/
│   │   ├── Navbar.jsx          ← Sticky navigation bar
│   │   ├── Hero.jsx            ← First section (your intro)
│   │   ├── About.jsx           ← About me section
│   │   ├── Skills.jsx          ← Skills grid
│   │   ├── Projects.jsx        ← Projects grid
│   │   ├── ProjectCard.jsx     ← Reusable single project card
│   │   ├── Contact.jsx         ← Contact form
│   │   └── Footer.jsx          ← Page footer
│   ├── data/
│   │   ├── projects.js         ← ⭐ ADD YOUR PROJECTS HERE
│   │   └── skills.js           ← ⭐ ADD YOUR SKILLS HERE
│   └── styles/
│       ├── global.css          ← Colors, fonts, buttons (design system)
│       ├── Navbar.css
│       ├── Hero.css
│       ├── About.css
│       ├── Skills.css
│       ├── Projects.css
│       ├── ProjectCard.css
│       ├── Contact.css
│       └── Footer.css
```

---

## ▶️ How to Run

### Step 1 — Install dependencies
```bash
npm install
```

### Step 2 — Start the dev server
```bash
npm run dev
```

### Step 3 — Open in browser
Visit: **http://localhost:5173**

---

## ✏️ How to Customize

### Add a project
Open `src/data/projects.js` and add an object to the array:
```js
{
  id: 4,                          // increment the number
  title: "My New Project",
  description: "What it does...",
  techStack: ["React", "Node.js"],
  image: null,                    // or "/images/project.png"
  githubLink: "https://github.com/...",
  liveLink: null,                 // or "https://yoursite.com"
}
```

### Change your name/bio
- Edit `src/components/Hero.jsx` — look for the `EDIT THIS` comments
- Edit `src/components/About.jsx` — update the text and facts
- Edit `src/components/Footer.jsx` — update name and links

### Change colors
Open `src/styles/global.css` and edit the CSS variables under `:root {}` and `.dark {}`.

### Change fonts
The site uses **Syne** (headings) + **DM Sans** (body) from Google Fonts.
To change them, edit the `@import` line in `global.css`.

---

## 🌐 Deploy to Netlify (free)

```bash
npm run build        # Creates a "dist/" folder
```
Then drag the `dist/` folder to https://app.netlify.com/drop — done!

---

## 📬 Making the Contact Form Actually Send Emails

1. Go to https://formspree.io and create a free account
2. Create a new form and get your form ID (looks like `xpzgkwjd`)
3. In `Contact.jsx`, replace the `handleSubmit` function with:

```js
const handleSubmit = async (e) => {
  e.preventDefault()
  const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' },
  })
  if (res.ok) setSubmitted(true)
}
```
