import { Link } from "react-router-dom";

const Home = () => {

    return (

        <div className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">

            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-6 gap-4 sm:gap-0">

                <h1 className="text-lg sm:text-xl font-bold">📝 MyNotes</h1>

                <div className="flex gap-3 sm:gap-4">

                    <Link
                        to="/login"
                        className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium"
                    >

                        Login

                    </Link>

                    <Link
                        to="/register"
                        className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium border border-white/20"
                    >

                        Register

                    </Link>

                </div>

            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-center">

                <div>

                    <h1 className="text-3xl sm:text-4xl font-bold leading-tight">

                        Write Your Ideas <br />

                        <span className="text-indigo-400">

                            Anytime, Anywhere

                        </span>

                    </h1>

                    <p className="text-gray-400 mt-6 leading-relaxed text-sm sm:text-base">

                        MyNotes is a simple and secure notes application where you can save,
                        edit, and manage your notes easily. Your notes are stored securely and
                        only accessible by you.

                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">

                        <Link
                            to="/register"
                            className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg font-medium shadow-lg text-center"
                        >

                            Get Started

                        </Link>

                        <Link
                            to="/notes"
                            className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-medium border border-white/20 text-center"
                        >

                            View Notes

                        </Link>

                    </div>

                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl">

                    <h2 className="text-lg sm:text-xl font-semibold mb-4">✨ Features</h2>

                    <ul className="space-y-3 text-gray-300 text-sm">

                        <li>✔ Create notes instantly</li>

                        <li>✔ Edit and update anytime</li>

                        <li>✔ Delete unwanted notes</li>

                        <li>✔ Secure authentication</li>

                        <li>✔ Clean & minimal interface</li>

                    </ul>

                </div>

            </div>

            <div className="text-center text-gray-400 text-xs sm:text-sm py-8 sm:py-10 border-t border-white/10 px-4">

                © {new Date().getFullYear()} MyNotes. All rights reserved.

            </div>

        </div>

    );

};

export default Home;