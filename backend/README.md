# 📝 Notes API Backend

REST API for notes management.
Authentication system is currently **in progress** and will secure user-specific data access.

## Features

* Create note
* Read notes
* Update note
* Delete note
* Automatic timestamps (createdAt, updatedAt)
* Authentication (in progress)
* User-specific data isolation (planned)

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (planned)
* bcrypt (planned)

## API Routes

### Notes

* GET /notes
* POST /notes
* PATCH /notes/:id
* DELETE /notes/:id

### Auth (planned)

* POST /auth/register
* POST /auth/login
* GET /auth/me

## Data Model

### Note

* notes (text)
* createdAt
* updatedAt
* userId (planned)

## Security

Authentication and authorization middleware will be added.

## Setup

1. Install dependencies
2. Configure environment variables
3. Start server