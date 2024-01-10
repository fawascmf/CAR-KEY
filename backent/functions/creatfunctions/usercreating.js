const datauser = require('../../models/userscheema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
}

const usercreate = async (req, res) => {
    const {
        firstname,
        secondname,
        email,
        password,
    } = req.body
    try {
        if (!firstname || !secondname || !email || !password) {
            res.json("all credentials are required");

        } else {
            const dbmail = await datauser.findOne({ email })

            if (dbmail) {
                return res.json("email is already used")
                alert('email is already used')
            } else if (password.length < 5) {
                return res.json("password must be at least five characters long ")
            } else {
                const salt = await bcrypt.genSalt(10)
                const hashedpassword = await bcrypt.hash(password, salt)
                const empDeatils = await datauser.create({
                    firstname,
                    secondname,
                    email,
                    password: hashedpassword,
                })
                const token = generateToken(empDeatils._id)
                res.json({
                    id: empDeatils._id,
                    firstName: empDeatils.firstname,
                    secondname: empDeatils.secondname,
                    email: empDeatils.email,
                    password: empDeatils.password,
                    token
                })
            }
        }
    }
    catch (err) {
        console.log(`error in creating new user ${err}`)
    }
}
module.exports = usercreate
