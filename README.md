# auth-dashboard
A full-stack authentication dashboard with user management, role-based access, and analytics-ready architecture.

🚀 Tech Stack
Frontend

React (Vite)

Tailwind CSS

Axios

React Router

Backend

Node.js

Express.js

MongoDB (Mongoose)

JWT Authentication

bcrypt

Tools

Postman (API testing)


#Backend Setup
cd backend
npm install

Database Setup

Install MongoDB locally or use MongoDB Atlas

Create a database named: auth_dashboard

Collections will auto-create on first run

Run Backend
npm run dev


Backend runs at:
👉 http://localhost:5000

3️# Frontend Setup
cd frontend
npm install

Environment Variables (frontend/.env)
VITE_API_BASE_URL=http://localhost:5000/api

Run Frontend
npm run dev


Frontend runs at:
👉 http://localhost:5173

🔐 Demo Credentials (Optional)

You can either register new users or use seeded accounts.

Role	Email	Password

User	user@test.com
	User@123
