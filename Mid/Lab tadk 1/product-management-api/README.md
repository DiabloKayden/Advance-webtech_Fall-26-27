# Product Management API

**Student Name:** ABDUL AZIZ JIHAN  
**Student ID:** 22-46518-2  
**Section:** B

## Project Overview

Product Management API is a RESTful API built with NestJS and TypeScript for managing products and employees. It provides endpoints to create, retrieve, update, and delete records.

## Features

- Product CRUD operations
- Employee CRUD operations
- RESTful API endpoints
- Database integration using TypeORM and SQLite
- Postman collection for testing API requests

## Technologies Used

- NestJS
- TypeScript
- TypeORM
- SQLite
- Postman

## Project Structure

```text
product-management-api/
├── src/
├── postman/
│   └── NestJS-Lab-Task-1.postman_collection.json
├── screenshots/
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── nest-cli.json
├── tsconfig.json
└── tsconfig.build.json
```

## Installation and Setup

Make sure Node.js and npm are installed.

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run start:dev
   ```

3. The API will normally be available at:

   ```text
   http://localhost:3000
   ```

## API Endpoints

### Products

| Method | Endpoint | Description |
|---|---|---|
| POST | `/products` | Create a product |
| GET | `/products` | Retrieve all products |
| GET | `/products/:id` | Retrieve a product by ID |
| PATCH | `/products/:id` | Update a product |
| DELETE | `/products/:id` | Delete a product |

### Employees

| Method | Endpoint | Description |
|---|---|---|
| POST | `/employees` | Create an employee |
| GET | `/employees` | Retrieve all employees |
| GET | `/employees/:id` | Retrieve an employee by ID |
| PATCH | `/employees/:id` | Update an employee |
| DELETE | `/employees/:id` | Delete an employee |

## API Testing

The Postman collection is located in the `postman/` directory. Import it into Postman to send requests to the API.

Place genuine screenshots of the required API tests in the `screenshots/` directory.

## Notes

- Update the API base URL in Postman if the server runs on a different host or port.
- Do not commit your actual `.env` file or `node_modules/` directory.
