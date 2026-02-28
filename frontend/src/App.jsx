import React from "react";
import NotesApp from "./pages/Notes";
import Notes from "./pages/Notes";
import { Route, Routes } from "react-router-dom";
import NotesList from "./pages/NotesList";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#020617",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/notes" element={<NotesList />} />
      </Routes>
    </>
  );
};

export default App;
