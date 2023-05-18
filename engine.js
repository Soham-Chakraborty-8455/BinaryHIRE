const express = require('express')
const homepage= require('./routes/home')
const user= require('./routes/user')
const query= require('./routes/query')
const mongoose = require('mongoose')

const app = express()
const port = 3000

app.use(homepage)
app.use(user)
app.use(query)

mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGO).then(
  result=>{
    app.listen(3005);
  }
).catch(err =>{
  console.log(err)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})


