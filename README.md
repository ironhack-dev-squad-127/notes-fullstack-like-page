# Fullstack Like Page

## Set-up
```sh
$ mkdir fullstack-like-page
$ cd fullstack-like-page
$ irongenerate server
$ npx create-react-app client
$ code .
```

## Server side: Rest API

**The goal**: create 2 endpoints (routes)
- `GET /api/likes`: To get all likes (JSON)
- `POST /api/likes`: To add one like (JSON)

**Model**:
- `Like`
  - `name`: String
  - `createdAt`: String


To run the application: 
```sh
$ cd server
$ npm run dev-windows
```

To test the API, we will use Postman:
- GET http://localhost:5000/api/likes
- POST http://localhost:5000/api/likes (BODY => name:Alice)


