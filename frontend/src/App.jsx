import React from "react";
import CreateNote from "./pages/CreateNote";
import { Route, Routes } from "react-router-dom";
import NotesList from "./pages/NotesList";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Home from "./pages/Home";
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

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/create-note" element={<CreateNote />} />

        <Route path="/notes" element={<NotesList />} />

      </Routes>
    </>
  );
};

export default App;
