require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth")

const prisma = new PrismaClient();

exports.registerUser =  async (req,res)=>{
    try {
        const {name,password} = req.body;
        if (!(name && password)){
            res.status(400).send("All input is required");
        }
        const existUser = await prisma.user.findUnique({
            where:{
                name: name
            }
        })
        if(existUser){
            return res.status(409).send("User Already Exist. Please Login");
        }
        const encryptedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data:{
                name:name,
                password: encryptedPassword
            }
        });

        const token = jwt.sign(
            {user_id: user.id, name},
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        )

        user.token = token;
        res.status(201).json(user)

    }catch (error){
        console.log(error)
    }
}

exports.loginUser = async (req,res)=>{
    try {
        const {name,password} = req.body;
        if (!(name && password)){
            res.status(400).send("All input is required");
        }
        const user = await prisma.user.findUnique({
            where:{
                name: name
            }
        })
        const token = jwt.sign(
            { user_id: user.id, name },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );
        user.token = token;

        res.status(200).json(user);

    }catch (error){
        console.log(error)
    }
}
