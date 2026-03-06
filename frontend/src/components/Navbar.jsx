import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/axios";

const Navbar = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const getUser = async () => {

        try {

            const res = await api.get("/auth/me");

            setUser(res.data.user);

        } catch (err) {
            console.log(err)
            navigate("/login");

        }

    };

    useEffect(() => {

        getUser();

    }, []);

    const logout = async () => {

        try {

            await api.post("/auth/logout");

            navigate("/login");

        } catch (err) {

            console.log(err);

        }

    };

    return (

        <div className="w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 py-4 sm:py-5 border-b border-white/10 gap-3 sm:gap-0">

            <h1 className="text-lg sm:text-2xl font-semibold flex items-center gap-2">
                📒 MyNotes
            </h1>

            <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">

                <p className="text-gray-300 text-xs sm:text-sm break-all text-center sm:text-left">
                    👤 {user?.name || user?.email}
                </p>

                <button
                    onClick={logout}
                    className="bg-red-600 cursor-pointer hover:bg-red-500 px-4 py-2 rounded-lg text-xs sm:text-sm"
                >
                    Logout
                </button>

            </div>

        </div>

    );

};

export default Navbar;