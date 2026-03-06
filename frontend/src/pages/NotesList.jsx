import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import api from "../utils/axios";

const NotesList = () => {

  const [notes, setNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const fetchNotes = async () => {

    try {

      const res = await api.get("/notes");

      setNotes(res.data.data);

    }
    catch (err) {

      toast.error(err.response?.data?.message || "Failed to fetch notes");

    }

  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleDelete = async (id) => {

    if (!window.confirm("Delete this note?")) return;

    try {

      await api.delete(`/notes/${id}`);

      toast.success("Note deleted");

      setNotes(prev => prev.filter(n => n._id !== id));

    }
    catch (err) {

      toast.error(err.response?.data?.message || "Delete failed");

    }

  };

  const startEdit = (note) => {

    setEditingId(note._id);
    setEditText(note.notes);

  };

  const cancelEdit = () => {

    setEditingId(null);
    setEditText("");

  };

  const saveEdit = async (id) => {

    try {

      await api.patch(`/notes/${id}`, {
        notes: editText
      });

      toast.success("Note updated");

      setEditingId(null);

      fetchNotes();

    }
    catch (err) {

      toast.error(err.response?.data?.message || "Update failed");

    }

  };

  const formatTime = (date) => new Date(date).toLocaleString();

  return (

    <div className="min-h-screen w-full bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">

      <div className="max-w-6xl mx-auto px-6 py-8">

        <h1 className="text-3xl font-bold mb-8">📒 Your Notes</h1>

        {notes.length === 0 ? (

          <div className="flex flex-col items-center justify-center text-center py-24 text-gray-400">

            <p className="text-lg mb-4">No notes yet</p>

            <Link
              className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-lg text-sm font-medium"
              to="/"
            >

              Add your first note

            </Link>

          </div>

        ) : (


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {notes.map(note => (

              <div
                key={note._id}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5 shadow-xl"
              >

                {editingId === note._id ? (

                  <>

                    <textarea
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white"
                    />

                    <div className="flex gap-2 mt-4">

                      <button
                        onClick={() => saveEdit(note._id)}
                        className="flex-1 bg-green-600 hover:bg-green-500 py-2 rounded-lg text-sm"
                      >

                        Save

                      </button>

                      <button
                        onClick={cancelEdit}
                        className="flex-1 bg-white/10 hover:bg-white/20 py-2 rounded-lg text-sm"
                      >

                        Cancel

                      </button>

                    </div>

                  </>

                ) : (


                  <>

                    <p className="text-lg text-gray-100 leading-relaxed">

                      {note.notes}

                    </p>

                    <p className="text-xs text-gray-400 mt-3">

                      {note.updatedAt === note.createdAt
                        ? `Created: ${formatTime(note.createdAt)}`
                        : `Updated: ${formatTime(note.updatedAt)}`}

                    </p>

                    <div className="mt-6 flex gap-2">

                      <button
                        onClick={() => startEdit(note)}
                        className="flex-1 bg-indigo-600 hover:bg-indigo-500 py-2 rounded-lg text-sm"
                      >

                        Edit

                      </button>

                      <button
                        onClick={() => handleDelete(note._id)}
                        className="flex-1 bg-red-600 hover:bg-red-500 py-2 rounded-lg text-sm"
                      >

                        Delete

                      </button>

                    </div>

                  </>

                )}

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  );

};

export default NotesList;