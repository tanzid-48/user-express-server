
const express = require('express')
const app = express()
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
]

app.get('/', (req, res) => {
  res.send('Hello Express World! ')
})

// GET method route
app.get('/users', (req, res) => {
  res.send('GET request to the users')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
