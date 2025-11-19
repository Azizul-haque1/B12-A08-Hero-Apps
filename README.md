# 🚀 Hero-Apps  
### A Modern App Store Interface Built with React

Hero-Apps is a fully responsive, multi-page React application designed to simulate a modern App Store experience.  
Users can browse apps, search in real time, view full details, install/uninstall apps using LocalStorage, and explore visual charts powered by Recharts.

🔗 **Live Demo:** https://b12-a08-hero-apps-ah1.netlify.app/

---

## ✨ Features

### 🧭 Core Layout
- Fully responsive UI  
- Header with active navigation + GitHub link  
- Creative custom footer  
- Smooth loading animations  

### 📱 App Browsing
- Home page with banner, stats, and top apps  
- All Apps page with:
  - Live search (case-insensitive)  
  - App count indicator  
  - Real-time filtering  

### 📊 App Details
- Full app information (image, rating, downloads, description)  
- Install button with LocalStorage support  
- Toast notifications  
- Review chart created with **Recharts**  

### 📦 My Installation Page
- Shows all installed apps  
- One-click uninstall  
- Sorting by download count (High → Low / Low → High)  
- Instant UI and LocalStorage sync  

### ⚠️ Error Handling
- Custom 404 error page  
- “No App Found” fallback  
- Route reload support on Netlify

---

## 🛠️ Tech Stack

- **React.js**  
- **React Router**  
- **Recharts**  
- **LocalStorage API**  
- **CSS / Tailwind CSS**  
- **Netlify (Deployment)**  

---

## 📥 Installation & Setup

```bash
git clone <your-repository-url>
cd hero-apps
npm install
npm run dev
