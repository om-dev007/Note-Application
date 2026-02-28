import { dbModel } from "../models/notes.model.js";

export const createNotes = async (req, res) => {
  const { notes } = req.body;

  if (!notes) {
    return res.status(400).json({
      message: "Please enter notes",
    });
  }

  const data = await dbModel.create({ notes });

  return res.status(201).json({
    message: "Notes created successfully",
    data,
  });
};

export const getNotes = async (req, res) => {
  const data = await dbModel.find();

  if (data.length <= 0) {
    return res.status(404).json({
      message: "Not Found Any Notes",
    });
  }

  return res.status(200).json({
    message: "Fetched notes successfully",
    data,
  });
};

export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const {notes} = req.body
    const updateNotes = await dbModel.findByIdAndUpdate(
      id,
      { notes: notes },
      { new: true },
    );

    if (!updateNotes) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    return res.status(200).json({
      message: "Note updated successfully",
      data: updateNotes,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedNote = await dbModel.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(400).json({
        message: "Internal error",
      });
    }
    return res.status(200).json({
      message: "Note deleted successfully",
      deletedNote,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
