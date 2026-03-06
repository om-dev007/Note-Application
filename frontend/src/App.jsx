import React from "react";
import Notes from "./pages/Notes";
import { Route, Routes } from "react-router-dom";
import NotesList from "./pages/NotesList";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Register from "./pages/Register";

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

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Notes />} />
        <Route path="/notes" element={<NotesList />} />

      </Routes>
    </>
  );
};

export default App;
