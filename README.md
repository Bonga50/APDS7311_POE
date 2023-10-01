# APDS7311_POE

This repository contains an Express.js API for managing posts. It includes the following endpoints:

- [Create a New Post](#create-a-new-post)
- [Get All Posts](#get-all-posts)
- [Delete a Post](#delete-a-post)

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
```
npm install
```
3. Set up a MongoDB database and configure the connection in config.js.
4. Start the server:
```
npm start
```
## API Endpoints
### Create a New Post
* URL: `https://localhost:3000/api/posts`
* Method: `POST`
* Request Body:
```
{
  "postName": "NewPosting",
  "postDescription": "This is a description for my test post."
}
```
* Response
  * Status code 201 created 
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
### Get all created posts
* URL: `https://localhost:3000/api/posts`
* Method: `GET`
* Request Body:
  * Status Code: 200 OK
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
### Delete a Post
* URL: `https://localhost:3000/api/posts/{PostName}`
* Method: `DELETE`
* Response:
  * Status Code: 200 OK
  * Body:
```
{
  "message": "Post deleted"
}
```
