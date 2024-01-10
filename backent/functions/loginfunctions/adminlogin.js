const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const admins = require('../../models/adminschema');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
}

const admnlogin=async (req,res)=>{
    const{email,password}=req.body

    const admmail=await admins.findOne({email})

    if(!admmail){
        res.json("not in the panel")
    }
    else{
        const matche= await bcrypt.compare(password, admmail.password)
        if(matche){
            const Logindtl = await admins.findOne({ email })
            res.json({ message: "login success",token: generateToken(Logindtl._id)})
        }else{
            res.json("login error")
        }
    }
}
module.exports=admnlogin