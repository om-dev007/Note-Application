import e from "express";
import router from "./routes/notes.routes.js";
import cors from "cors"
import cookieParser from 'cookie-parser'
import userRoutes from "./routes/auth.routes.js";

const app = e();
app.use(cors({
    origin: "https://note-application-dusky.vercel.app",
    credentials: true
}));
app.use(e.json());
app.use(cookieParser())
app.use("/notes", router);
app.use("/auth", userRoutes)

export default app;