import { Router } from "express";
import { createNotes, deleteNote, getNotes, updateNote } from "../controllers/notes.controllers.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/", authMiddleware ,createNotes);
router.get("/", authMiddleware ,getNotes);
router.patch("/:id", authMiddleware, updateNote);
router.delete("/:id", authMiddleware, deleteNote)

export default router;