import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center h-14 bg-white shadow-lg">
      <div className="w-[75rem] flex justify-between items-center">
        <Link to="/">Home</Link>
        <Link to="/students">Stutdents</Link>
      </div>
    </nav>
  );
}
