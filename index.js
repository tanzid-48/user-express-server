
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

  const users = [
  {
    "id": 1,
    "name": "Tanzid Mondol",
    "email": "tanzid@example.com",
    "username": "tanzid123",
    "isActive": true
  },
  {
    "id": 2,
    "name": "Rahim Uddin",
    "email": "rahim@example.com",
    "username": "rahim321",
    "isActive": false
  },
  {
    "id": 3,
    "name": "Karim Hasan",
    "email": "karim@example.com",
    "username": "karim007",
    "isActive": true
  },
  {
    "id": 4,
    "name": "Sadia Akter",
    "email": "sadia@example.com",
    "username": "sadia99",
    "isActive": true
  },
  {
    "id": 5,
    "name": "Nusrat Jahan",
    "email": "nusrat@example.com",
    "username": "nusrat88",
    "isActive": false
  },
  {
    "id": 6,
    "name": "Imran Hossain",
    "email": "imran@example.com",
    "username": "imran77",
    "isActive": true
  },
  {
    "id": 7,
    "name": "Fahim Ahmed",
    "email": "fahim@example.com",
    "username": "fahim66",
    "isActive": true
  },
  {
    "id": 8,
    "name": "Mim Islam",
    "email": "mim@example.com",
    "username": "mim55",
    "isActive": false
  }
];
const posts = [
  {
    id: 1,
    userId: 1,
    title: "Learning Node.js",
    body: "Node.js is powerful for backend development",
    createdAt: "2026-05-05"
  },
  {
    id: 2,
    userId: 2,
    title: "React Basics",
    body: "React helps build interactive UIs",
    createdAt: "2026-05-05"
  },
  {
    id: 3,
    userId: 3,
    title: "Express Guide",
    body: "Express makes API building simple",
    createdAt: "2026-05-06"
  },
  {
    id: 4,
    userId: 1,
    title: "JavaScript Tips",
    body: "Use modern ES6 features",
    createdAt: "2026-05-06"
  },
  {
    id: 5,
    userId: 4,
    title: "Frontend vs Backend",
    body: "Both are important in web development",
    createdAt: "2026-05-06"
  }
];

// Adds headers: Access-Control-Allow-Origin: *
app.use(cors())

// json
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Express World! ')
})

// GET method route
app.get('/users', (req, res) => {
  res.send(users);
})

app.post('/users', (req, res) => {
    console.log("get data form User:",req.body);

    const newUser =req.body
    newUser.id = users.length +1;
    users.push(newUser);

  res.send( {success:true,message:'POST request to the UserPage'})
})

// GET method route
app.get('/posts', (req, res) => {
  res.send(posts);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
