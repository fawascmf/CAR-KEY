const mongoose=require("mongoose")

const connectDB=async()=>{

try{
    const conn=await mongoose.connect("mongodb+srv://fawas:fawascmf123@cluster0.w2nqg2y.mongodb.net/",
    {
        useNewUrlparser:true,
        useUnifiedtopology:true,
    })
    console.log("database connected");
}catch(error)
{
    console.log(`Error:${error}`);
    process.exit();
}

}
module.exports=connectDB;