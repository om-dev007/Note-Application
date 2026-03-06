import { Router } from 'express';
import { getMe, loginUser, logoutUser, registerUser } from '../controllers/auth.controller.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const userRoutes = Router();

userRoutes.post("/register", registerUser);

userRoutes.post("/login", loginUser);

userRoutes.post("/logout", logoutUser)

userRoutes.get("/me", authMiddleware, getMe)

export default userRoutes;