const express = require('express')
const app = express()
const db = require('./db')
const bodyParser = require('body-parser')
app.use(bodyParser.json())



app.get('/',(req,res)=>{
    res.send('welcome to my hotel...jsjja');
})
const personRoutes = require('./routes/personRoutes')
app.use("/person",personRoutes)
app.listen(3000,()=>{
    console.log("lisening on port 3000");
})
