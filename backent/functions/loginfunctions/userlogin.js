const datauser = require('../../models/userscheema')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
}

const userlogin = async (req, res) => {
    const { email, password } = req.body

    const dbmail = await datauser.findOne({ email })

    if (!dbmail) {
        console.log("email and password error");
        res.json("Login ERROR found")
    }
    else {
        const match = await bcrypt.compare(password, dbmail.password)

        if (match) {
            const Logindtl = await datauser.findOne({ email }).select("-password")
            console.log("its happend")
            res.json({ message: "login success",token: generateToken(Logindtl._id),Logindtl})
        } else {
            console.log("no login")
            res.json("login error")
        }
    }
}
module.exports = userlogin