import mongoose, { mongo } from "mongoose";

const dbSchema = new mongoose.Schema({
    notes: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
}, {timestamps: true})

export const dbModel = mongoose.model("notes", dbSchema);