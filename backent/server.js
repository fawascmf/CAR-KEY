const express=require("express")
const app=express()
const router=require("./router/routertest")
const connectDB=require('./database/db')
const cors=require("cors")
const dotenv=require("dotenv")
connectDB()

app.use(express.json())
app.use(cors())
dotenv.config()
app.use("/",router)


const PORT= process.env.PORT || 5000
app.listen(PORT,()=>console.log(` server runing ${PORT}`));