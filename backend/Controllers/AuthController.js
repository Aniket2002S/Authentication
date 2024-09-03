const bcrypt = require("bcrypt");
const UserModel = require("../Models/User");
const jwt = require("jsonwebtoken")

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body; // Fixed typo here
        const user = await UserModel.findOne({ email });

        if (user) 
        {
            return res.status(409)
                .json({ message: 'User already exists, you can login', success: false });
        }

        const userModel = new UserModel({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();

        res.status(201)
            .json
            ({
                message: "SignUp Successful",
                success: true
            });
    } 
    catch (err) 
    {
        console.error('Signup Error:', err); // Log the error for debugging
        res.status(500)
            .json
            ({
                message: "Signup unsuccessful",
                success: false
            });
    }
};
const login = async (req, res) => {
    try {
        const { email, password } = req.body; // Fixed typo here
        const user = await UserModel.findOne({ email });
        const errMsg = 'Auth failed email or password is wrong';

        if (!user) 
        {
            return res.status(409)
                .json({ message: errMsg , success: false });
        }

        const isPassEqual = await bcrypt.compare(password , user.password);

        if(!isPassEqual)
        {
            return res.status(403)
            .json({message:errMsg , success:false});
        }

        const jwtToken = jwt.sign(
            {email : user.email , _id : user._id},
            process.env.JWT_SECRET,
            { expiresIn : '24h'}
        )

        res.status(201)
            .json
            ({
                message: "login Successful",
                success: true,
                jwtToken, 
                email, 
                name: user.name
            });
    } 
    catch (err) 
    {
        console.error('login Error:', err); 
        res.status(500)
            .json
            ({
                message: "internal server error",
                success: false
            });
    }
};

module.exports = {
    signup, login
};
