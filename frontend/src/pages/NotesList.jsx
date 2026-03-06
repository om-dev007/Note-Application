import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import api from "../utils/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const NotesList = () => {

  const [notes, setNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const navigate = useNavigate();

  const fetchNotes = async () => {

    try {

      const res = await api.get("/notes");

      setNotes(res.data.data);

    } catch (err) {

      if (err.response && err.response.status === 401) {

        toast.error("Please login first");

        navigate("/login");

      } else {

        toast.error("Failed to fetch notes");

      }

    }

  };

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm("Are you sure you want to delete this note?");

    if (!confirmDelete) return;

    try {

      await api.delete(`/notes/${id}`);

      toast.success("Note deleted");

      setNotes(prev => prev.filter(note => note._id !== id));

    } catch {

      toast.error("Delete failed");

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

    } catch {

      toast.error("Update failed");

    }

  };

  const hasFetched = useRef(false);

  useEffect(() => {

    if (hasFetched.current) return;

    hasFetched.current = true;

    fetchNotes();

  }, []);

  return (

    <div className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 text-white overflow-x-hidden">

      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-10">

          <h1 className="text-xl sm:text-3xl font-bold wrap-break-word">📒 Your Notes</h1>

          <Link
            to="/create-note"
            className="bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-lg font-medium text-center w-full sm:w-auto"
          >
            + Add Note
          </Link>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

          {notes.map(note => (

            <div
              key={note._id}
              className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 shadow-xl w-full max-w-full wrap-break-word"
            >

              {editingId === note._id ? (

                <>

                  <textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="w-full max-w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white text-sm sm:text-base resize-none"
                  />

                  <div className="flex flex-col sm:flex-row gap-2 mt-4">

                    <button
                      onClick={() => saveEdit(note._id)}
                      className="flex-1 cursor-pointer bg-green-600 hover:bg-green-500 py-2 rounded-lg text-sm"
                    >
                      Save
                    </button>

                    <button
                      onClick={cancelEdit}
                      className="flex-1 cursor-pointer bg-white/10 hover:bg-white/20 py-2 rounded-lg text-sm"
                    >
                      Cancel
                    </button>

                  </div>

                </>

              ) : (

                <>

                  <p className="text-sm sm:text-base text-gray-100 mb-4 wrap-break-word whitespace-pre-wrap">
                    {note.notes}
                  </p>

                  <p className="text-xs text-gray-400">
                    Created: {new Date(note.createdAt).toLocaleString()}
                  </p>

                  {note.updatedAt && note.updatedAt !== note.createdAt && (
                    <p className="text-xs text-gray-400 mb-5">
                      Updated: {new Date(note.updatedAt).toLocaleString()}
                    </p>
                  )}

                  <div className="flex flex-col sm:flex-row gap-2 mt-4">

                    <button
                      onClick={() => startEdit(note)}
                      className="flex-1 cursor-pointer bg-indigo-600 hover:bg-indigo-500 py-2 rounded-lg text-sm"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(note._id)}
                      className="flex-1 cursor-pointer bg-red-600 hover:bg-red-500 py-2 rounded-lg text-sm"
                    >
                      Delete
                    </button>

                  </div>

                </>

              )}

            </div>

          ))}

        </div>

      </div>

    </div>

  );

};

export default NotesList;