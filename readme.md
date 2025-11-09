Project Management System

A complete Project Management Web Application built with Next.js + Tailwind CSS on the frontend and Node.js + Express + PostgreSQL on the backend.
This system allows users to manage projects, tasks, timelines, and resources in one place

Tech Stack
Layer	Technology
Frontend	Next.js (App Router) + Tailwind CSS
Backend	Node.js + Express.js
Database	PostgreSQL (Managed with pgAdmin)
Auth	JWT (JSON Web Tokens)
State Management	React Hooks / RTK Query (if used)

Features

Create & manage projects

Add tasks with due dates

Timeline view using Gantt chart

Dark/Light mode UI

Secure backend API (JWT based authentication)

Fully responsive UI
📸 Screenshots

<img width="1920" height="1080" alt="Screenshot 2025-11-09 012554" src="https://github.com/user-attachments/assets/43c4138d-5514-4de8-89fb-b318f857fe2b" />
<img width="1920" height="1080" alt="Screenshot 2025-11-09 012548" src="https://github.com/user-attachments/assets/4b6c555c-d33a-4722-9778-6598e6158636" />
<img width="1920" height="1080" alt="Screenshot 2025-11-09 004740" src="https://github.com/user-attachments/assets/0c35327f-5b37-4804-bd5a-a5580bfccbf9" />
  
Add your UI screenshots here

Folder Structure
root/
 ├── client/   → Next.js frontend
 └── server/   → Node.js + Express backend

Getting Started
1. Clone Repository
   git clone <repo-url>
cd project-management-system
2. Client Setup (Next.js)
   cd client
npm install
npm run dev

Open → http://localhost:3000
3. Server Setup (Express + PostgreSQL)
cd server
npm install
npm run dev

Deployment

Frontend can be deployed on:

Vercel

Netlify

Backend can be deployed on:

Render

Railway

Future Enhancements

Team assignments

Export reports

Notification system

File upload per task

Author

Project developed by Natan Muleta
For academic & practical real-world project management experimentation.
