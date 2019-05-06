# Fullstack Like Page

## Screenshot

![image](https://user-images.githubusercontent.com/5306791/57225008-fb4ec600-7002-11e9-93e9-f295be9409cd.png)

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


To run the back-end: 
```sh
$ cd server
$ npm run dev-windows
```

To test the API, we will use Postman:
- GET http://localhost:5000/api/likes
- POST http://localhost:5000/api/likes (BODY => name:Alice)


## Client side: React Application

Install axios in the client project
```
$ cd client
$ npm install axios
```

To run the front-end:
```sh
$ cd client
$ npm start
```


## To solve CORS issues

```sh
$ cd server
$ npm install cors
```

```js
// server/app.js

// ...
const cors = require('cors')
const app = express()

app.use(cors({
  origin: (origin, cb) => {
    cb(null, origin && origin.startsWith('http://localhost:'))
  },
  optionsSuccessStatus: 200,
  credentials: true
}))
// ...
```