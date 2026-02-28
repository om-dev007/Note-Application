import e from "express";
import router from "./routes/notes.routes.js";
import cors from "cors"

const app = e();
app.use(cors());
app.use(e.json());
app.use("/notes", router);

export default app;