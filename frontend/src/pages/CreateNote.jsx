import Navbar from "../components/Navbar";
import { useState } from "react";
import api from "../utils/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateNote = () => {

    const [note, setNote] = useState("");

    const navigate = useNavigate();

    const createNote = async (e) => {

        e.preventDefault();

        if (!note.trim()) {
            return toast.error("Please write a note");
        }

        try {

            await api.post("/notes", { notes: note });

            toast.success("Note created");

            setNote("");

        }
        catch (err) {
            if (err.response && err.response.status === 401) {

                toast.error("Please login first");

                navigate("/login");

            } else {

                toast.error("Failed to create notes");

            }

        }

    };

    return (

        <div className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">

            <Navbar />

            <div className="flex justify-center px-4 py-12 sm:py-20">

                <form
                    onSubmit={createNote}
                    className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-xl w-full max-w-md"
                >

                    <h2 className="text-lg sm:text-xl font-semibold mb-6 text-center">
                        ✍️ Create Note
                    </h2>

                    <input
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Write your note..."
                        className="w-full bg-white/10 border border-white/20 px-4 py-3 rounded-lg text-sm sm:text-base"
                    />

                    <button
                        type="submit"
                        className="w-full mt-4 cursor-pointer bg-indigo-600 hover:bg-indigo-500 py-3 rounded-lg text-sm sm:text-base"
                    >
                        Save Note
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate("/notes")}
                        className="w-full mt-3 cursor-pointer bg-white/10 hover:bg-white/20 py-3 rounded-lg text-sm sm:text-base"
                    >
                        View All Notes
                    </button>

                </form>

            </div>

        </div>

    );

};

export default CreateNote;