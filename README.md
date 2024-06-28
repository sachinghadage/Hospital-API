# Hospital API

## Description

This is an API for a hospital system for testing and quarantine of COVID-19 patients. The API allows doctors to log in, register patients, and create patient reports.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT

## Installation

1. Clone the repository:

```bash
git clone https://github.com/sachinghadage/Hospital-API.git
cd hospital-api
# Hospital-API

Start the server:
npm start

API Endpoints:

POST /api/patients/register

Registers a new patient.
Request Body:
json
Copy code
{
    "id": "P001",
    "phoneNumber": "3111111111",
    "name": "John Doe",
    "age": 35,
    "gender": "Male"
}
Response:
json
Copy code
{
    "message": "Patient registered successfully",
    "patient": {
        "_id": "5d3ed089fbf1b41e6c2b0343",
        "id": "P001",
        "phoneNumber": "3111111111",
        "name": "John Doe",
        "age": 35,
        "gender": "Male",
        "reports": [],
        "__v": 0
    }
}
GET /api/patients/:id

Fetches a patient by ID.
Response:
json
Copy code
{
    "message": "Patient fetched successfully",
    "patient": {
        "_id": "5d3ed089fbf1b41e6c2b0343",
        "id": "P001",
        "phoneNumber": "3111111111",
        "name": "John Doe",
        "age": 35,
        "gender": "Male",
        "reports": [],
        "__v": 0
    }
}
GET /api/patients/phone/:phoneNumber

Fetches a patient by phone number.
Response:
json
Copy code
{
    "message": "Patient fetched successfully",
    "patient": {
        "_id": "5d3ed089fbf1b41e6c2b0343",
        "id": "P001",
        "phoneNumber": "3111111111",
        "name": "John Doe",
        "age": 35,
        "gender": "Male",
        "reports": [],
        "__v": 0
    }
}
POST /api/patients/phone/:phoneNumber/create_report

Creates a new report for a patient by phone number.
Request Body:
json
Copy code
{
    "status": "Positive-Admit",
    "createdBy": "Dr. Smith",
    "date": "2024-06-28"
}
Response:
json
Copy code
{
    "message": "Report created successfully",
    "report": {
        "status": "Positive-Admit",
        "createdBy": "Dr. Smith",
        "date": "2024-06-28T00:00:00.000Z"
    }
}
Authentication:

Use JWT token (Bearer <token>) in headers for protected routes (/api/patients/phone/:phoneNumber and /api/patients/phone/:phoneNumber/create_report).
Testing with Postman
Register Patient:

Send a POST request to http://localhost:5000/api/patients/register with JSON body to register a patient.
Fetch Patient by ID:

Send a GET request to http://localhost:5000/api/patients/P001 to fetch a patient by ID.
Fetch Patient by Phone Number:

Send a GET request to http://localhost:5000/api/patients/phone/3111111111 to fetch a patient by phone number.
Create Report:

Send a POST request to http://localhost:5000/api/patients/phone/3111111111/create_report with JSON body to create a report for a patient.
Authentication Testing:

For routes requiring authentication, include a valid JWT token (Bearer <token>) in the Authorization header.
Contributors
List of contributors to the project.


