// now i am having my my port of 3000 free thats why i was using IDBTransaction, but it may not free for any other , that why if we use the . env file for changing the requird port <details></details>
require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const vardata = {
    "message": "Not Found",
    "documentation_url": "https://docs.github.com/rest",
    "status": "404"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('Twitter API')
})

app.get('/login',(req,res)=>{
    res.send('Login Pa~ge')
})
app.get('/welcome',(req,res)=>{
    res.send('<h1>Hello This is my welcome page </h1>')
})

app.get('/sampdata',(req,res)=>{
    res.json(vardata)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})