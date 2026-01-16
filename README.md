# 🍽️ AI Calorie Tracker – UI

A modern, responsive **Angular UI** for logging meals and tracking calories using multiple input methods (Standard, Smart, Image). This repository focuses purely on the **frontend user experience**.

---

## ✨ Features

* 🥗 **Standard Entry** – Manual food name & quantity input
* 🤖 **Smart Entry** – Natural language meal description
* 📸 **Image Entry** – Upload food images for AI analysis
* 🧭 **Tabbed Navigation** inside a unified card layout
* 🎨 Clean, modern UI with consistent design system
* 📱 Fully responsive & mobile-friendly

---

## 🛠️ Tech Stack

* **Framework:** Angular (Standalone Components)
* **Styling:** CSS (custom, no UI framework)
* **Icons:** Emoji / SVG-ready
* **Routing:** Angular Router with Layout Component

---

## 📂 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── log-meal-layout/
│   │   ├── standard-input/
│   │   ├── smart-input/
│   │   ├── image-input/
│   ├── app.component.html
│   ├── app.routes.ts
│   └── app.component.ts
├── styles.css
└── main.ts
```

---

## 🧱 Layout Architecture

The UI uses a **LogMealLayoutComponent** as a wrapper:

* Header title
* Subtitle
* Tab navigation (Standard / Smart / Image)
* `<router-outlet>` for child views

This ensures:

* Tabs stay **inside the card**
* Consistent spacing & styling
* Clean route-based navigation

---

## 🧭 Routes Overview

```ts
/log
  ├── standard
  ├── smart
  └── image
```

Each tab is a **lazy-loaded standalone component**.

---

## 🎨 Styling Guidelines

* Card-based UI with soft shadows
* Green accent color (`#22c55e`)
* Rounded corners (12–16px)
* Centered content with max-width
* No global CSS overrides that break components

---

## 🚀 Getting Started

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Run the App

```bash
ng serve
```

Open: `http://localhost:4200`

---

## 📸 Image Upload UI

* Custom styled file upload button
* Displays selected file name
* Disabled analyze button until file is chosen

---

## 🔮 Future Enhancements

* Image preview before upload
* Loading & success states
* Dark mode
* Accessibility improvements (ARIA)
* UI animations

---

## 🤝 Contribution

Feel free to:

* Improve UI/UX
* Refactor CSS
* Add animations
* Enhance responsiveness


---

### Built with ❤️ for clean UI and great UX
