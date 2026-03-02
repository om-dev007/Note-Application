import { Router } from 'express';
import { loginUser, registerUser } from '../controllers/auth.controller.js';

const userRoutes = Router();

userRoutes.post("/register", registerUser);

userRoutes.post("/login", loginUser);

export default userRoutes;