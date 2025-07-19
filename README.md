# 🚀 Advance Auth — MERN Stack Authentication System

![GitHub repo size](https://img.shields.io/github/repo-size/yourusername/advance-auth)
![GitHub stars](https://img.shields.io/github/stars/yourusername/advance-auth?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/advance-auth)
![GitHub license](https://img.shields.io/github/license/yourusername/advance-auth)

---

Welcome to **Advance Auth** — a complete, secure, and scalable **authentication system** built with the popular **MERN stack**:

- **M**ongoDB for data storage
- **E**xpress.js for backend API
- **R**eact.js for frontend UI
- **N**ode.js runtime environment

This project demonstrates a robust authentication flow including signup, email verification, login, password reset, and protected routes.

> ⚠️ **Important:** This project uses [Mailtrap](https://mailtrap.io/) for email testing in a sandbox environment. Due to Mailtrap's demo domain sending limits, **this project is not publicly deployed**. It's intended primarily for local development and learning purposes.

---

## 💡 Project Overview

Advance Auth handles the full lifecycle of user authentication including:

- User signup with email verification
- Secure login and logout with JWT authentication
- Password recovery via forgot/reset password flow
- Protected routes ensuring authorized access only
- Realistic email sending via **Mailtrap** sandbox for development and testing
- Responsive and user-friendly UI with React and React Router

---

## 🔥 Features

### Backend

- **User Signup:** Create new accounts with validation and store users securely in MongoDB.
- **Email Verification:** Sends verification emails using Mailtrap with tokenized verification links.
- **Login & Logout:** Authenticate users, generate JWT tokens, and securely manage sessions.
- **Forgot & Reset Password:** Allows users to request password resets via email and reset securely.
- **Protected API Routes:** Middleware to restrict access to authenticated and verified users only.
- **Welcome Email Templates:** Custom HTML email templates for signup confirmation and password resets.

### Frontend

- **Signup Page:** Clean UI with form validation, user feedback, and API integration.
- **Login Page:** Simple and secure login form with error handling.
- **Email Verification Page:** Guides users to verify their email address.
- **Dashboard:** Protected landing page after successful login.
- **Forgot Password Flow:** Request reset links easily from the UI.
- **Reset Password Page:** Enter new password securely with token validation.
- **Route Protection:** React Router guards to protect private routes and redirect unauthenticated users.

---

## 🛠️ Getting Started

### Backend Setup

1. Clone the repo and navigate to backend:
   ```bash
   cd backend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create `bash.env` file with:
   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   MAILTRAP_USER=your_mailtrap_username
   MAILTRAP_PASS=your_mailtrap_password
   ```
4. Start the server:
   ```bash
    npm start
   ```

### Frontend Setup

1. Navigate to frontend:

   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
