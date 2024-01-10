const admins=require('../../models/adminschema');
const bcrypt=require('bcrypt');

const admincreate=async (req,res)=>{
    const{email,password}=req.body
    if(!email ||!password){
        res.json('all field are required')
    }else{
        const salt= await bcrypt.genSalt(10)
        const hashedpass=await bcrypt.hash(password, salt)
        const admincreate=await admins.create({
            email,
            password: hashedpass
        })
        res.json("admin created successfully")
    }
}
module.exports=admincreate