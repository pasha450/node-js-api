const express = require('express')
const app = express();
const dotenv = require('dotenv');
port =3000
app.get('/register',(req,res) =>{
    res.send('hey , how are you !\n ')
})
app.listen(port,() =>{
    console.log(`server is running on ${port}`)
})

 