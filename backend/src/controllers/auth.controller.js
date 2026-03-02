import { userModel } from "../models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password) {
        return res.status(400).json({
            message: "All fiedls are required"
        })
    }

    const userAlreadyExist = await userModel.findOne({
        $or: [
            {email: email}
        ]
    })

    if(userAlreadyExist) {
        return res.status(400).json({
            message: "User already exists"
        })
    }

    try {

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await userModel.create({
            name,
            email,
            password: hashedPassword
        })

        const token = jwt.sign({
            id: newUser._id,
            email: newUser.email
        }, process.env.JWT_SECRET)

        res.cookie("token", token);

        return res.status(201).json({
            message: "User created successfully",
            user: {
                name: newUser.name,
                email: newUser.email,
                password: newUser.password,
                originalPass: password
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal error occurred"
        })
    }

}