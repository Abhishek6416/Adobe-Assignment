const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const helmet=require('helmet')
const morgan=require('morgan')
const connection=require('./config/db')
const userRoute=require('./routes/users')
const authRoute=require('./routes/auth')
const postRoute=require('./routes/posts')
const router = express.Router();
const path = require("path");
const multer=require('multer')



// dotenv.config();

app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.get('/',(req,res)=>{

    res.send("hello from server side")
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
      return res.status(200).json("File uploded successfully");
    } catch (error) {
      console.error(error);
    }
  });

app.use('/api/auth',authRoute)
app.use('/api/users',userRoute)
app.use('/api/posts',postRoute)


app.listen(8000,()=>
{
    try {
        connection()
        console.log("Server is running on port 8000")
    } catch (error) {
        console.log(error)
    }
})