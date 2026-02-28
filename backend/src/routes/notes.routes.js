import { Router } from "express";
import { createNotes, deleteNote, getNotes, updateNote } from "../controllers/notes.controllers.js";

const router = Router();

router.post("/", createNotes);
router.get("/", getNotes);
router.patch("/:id", updateNote);
router.delete("/:id", deleteNote)

export default router;