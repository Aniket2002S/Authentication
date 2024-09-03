Login and Signup Website
A simple web application for user authentication using Node.js, Express, MongoDB, JWT, and bcrypt.

Features
User registration with email and password
Password hashing with bcrypt
JWT-based authentication
Protected routes for authenticated users
Technologies
Node.js: Backend runtime environment
Express: Web framework
MongoDB: Database
Mongoose: ODM for MongoDB
JWT: Token-based authentication
bcrypt: Password hashing
Installation
Clone the repo:

bash
Copy code
git clone https://github.com/yourusername/login-signup-website.git
cd login-signup-website
Install dependencies:

bash
Copy code
npm install
Set up environment variables: Create a .env file:

makefile
Copy code
PORT=3000
MONGODB_URI=mongodb://localhost:27017/your-database-name
JWT_SECRET=your_jwt_secret
Run the app:

bash
Copy code
npm start
Access the app: Open your browser and go to http://localhost:3000.

API Endpoints
POST /api/signup: Register a new user
POST /api/login: Log in a user and get a JWT
GET /api/protected: Access protected route (JWT required)
License
This project is licensed under the MIT License.
