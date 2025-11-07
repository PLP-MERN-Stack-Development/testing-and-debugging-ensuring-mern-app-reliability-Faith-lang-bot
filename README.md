## MERN Bug Tracker

A full-stack MERN application for reporting, viewing, updating, and deleting bugs.
Project includes full testing setup (backend + frontend), debugging tools, and clean error handling.

# Project Setup
 1. Clone the Repository
git clone <your-repo-url>
cd <project-folder>

# Backend Setup (server/)
 Install dependencies
cd server
npm install

 Start MongoDB

Make sure MongoDB is running locally:

Windows (MongoDB Compass or local service)

Or:

mongod

 Create .env file

Inside server/:

MONGO_URI=mongodb://127.0.0.1:27017/bugtracker
PORT=5000

 Start backend server
npm run dev


 You should see:

Server running on port 5000
✅ MongoDB connected: 127.0.0.1

 Frontend Setup (client/)
 Install dependencies
cd client
npm install

 Start React app
npm start


The frontend will open at:

http://localhost:3000

 Application Features
 Users can:

Report new bugs

View all bugs

Update bug status

Delete bugs

See instant updates without refresh

Backend:

Node.js + Express

MongoDB + Mongoose

Clean API routes

Error handling middleware

Frontend:

React + React Router

Axios for API requests

Material UI

Centralized API service

Components:

BugList

AddBug

Navbar

ErrorBoundary

Testing Guide

This project includes tests for both backend and frontend.

 Backend Testing
Install testing dependencies:
npm install --save-dev jest supertest jest-mock

 Run backend tests:
npm test

 Backend tests include:
 Unit Tests

Validation helper functions

Status update logic

Error handlers

✔ Integration Tests

POST /api/bugs — create bug

GET /api/bugs — fetch bugs

PUT /api/bugs/:id — update bug

DELETE /api/bugs/:id — delete bug

✔ Mocking

Database calls mocked with jest-mock

No real MongoDB required during tests

 Frontend Testing
 Install testing libraries:

(Already installed)

"@testing-library/react"
"@testing-library/jest-dom"

 Run frontend tests:
npm test

 Frontend tests include:
Unit Tests

Form input validation

Button clicks

Component rendering

 Integration Tests

API call mocking using jest.fn()

UI updates after creating or deleting a bug

Loading, empty, and error states

 Debugging Techniques Used
✅ 1. Console Debugging

console.log() in backend controllers

Logs inside React components

Axios error logging

✅ 2. Chrome DevTools

Check network API calls

Inspect React components

Track re-renders

✅ 3. Node.js Inspector

Run backend with inspector:

node --inspect src/server.js

✅ 4. Custom Error Boundaries

Frontend includes <ErrorBoundary>:

Catches component crashes

Prevents entire UI from breaking

✅ 5. Express Error Middleware

Backend has global error handler:

Catches async route errors

Sends JSON error messages

Clean structured error output

✅ Testing Approach & Coverage
 Testing Philosophy

Test behavior, not implementation

Isolated unit tests for logic

Integration tests for full request/response cycles

Mock all external dependencies

Coverage Includes

All routes

All components

Error states

Successful CRUD operations

Form interactions

Mocked API responses

Goal: 80%+ coverage on both client and server (recommended)

 Running the entire project
✅ 1. Start backend
cd server
npm run dev

✅ 2. Start frontend
cd client
npm start


✅ Conclusion

This project demonstrates:
✔ MERN stack mastery
✔ API + UI integration
✔ Real-world testing
✔ Debugging skills
✔ Clean documentation
✔ Fully working CRUD system