// Dependecies
import { Link } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { NavLink, useNavigate  } from "react-router-dom";


// Icons
import { FaUser, FaCog } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { AuthContext } from '../config/AuthProvider.jsx'

function NavBarSection({ onShowChange }){

    // ===================================================================================================================

    // For mobile menu toggle or scroll event optimization
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
    }, []);

    // ===================================================================================================================

    // Hiding behaviour while upward scrolling
    const [show, setShow] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down → hide
            setShow(false);
            onShowChange?.(false);
        } else {
            // Scrolling up → show
            setShow(true);
            onShowChange?.(true);
        }

        lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // ===================================================================================================================

    // For profile dropdown icons behaviour
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)
            ) {
                setIsOpen(false);
            }
        };

        const handleScroll = () => {
            setIsOpen(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("scroll", handleScroll, true);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll, true);
        };
    }, []);

    // ===================================================================================================================

    // get session id from local storage
    const session = useContext(AuthContext);

    // ===================================================================================================================

    // For admin login
    const navigate = useNavigate();

    const API = import.meta.env.VITE_API_URL;

    const [showAdminModal, setShowAdminModal] = useState(false);
    const [password, setPassword] = useState("");

    const handleAdminLogin = async () => {
    try {
        const res = await fetch(`${API}/api/adminlogin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
        });

        const data = await res.json();

        if (res.ok) {
        setShowAdminModal(false);
        setPassword("");
        navigate("/dashboard");
        } else {
        alert(data.message || "Invalid password");
        }
    } catch (err) {
    console.error("Admin Login Error:", err);
    alert(err.message);
}
    };

    useEffect(() => {  // Prevent from scrooling
    document.body.style.overflow = showAdminModal ? "hidden" : "auto";

    return () => {
        document.body.style.overflow = "auto";
    };
    }, [showAdminModal]);

    // ===================================================================================================================

    return(
        <nav className={`fixed top-0 w-full border-b border-[#3e4858] backdrop-blur-xl transition-transform duration-400 z-50 ${show ? "translate-y-0" : "-translate-y-full"}`}>

            {/* Top section */}
            <div className="max-w-7xl mx-auto flex items-center justify-between px-2 md:px-4 py-1 md:py-2">

                <div className="flex justify-center items-center gap-3">

                    {/* Mobile icon for menu */}
                    <button
                    className="md:hidden p-2 text-[#F8FAFC]"
                    onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span
                            className={`block text-xl font-bold transition-transform duration-300 ease-in-out cursor-pointer ${
                            menuOpen ? "rotate-180" : "rotate-0"
                            }`}
                        >
                            {menuOpen ? "✕" : "☰"}
                        </span>
                    </button>

                    {/* Logo */}
                    <Link
                    to="/"
                    onDoubleClick={(e) => {
                        e.preventDefault(); // Prevent navigation
                        setShowAdminModal(true);
                    }}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text font-bold text-transparent text-lg md:text-xl flex justify-center items-center cursor-pointer"
                    >
                    CraftDex
                    </Link>

                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-12 text-sm font-medium">
                    <li>
                        <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `group relative pb-1 transition-colors duration-200 ${
                            isActive
                                ? "text-[#3B82F6]"
                                : "text-[#CBD5E1] hover:text-[#F8FAFC]"
                            }`
                        }
                        >
                        {({ isActive }) => (
                            <>
                            About
                            <span
                                className={`absolute left-0 -bottom-1 h-0.5 bg-[#3B82F6]
                                transition-all duration-300 ease-out
                                ${
                                    isActive
                                    ? "w-full"
                                    : "w-0 group-hover:w-full"
                                }`}
                            />
                            </>
                        )}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                        to="/services"
                        className={({ isActive }) =>
                            `group relative pb-1 transition-colors duration-200 ${
                            isActive
                                ? "text-[#3B82F6]"
                                : "text-[#CBD5E1] hover:text-[#F8FAFC]"
                            }`
                        }
                        >
                        {({ isActive }) => (
                            <>
                            Services
                            <span
                                className={`absolute left-0 -bottom-1 h-0.5 bg-[#3B82F6]
                                transition-all duration-300 ease-out
                                ${
                                    isActive
                                    ? "w-full"
                                    : "w-0 group-hover:w-full"
                                }`}
                            />
                            </>
                        )}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                        to="/resources"
                        className={({ isActive }) =>
                            `group relative pb-1 transition-colors duration-200 ${
                            isActive
                                ? "text-[#3B82F6]"
                                : "text-[#CBD5E1] hover:text-[#F8FAFC]"
                            }`
                        }
                        >
                        {({ isActive }) => (
                            <>
                            Resources
                            <span
                                className={`absolute left-0 -bottom-1 h-0.5 bg-[#3B82F6]
                                transition-all duration-300 ease-out
                                ${
                                    isActive
                                    ? "w-full"
                                    : "w-0 group-hover:w-full"
                                }`}
                            />
                            </>
                        )}
                        </NavLink>
                    </li>
                </ul>

                {/* Desktop Right Section */}
                <div className="md:flex items-center gap-4">

                    {session ? (
                        <div ref={dropdownRef} className="hidden md:block relative group">
                            {/* Profile Button */}
                            <button
                                onClick={() => setIsOpen((prev) => !prev)}
                                className="w-10 h-10 flex items-center justify-center rounded-full
                                        bg-[#101B30]
                                        border border-[#1B2B45]
                                        text-slate-300
                                        hover:bg-[#16233D]
                                        hover:text-white
                                        transition-all duration-200"
                            >
                                <FaUser className="text-sm" />
                            </button>

                            {/* Dropdown */}
                            <div
                                className={`
                                    absolute top-full right-0 mt-2 w-64
                                    rounded-xl border border-[#1B2B45]
                                    bg-[#101B30] shadow-xl z-50
                                    transition-all duration-200

                                    ${
                                        isOpen
                                            ? "opacity-100 visible translate-y-0"
                                            : "opacity-0 invisible -translate-y-2"
                                    }

                                    md:group-hover:opacity-100
                                    md:group-hover:visible
                                    md:group-hover:translate-y-0
                                `}
                            >
                                {/* User Info */}
                                <div className="p-4 border-b border-[#1B2B45]">
                                    <h3 className="text-white font-semibold text-base sm:text-lg truncate">
                                        {session?.user?.user_metadata?.name ||
                                        session?.user?.user_metadata?.username ||
                                        "User"}
                                    </h3>

                                    <p className="text-slate-400 text-xs sm:text-sm truncate">
                                        {session?.user?.email}
                                    </p>
                                </div>

                                {/* Menu */}
                                <div className="py-2">
                                    <Link
                                        to="/setting"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-3 px-4 py-2
                                                text-slate-300 hover:bg-[#16233D]
                                                hover:text-white transition"
                                    >
                                        <FaCog className="text-lg" />
                                        <span>Settings</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="hidden md:flex items-center gap-2">
                            {/* Login */}
                            <Link
                                to="/login"
                                className="px-5 py-2 rounded-full bg-[#3B82F6] text-white font-semibold hover:bg-[#2563EB] transition-colors duration-200 cursor-pointer"
                            >
                                Login
                            </Link>

                            {/* Sign Up */}
                            <Link
                                to="/signup"
                                className="px-5 py-2 rounded-full border border-[#1B2B45] bg-transparent text-[#CBD5E1] font-semibold hover:bg-[#101B30] hover:text-[#F8FAFC] transition-colors duration-200 cursor-pointer"
                            >
                                Sign Up
                            </Link>
                        </div>
                    )}

                </div>

                {/* Mobile auth button */}
                <div className="md:hidden">

                    {session ? (
                        <div ref={dropdownRef} className="md:hidden urelative group">
                            {/* Profile Button */}
                            <button
                                onClick={() => setIsOpen((prev) => !prev)}
                                className="w-10 h-10 flex items-center justify-center rounded-full
                                        bg-[#101B30]
                                        border border-[#1B2B45]
                                        text-slate-300
                                        hover:bg-[#16233D]
                                        hover:text-white
                                        transition-all duration-200"
                            >
                                <FaUser className="text-sm" />
                            </button>

                            {/* Dropdown */}
                            <div
                                className={`
                                    absolute right-0 mt-2 w-64
                                    rounded-xl border border-[#1B2B45]
                                    bg-[#101B30] shadow-xl z-50
                                    transition-all duration-200

                                    ${
                                        isOpen
                                            ? "opacity-100 visible translate-y-0"
                                            : "opacity-0 invisible -translate-y-2"
                                    }

                                    md:group-hover:opacity-100
                                    md:group-hover:visible
                                    md:group-hover:translate-y-0
                                `}
                            >
                                {/* User Info */}
                                <div className="p-4 border-b border-[#1B2B45]">
                                    <h3 className="text-white font-semibold text-base sm:text-lg truncate">
                                        {session?.user?.user_metadata?.name ||
                                        session?.user?.user_metadata?.username ||
                                        "User"}
                                    </h3>

                                    <p className="text-slate-400 text-xs sm:text-sm truncate">
                                        {session?.user?.email}
                                    </p>
                                </div>

                                {/* Menu */}
                                <div className="py-2">
                                    <Link
                                        to="/setting"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-3 px-4 py-2
                                                text-slate-300 hover:bg-[#16233D]
                                                hover:text-white transition"
                                    >
                                        <FaCog className="text-lg" />
                                        <span>Settings</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Link
                            to='/login'
                            className="not-visited:py-2 rounded-full bg-[#3B82F6] text-white font-semibold hover:bg-[#2563EB] transition-colors px-5"
                        >
                        Login
                        </Link>
                    )}

                </div>

            </div>

            {/* Mobile menu */}
            <div
            className={`md:hidden overflow-hidden border-t border-[#3e4858] backdrop-blur-xl
                transition-all duration-300 ease-in-out
                ${
                menuOpen
                    ? "max-h-96 opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-3 border-t-0"
                }`}
            >
                <div className="px-6 py-5">

                    {/* Navigation */}
                    <div className="flex flex-col gap-1">

                        <NavLink
                        to="/about"
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                            `rounded-full px-6 py-3 text-base font-medium transition-all duration-200 ${
                            isActive
                                ? "bg-[#101B30] text-[#3B82F6]"
                                : "text-[#CBD5E1] hover:bg-[#101B30] hover:text-[#F8FAFC]"
                            }`
                        }
                        >
                        About
                        </NavLink>

                        <NavLink
                        to="/services"
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                            `rounded-full px-6 py-3 text-base font-medium transition-all duration-200 ${
                            isActive
                                ? "bg-[#101B30] text-[#3B82F6]"
                                : "text-[#CBD5E1] hover:bg-[#101B30] hover:text-[#F8FAFC]"
                            }`
                        }
                        >
                        Services
                        </NavLink>

                        <NavLink
                        to="/resources"
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                            `rounded-full px-6 py-3 text-base font-medium transition-all duration-200 ${
                            isActive
                                ? "bg-[#101B30] text-[#3B82F6]"
                                : "text-[#CBD5E1] hover:bg-[#101B30] hover:text-[#F8FAFC]"
                            }`
                        }
                        >
                        Resources
                        </NavLink>

                    </div>

                    {!session && (
                        <div>
                            {/* Divider */}
                            <div className="my-6 border-t border-[#3e4858]" />

                            {/* Auth Buttons */}
                            <div className="flex flex-col gap-3">
                                <Link
                                    to="/login"
                                    className="h-11 rounded-full bg-[#3B82F6] text-white font-medium hover:bg-[#2563EB] transition-colors flex justify-center items-center"
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/signup"
                                    className="h-11 rounded-full border border-[#1B2B45] text-[#CBD5E1] font-medium hover:bg-[#101B30] transition-colors flex justify-center items-center"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    )}

                </div>
            </div>

            {showAdminModal && (
            <div className="fixed inset-0 z-[9999] flex min-h-screen w-screen items-center justify-center bg-black/80 backdrop-blur-sm">
                <div className="w-full max-w-md rounded-2xl border border-[#1B2B45] bg-[#050B18] p-8 shadow-2xl">
                <h2 className="text-2xl font-bold text-white">
                    Administrator Login
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                    Enter the administrator password to continue.
                </p>

                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-6 w-full rounded-lg border border-[#1B2B45] bg-[#0B1220] px-4 py-3 text-white outline-none focus:border-blue-500"
                />

                <div className="mt-6 flex justify-end gap-3">
                    <button
                    onClick={() => {
                        setShowAdminModal(false);
                        setPassword("");
                    }}
                    className="rounded-lg border border-gray-600 px-4 py-2 text-gray-300 hover:bg-gray-800"
                    >
                    Cancel
                    </button>

                    <button
                    onClick={handleAdminLogin}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    >
                    Login
                    </button>
                </div>
                </div>
            </div>
            )}
        </nav>
    )
}

export default NavBarSection;