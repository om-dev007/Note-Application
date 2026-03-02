import { Router } from 'express';
import { registerUser } from '../controllers/auth.controller.js';

const userRoutes = Router();

userRoutes.post("/register", registerUser);

// userRoutes.post("/login", );

export default userRoutes;