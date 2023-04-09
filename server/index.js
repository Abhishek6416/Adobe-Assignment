const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const helmet=require('helmet')
const morgan=require('morgan')
const connection=require('./config/db')
const userRoute=require('./routes/users')
const authRoute=require('./routes/auth')


dotenv.config();

app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.get('/',(req,res)=>{

    res.send("hello from server side")
})



app.use('/api/users',userRoute)
app.use('/api/auth',authRoute)


app.listen(8000,()=>
{
    try {
        connection()
        console.log("Server is running on port 8000")
    } catch (error) {
        console.log(error)
    }
})