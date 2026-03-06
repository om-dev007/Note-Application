import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../utils/axios";

const Register = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name:"",
    email:"",
    password:""
  });

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();

    try{

      const res = await api.post("/auth/register",form);

      toast.success(res.data.message);

      navigate("/login")

    }
    catch(err){

      toast.error(err.response?.data?.message || "Register failed")

    }

  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center text-white px-4">

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-xl">

        <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center">Create Account</h1>

        <input
        name="name"
        onChange={handleChange}
        placeholder="Name"
        className="w-full mb-4 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-sm sm:text-base"
        />

        <input
        name="email"
        onChange={handleChange}
        placeholder="Email"
        className="w-full mb-4 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-sm sm:text-base"
        />

        <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Password"
        className="w-full mb-4 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-sm sm:text-base"
        />

        <button className="w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded-lg text-sm sm:text-base">
          Register
        </button>

        <p className="text-sm mt-4 text-center">
          Already have account?  
          <Link className="text-indigo-400 ml-1" to="/login">Login</Link>
        </p>

      </form>

    </div>
  );
};

export default Register;