import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiOutlineMoon,
  HiOutlineSun,
} from "react-icons/hi";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-slate-600 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
            T
          </div>

          <div>
            <h1 className="font-bold text-xl text-slate-900">
              TalentHub
            </h1>

            <p className="text-xs text-slate-500">
              Find Your Dream Career
            </p>
          </div>
        </NavLink>

        {/* Desktop Navigation */}

        <nav className="hidden md:flex items-center gap-8">

          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/" className={navLinkClass}>
            Jobs
          </NavLink>

          <NavLink to="/saved" className={navLinkClass}>
            Saved Jobs
          </NavLink>

        </nav>

        {/* Desktop Buttons */}

        <div className="hidden md:flex items-center gap-4">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="h-10 w-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100 transition"
          >
            {darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
          </button>

          <button className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition">
            Post Job
          </button>

        </div>

        {/* Mobile Button */}

        <button
          className="md:hidden text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <HiOutlineX />
          ) : (
            <HiOutlineMenuAlt3 />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {mobileOpen && (

        <div className="md:hidden bg-white border-t border-slate-200">

          <nav className="flex flex-col p-5 gap-5">

            <NavLink to="/" onClick={()=>setMobileOpen(false)}>
              Home
            </NavLink>

            <NavLink to="/" onClick={()=>setMobileOpen(false)}>
              Jobs
            </NavLink>

            {/* <NavLink to="/saved" onClick={()=>setMobileOpen(false)}>
              Saved Jobs
            </NavLink> */}

            <button className="bg-blue-600 text-white rounded-lg py-3">
              Post Job
            </button>

          </nav>

        </div>

      )}

    </header>
  );
};

export default Navbar;