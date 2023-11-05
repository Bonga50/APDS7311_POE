# APDS7311_POE

This repository contains an Express.js API for managing posts. It includes the following endpoints:

- [Create a New Post](#create-a-new-post)
- [Get All Posts](#get-all-posts)
- [Delete a Post](#delete-a-post)
- [User Signup](#user-signup)
- [User Login](#user-login)

## Prerequisites

Before using this API, ensure you have the following dependencies installed:

- Node.js
- MongoDB

## Installation

1. Clone the repository:
```
git clone https://github.com/Bonga50/APDS7311_POE.git
```
2. Install the required packages: 
Backend
```
npm install
```
Frontedn
```
npm install -g @angular/cli

npm install
```
3. Set up a MongoDB database and configure the connection in config.js.

4. Start the server:
runs on port 3000
```
npm run dev
```
5. Start frontend 
runs on port 4200
```
ng serve --open
```
## API Endpoints
### User Signup
* URL: `https://localhost:3000/api/users/signup`
* Frontend: `http://localhost:4200/signup`
* Method: `POST`
* Request Body:
```
{
  "username": "example_user",
  "password": "password123"
}
```
* Response
    * Status Code: `200 OK`
    * Body:
```
{
  "Message": "User saved successfully",
  "user": {
    "username": "example_user",
    "password": "$2b$10$ExfGePH/66Ntx2ke.u.w9eD4LACaF10zId9i/z7i3LxecnUgg49Ui",
    "_id": "651939bfa3245ba1c077f78d",
    "__v": 0
  }
}
```

### User Login
* URL: `https://localhost:3000/api/users/login `
* Frontend: `http://localhost:4200/`
* Method: `POST`
* Request Body:
```
{
  "username": "example_user",
  "password": "password123"
}
```
* Response
    * Status Code: `200 OK`
    * Body:
```
{
  "message": "Authenticated successfully",
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImV4YW1wbGVfdXNlciIsInVzZXJpZCI6IjY1MTkzOWJmYTMyNDViYTFjMDc3Zjc4ZCIsImlhdCI6MTY5NjE1MjYzNCwiZXhwIjoxNjk2MTU5ODM0fQ.3AC4ctvPZKCfXme9aohQFdLXNRXX_4CoohBfKwHelSc"
}
```
  * Status Code: `404 Not found`
  * Body:
```
{
  "message": "Authentication Failed"
}
```
* Status Code: `500 Internal server error`
    * Body:
```
{
  "error": "Error comparing passwords"
}
```


### Create a New Post
* URL: `https://localhost:3000/api/posts`
* Frontend: `http://localhost:4200/task`
* Method: `POST`
* Autorization: Bearer {token}
* Request Body:
```
{
  "postName": "NewPosting",
  "postDescription": "This is a description for my test post."
}
```
* Response
  * Status code `201 created`
  * Body:
```
{
  "Message": "Post created",
  "Posts": {
    "postName": "NewPosting",
    "postDescription": "This is a description for my test post.",
    "_id": "651934b4a3245ba1c077f788"
  }
}
```
  * Status Code: `403 Invalid token`
  * Body:
```
{
  "message": "Invalid token"
}
```

### Get all created posts
* URL: `https://localhost:3000/api/posts`
* Frontend: `http://localhost:4200/getTask`
* Method: `GET`
* * Autorization: Bearer {token}
* Response Body:
  * Status Code: `200 OK`
  * Body:
```
{
  "Message": "Posts Found",
  "Posts": [
    {
      "_id": "5f7f4d9b8f7f2900171a3c2a",
      "postName": "NewPosting",
      "postDescription": "This is a description for my test post.",
      "createdAt": "2023-10-01T00:00:00.000Z",
      "__v": 0
    }
    // Additional posts if available
  ]
}
```
  * Status Code: `403 Invalid token`
  * Body:
```
{
  "message": "Invalid token"
}
```
### Delete a Post
* URL: `https://localhost:3000/api/posts/{PostName}`
* Method: `DELETE`
* * Autorization: Bearer {token}
* Response:
  * Status Code: `200 OK`
  * Body:
```
{
  "message": "Post deleted"
}
```
  * Status Code: `403 Invalid token`
  * Body:
```
{
  "message": "Invalid token"
}
```
