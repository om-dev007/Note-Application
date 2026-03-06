import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../utils/axios";

const Notes = () => {

  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    if (!input.trim()) {
      setType("error");
      setMessage("Please enter a note");
      toast.error("Note cannot be empty");
      return;
    }

    try {

      const res = await api.post("/notes", {
        notes: input
      });

      if (res.status === 201) {

        setType("success");
        setMessage("Note saved successfully");
        toast.success("Note saved");

        setInput("");

      }

    }
    catch (err) {

      const msg = err.response?.data?.message || "Server error";

      setType("error");
      setMessage(msg);

      toast.error(msg);

    }

  }

  useEffect(() => {
    if (!message) return;

    const t = setTimeout(() => {
      setMessage("");
      setType("");
    }, 2500);

    return () => clearTimeout(t)

  }, [message])

  return (

    <div className="min-h-screen w-full bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">

      <div className="max-w-4xl mx-auto px-6 pt-8 flex justify-between items-center">

        <h1 className="text-2xl font-bold">✍️ Add Note</h1>

        <Link
          to="/notes"
          className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg text-sm font-medium shadow-lg"
        >
          📒 All Notes
        </Link>

      </div>

      <div className="flex justify-center px-6 py-10">

        <form
          onSubmit={handleForm}
          className="w-full max-w-xl bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl"
        >

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Write your note..."
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
          />

          <button
            type="submit"
            className="w-full mt-5 cursor-pointer bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] transition py-3 rounded-lg font-medium shadow-lg"
          >
            Save Note
          </button>

          {message && (

            <div
              className={`mt-4 text-sm px-4 py-2 rounded-lg text-center ${type === "success"
                  ? "bg-green-500/20 text-green-300 border border-green-400/30"
                  : "bg-red-500/20 text-red-300 border border-red-400/30"
                }`}
            >

              {message}

            </div>

          )}

          {type === "success" && (

            <Link
              to="/notes"
              className="w-full mt-4 block text-center bg-white/10 hover:bg-white/20 border border-white/20 py-2.5 rounded-lg text-sm"
            >

              View All Notes →

            </Link>

          )}

        </form>

      </div>

    </div>

  );

};

export default Notes;