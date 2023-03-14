const {NODE_ENV='production'}=process.env

require('dotenv').config({
    path:`.${NODE_ENV}.env`
})

const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.status(200)
    res.send('Server is up and Running')
})
const port=process.env.port||5000;

app.listen(port,()=>{
    console.log(`Server running on port ${port}...`)
})