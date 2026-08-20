# 🚀 AI Resume Builder

A full-stack **AI-powered Resume Builder** built with the **MERN stack**. The application allows users to create, edit, manage, preview, and share professional resumes with the help of AI-powered content enhancement.

The project combines a modern React frontend with a Node.js/Express backend, MongoDB for data persistence, Google Gemini for AI-powered content generation, and ImageKit for image upload and processing.

---

## 🌐 Live Demo

🔗 **Live Application:** `https://ai-resume-builder-app-red.vercel.app`

🔗 **Backend API:** `https://resume-builder-api-382l.onrender.com`

---

## ✨ Features

### 👤 Authentication

* User registration
* User login
* JWT-based authentication
* Protected routes
* Secure password handling
* User-specific resume management

### 📄 Resume Builder

* Create new resumes
* Edit existing resumes
* Delete resumes
* Update resume information
* Manage multiple resumes
* Live resume preview
* Professional resume templates

### 🧠 AI-Powered Features

The application integrates **Google Gemini AI** to help users improve their resume content.

AI features include:

* Generate professional resume summaries
* Improve job descriptions
* Enhance existing resume content
* Create better descriptions based on user-provided information

### 🖼️ Image Management

Using **ImageKit**, users can upload and manage profile images.

### 🔗 Shareable Resumes

Users can generate/share an online version of their resume so that recruiters or other people can view it through a public URL.

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Tailwind CSS
* React Router
* Axios

## Backend

* Node.js
* Express.js
* REST API
* JWT Authentication
* bcrypt
* dotenv
* CORS

## Database

* Mongoose
* MongoDB Atlas

## AI

* Google Gemini API

## Image Processing

* ImageKit

## Deployment

* Vercel
* Render
* MongoDB Atlas

---

# 📂 Project Structure

```text
AI-Resume-Builder/
│
├── client/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── app/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── configs/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .env
│   ├── package.json
│   ├── index.html
│   └── ...
│
├── server/
│   │
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── .gitignore
└── README.md
```

---

# ⚙️ Getting Started

Follow the steps below to run the project locally.

## 1. Clone the Repository

```bash
git clone https://github.com/Mansi-prasad/AI-Resume-Builder-App
```

Navigate into the project:

```bash
cd AI-Resume-Builder
```

---

## 2. Install Dependencies

### Frontend

```bash
cd client
npm install
```

### Backend

Open another terminal:

```bash
cd server
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file inside the backend directory.

## Backend `.env`

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:5173

OPENAI_API_KEY=your_gemini_api_key

IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key

OPENAI_BASE_URL=your_openai_base_url

OPENAI_MODEL=your_openai_model
```

---

## Frontend `.env`

If you're using Vite:

```env
VITE_API_URL=http://localhost:5000
```

For production:

```env
VITE_API_URL=https://your-render-backend.onrender.com
```

---

# 🗄️ MongoDB Setup

This project uses  **MongoDB Atlas** for a cloud-hosted database.

### Steps

1. Create a MongoDB Atlas account.
2. Create a new cluster.
3. Create a database user.
4. Configure network access.
5. Copy your MongoDB connection string.
6. Add it to your backend `.env`.

Example:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/resume-builder
```

---

# 🤖 Google Gemini Setup

The project uses Google's Gemini API to provide AI-powered resume content enhancement.

Add your Gemini API key to the backend environment:

```env
GEMINI_API_KEY=your_api_key
```

**Never expose the Gemini API key in the React frontend.**

---

# 🖼️ ImageKit Setup

ImageKit is used for image upload and image processing.
Create an ImageKit account and obtain your credentials.
Add them to your backend environment:
Keep the private key on the backend only.

---

# ▶️ Running the Application

## Start Backend

```bash
cd server
npm run server
```

The backend should run on:

```text
http://localhost:5000
```

---

## Start Frontend

Open another terminal:

```bash
cd client
npm run dev
```

The frontend should run on:

```text
http://localhost:5173
```

---

# 🛠️ Future Improvements

Possible improvements for future versions:

* [ ] Add more resume templates
* [ ] Add drag-and-drop resume sections
* [ ] Add ATS resume scoring
* [ ] Add LinkedIn profile import
* [ ] Add GitHub profile integration
* [ ] Add job-description-based resume optimization
* [ ] Add dark mode
* [ ] Add resume analytics
* [ ] Add email verification
* [ ] Add password reset
* [ ] Add Google/GitHub OAuth

---

# 📚 What I Learned

Building this project provides practical experience with:

* MERN stack development
* React component architecture
* REST API development
* MongoDB data modeling
* Express middleware
* JWT authentication
* CRUD operations
* Protected routes
* Environment variables
* Image upload and processing
* Responsive UI development
* Production deployment
* Frontend/backend communication

---

## 📸 Screenshots

Add screenshots of your application here.

```text
screenshots/
├── home.png
├── dashboard.png
├── resume-editor.png
├── resume-preview.png
└── login.png
```

Example:

### 🏠 Home Page

![Home Page](./screenshots/home.png)

### 🔐 Login

![Login Page](./screenshots/login.png)

### 📊 Dashboard

![Dashboard](./screenshots/dashboard.png)

### 📝 Resume Editor

![Resume Editor](./screenshots/resume-editor.png)

### 👀 Resume Preview

![Resume Preview](./screenshots/resume-preview.png)

---