import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground flex justify-center px-4">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/text">Text</NavLink>
      <NavLink href="/upload">Upload</NavLink>
      <NavLink href="/comment-">Comment</NavLink>
    </nav>
  );
};

export default Navbar;
