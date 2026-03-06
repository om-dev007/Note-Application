import { Router } from 'express';
import { loginUser, logoutUser, registerUser } from '../controllers/auth.controller.js';

const userRoutes = Router();

userRoutes.post("/register", registerUser);

userRoutes.post("/login", loginUser);

userRoutes.post("/logout", logoutUser)

export default userRoutes;