const {NODE_ENV='development'}=process.env

require('dotenv').config({
    path:`.${NODE_ENV}.env`
})

const express=require('express')
const app=express()

const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const cors=require('cors')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));//parse data comes from HTML form
app.use(cors())

app.use('/api',require('./routes/home'))
app.use('/api/users',require('./routes/user'))

app.use('/api/todos',require('./routes/todo'))

mongoose.set('strictQuery', true);
mongoose.connect(process.env.mongoString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>console.log('Connected to DB...'))
.catch(err=>console.error(err))

const port=process.env.port||5000;

app.listen(port,()=>{
    console.log(`Server running on port ${port}...`)
})
