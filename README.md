# 🧾 FinTrack Backend

FinTrack Backend is a RESTful API service built using Node.js and Express.js.  
It powers the FinTrack application by handling authentication, user management, and financial transaction operations.

---

## 🚀 Project Overview

This backend application provides secure APIs for managing personal finance data such as:

- User authentication (register & login)
- Protected routes using JWT
- Income and expense tracking
- MongoDB-based data storage
- Clean MVC folder structure

The backend is designed to integrate seamlessly with a React or mobile frontend.

---

## 🛠️ Tech Stack

- **Node.js** – JavaScript runtime  
- **Express.js** – Backend framework  
- **MongoDB** – NoSQL database  
- **Mongoose** – MongoDB ODM  
- **JWT (JSON Web Token)** – Authentication  
- **bcrypt** – Password hashing  
- **dotenv** – Environment variable management  
- **Nodemon** – Development auto-reload  

---

## 📁 Project Structure

FinTrack_Backend/
│
├── config/ # Database configuration
├── controllers/ # Business logic
├── middleware/ # Auth & error middleware
├── models/ # Mongoose schemas
├── routes/ # API routes
├── utils/ # Utility functions
│
├── .env
├── .gitignore
├── index.js # Entry point
├── package.json
└── README.md


---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key


---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/prasadrprabhu77/FinTrack_Backend.git
Navigate to the project directory:

cd FinTrack_Backend
Install dependencies:

npm install
▶️ Running the Server
Start the server:

npm start
For development mode:

npm run dev
Server will run on:

http://localhost:5000
🔐 Authentication
Authentication is handled using JWT tokens.

On login/register, a token is generated

Token must be sent in headers for protected routes

Example:

Authorization: Bearer <your_token>
📡 API Endpoints
🔑 Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login existing user
👤 User Routes
Method	Endpoint	Description
GET	/api/users/me	Get logged-in user profile
💰 Transaction Routes
Method	Endpoint	Description
GET	/api/transactions	Get all transactions
POST	/api/transactions	Add new transaction
DELETE	/api/transactions/:id	Delete transaction
🧪 Example Request
Register User
POST /api/auth/register
Content-Type: application/json
{
  "name": "Prasad",
  "email": "prasad@example.com",
  "password": "123456"
}
Login User
POST /api/auth/login
Content-Type: application/json
{
  "email": "prasad@example.com",
  "password": "123456"
}
✅ Features
Secure user authentication

JWT protected APIs

Income and expense tracking

MongoDB database integration

Clean and scalable architecture

Easy frontend integration

🚀 Deployment
You can deploy this backend on:

Render

Railway

Heroku

AWS EC2

DigitalOcean

Make sure environment variables are configured on the deployment platform.

📄 License
This project is licensed under the MIT License.

👨‍💻 Author
Prasad Prabhu

GitHub:
https://github.com/prasadrprabhu77