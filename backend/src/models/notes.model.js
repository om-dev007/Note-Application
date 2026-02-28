import mongoose from "mongoose";

const dbSchema = new mongoose.Schema({
    notes: {
        type: String,
        required: true
    }
}, {timestamps: true})

export const dbModel = mongoose.model("notes", dbSchema);