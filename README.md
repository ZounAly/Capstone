# 🍋 Little Lemon Capstone Project  

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)  
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?logo=tailwindcss&logoColor=white)  
![Vitest](https://img.shields.io/badge/Tests-Vitest-6E9F18?logo=vitest&logoColor=white)  
![License](https://img.shields.io/badge/License-MIT-green.svg)  

A **restaurant reservation system** built with **React** as a capstone project.  
The app allows users to book tables by selecting date, time, number of guests, and occasion.  

It showcases:  
- Modern **React component-driven development**  
- **Form validation** (HTML5 + client-side)  
- **Unit testing** with Vitest & React Testing Library  
- Responsive design with **TailwindCSS**  

---

## 🚀 Demo  
👉 [Live Demo](#) _(coming soon)_  

---

## ⚙️ Installation & Setup  

```bash
# Clone repository
git clone https://github.com/your-username/capstone.git
cd capstone

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
npm run preview
```

---

## 🛠 Usage  

1. Open the app in your browser (`http://localhost:5173` if using Vite).  
2. Fill out the reservation form on the reservation page:  
   - Date → must be valid (not in the past).  
   - Time → fetched dynamically using `fetchAPI` provided by Coursera based on the selected date.  
   - Guests → must be greater than or equal to **1**.  
   - Occasion → choose from options (Birthday, Anniversary, etc.).  
3. Submit the form to confirm booking.  

---

## 🖥 Tech Stack  

- **React 18**  
- **Vite** (build tool)  
- **TailwindCSS** (UI styling)  
- **React Testing Library + Vitest** (testing)  
- Custom **form validation logic**  

---

## ✅ Tests  

This project includes unit tests for core functionality:  
- Form renders correctly with the right attributes.  
- `initializeTimes()` returns expected values.  
- `updateTimes()` updates correctly and returns values provided in state.  
- Unit tests for **invalid states** (empty/incorrect inputs).  
- Unit tests for **valid states** and successful form submission.  

Run tests with:  

```bash
npm run test
```

---

## 📜 License  

This project is licensed under the **MIT License**.  
Free to use, modify, and distribute with attribution.  

---

## 👨‍💻 Author  

**Zoun Ali Zoofi**  
- GitHub: [ZounAly](https://github.com/ZounAly)  
