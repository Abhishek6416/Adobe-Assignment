const mongoose=require("mongoose")
mongoose.set('strictQuery', true);

let connection=async()=>
{
    await mongoose.connect("mongodb://127.0.0.1:27017/social")
}

module.exports=connection