import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../utils/axios";

const Login = () => {

  const navigate = useNavigate();

  const [form,setForm] = useState({
    email:"",
    password:""
  });

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();

    try{

      const res = await api.post("/auth/login",form);

      toast.success(res.data.message);

      navigate("/")

    }
    catch(err){

      toast.error(err.response?.data?.message || "Login failed")

    }
  }

  const handleLogout = async ()=>{

    try{

      await api.post("/auth/logout");

      toast.success("Logged out")

      navigate("/login")

    }
    catch{

      toast.error("Logout failed")

    }

  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center text-white">

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl">

        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <input
        name="email"
        onChange={handleChange}
        placeholder="Email"
        className="w-full mb-4 px-4 py-3 bg-white/10 border border-white/20 rounded-lg"
        />

        <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Password"
        className="w-full mb-4 px-4 py-3 bg-white/10 border border-white/20 rounded-lg"
        />

        <button className="w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded-lg">
          Login
        </button>

        <button
        type="button"
        onClick={handleLogout}
        className="w-full mt-3 bg-red-600 hover:bg-red-500 py-3 rounded-lg"
        >
          Logout
        </button>

        <p className="text-sm mt-4 text-center">
          Don't have account?  
          <Link className="text-indigo-400 ml-1" to="/register">Register</Link>
        </p>

      </form>

    </div>
  );
};

export default Login;