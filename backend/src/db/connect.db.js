import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        .then((result) => {
            console.log(`Db connnected successfully`);
        }).catch((err) => {
            console.log("Internal error", err);
        });
    } catch (error) {
        console.log("Enternal", error);
    }
}