import e from "express";
import router from "./routes/notes.routes.js";
import cors from "cors"
import userRoutes from "./routes/auth.routes.js";

const app = e();
app.use(cors());
app.use(e.json());
app.use("/notes", router);
app.use("/auth", userRoutes)

export default app;