# Backend - Notes Application

This is the backend API for the Notes Application built using Node.js, Express, and MongoDB.

⚠️ This project is built only for learning purposes.

---

## 🚀 Features

- User Authentication
- JWT Cookie Authentication
- CRUD Operations for Notes
- Protected Routes
- MongoDB Database Integration

---

## 🛠 Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Cookie Parser
- CORS
- dotenv

---

## 📁 Folder Structure

backend  
│  
├── controllers  
├── middleware  
├── models  
├── routes  
├── config  
├── app.js  
└── server.js  

---

## ⚙️ Environment Variables

Create a `.env` file in the backend folder.

PORT=5000  
MONGO_URI=your_mongodb_connection  
JWT_SECRET=your_secret_key  

---

## ▶️ Run Backend Locally

Install dependencies

npm install

Run server

npm run dev

Server will run on

http://localhost:5000

---

## 📌 API Endpoints

### Authentication

POST /auth/register  
POST /auth/login  
POST /auth/logout  
GET  /auth/me  

### Notes

GET    /notes  
POST   /notes  
PATCH  /notes/:id  
DELETE /notes/:id  

---

## 🔐 Authentication

Authentication is handled using JWT stored in HTTP-Only cookies for security.

Protected routes require a valid token.

---

## ⚠️ Disclaimer

This backend is built only for learning and practice purposes.