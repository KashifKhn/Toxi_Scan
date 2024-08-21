import React from "react";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="bg- text-primary flex justify-center px-4 shadow-sm op shadow-primary">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/text">Text</NavLink>
      <NavLink href="/upload">Upload</NavLink>
      <NavLink href="/comment-">Comment</NavLink>
      <div className="ml-auto text-primary my-auto pt-1">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
