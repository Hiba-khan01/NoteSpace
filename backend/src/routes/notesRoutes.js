const express = require("express");
const router = express.Router();

const {
    getAllNotes,
    getNotesById,
    createNote,
    updateNote,
    deleteNote
} = require("../controllers/notesController");

router.get("/", getAllNotes);
router.get("/:id", getNotesById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

module.exports = router;