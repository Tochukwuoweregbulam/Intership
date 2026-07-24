# Task Manager API

A simple RESTful Task Manager API built with **Node.js**, **Express.js**, and **MongoDB**. This API allows users to create, read, update, and delete tasks, with user authentication and authorization.

## Features

- User Registration
- User Login (JWT Authentication)
- Create a Task
- View All Tasks
- View a Single Task
- Update a Task
- Delete a Task
- Protected Routes
- MongoDB Database

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- dotenv

## Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/task-manager.git
```

2. Navigate into the project folder

```bash
cd task-manager
```

3. Install dependencies

```bash
npm install
```

4. Configure environment variables

Create a `.env` file in the project root and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

5. Start the server

```bash
npm run dev
```

or

```bash
npm start
```

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login a user |

### Tasks

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get a single task |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## Example Task Object

```json
{
  "title": "Complete backend project",
  "description": "Finish the Task Manager API",
  "completed": false
}
```

## Project Structure

```
task-manager/
│── config/
│── controllers/
│── middleware/
│── models/
│── routes/
│── .env
│── server.js
│── package.json
│── README.md
```

## Authentication

This API uses **JSON Web Tokens (JWT)**.

Include the token in the Authorization header:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

## Running Tests

```bash
npm test
```

## Future Improvements

- Task categories
- Due dates
- Search and filtering
- Pagination
- Email verification
- Password reset
- Swagger API documentation

## Author

**Tochukwu Joseph Oweregbulam**

## License

This project is licensed under the MIT License.
    
