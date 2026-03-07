# Frontend - Notes Application

This is the frontend of the Notes Application built using React + Vite + Tailwind CSS.

⚠️ This project is created only for learning purposes.

---

## 🌐 Live Website

https://note-application-dusky.vercel.app/

---

## 🚀 Features

- User Login & Register
- Protected Pages
- Create Notes
- Edit Notes
- Delete Notes
- Responsive UI
- Toast Notifications

---

## 🛠 Technologies Used

- React
- Vite
- Tailwind CSS
- React Router
- Axios
- React Hot Toast

---

## 📁 Folder Structure

frontend  
│  
├── components  
│  
├── pages  
│   ├── Home.jsx  
│   ├── Login.jsx  
│   ├── Register.jsx  
│   ├── NotesList.jsx  
│   └── CreateNote.jsx  
│  
├── utils  
│   └── axios.js  
│  
├── App.jsx  
└── main.jsx  

---

## ⚙️ Installation

Install dependencies

npm install

Run development server

npm run dev

App will run on

http://localhost:5173

---

## 🔗 Backend API

Frontend communicates with the backend deployed on Render using Axios.

Example configuration:

axios.create({
  baseURL: backend_url,
  withCredentials: true
})

---

## ⚠️ Note

This project is built for learning full-stack development with React.