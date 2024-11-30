# Uber-Clone-Backend-Project

# Description 
Registers a new user by creating a user account with the provided information.

### HTTP Method 
`POST`
### Request Body
The request body should be in JSON format and include the following fields:

- `fullname` (object):
-   `firstname` (string): User's first name (min 3 characters).
-   `lastname`  (string) User's last name (min 3 characters).
- `email`  (string): User's email address (must be a valid email).
- `password`  (string): User's password (min 6 characters).

### Example Response
- `user`  (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (min 3 characters).
    - `lastname` (string): User's last name (min 3 characters).
     - `email` (string): User's email address (must be a valid email).
     - `password` (string): User's password (min 6 characters).
     - `token` (string): JWT Token.


# Login Endpoint

## **POST** `/users/login`

Authenticate a user using their email and password.

---

## Request

### Headers
- `Content-Type`: `application/json`

### Body
| Field      | Type     | Required | Description                |
|------------|----------|----------|----------------------------|
| `email`    | `string` | Yes      | The user's email address (must be a valid email address).  |
| `password` | `string` | Yes      | The user's password (min 6 characters).       |

**Example Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
