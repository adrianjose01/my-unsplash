import React, { useState } from "react";
import logo from "../assets/my_unsplash_logo.svg";
import Modal from "./Modal";

const Navbar = ({ setFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <nav className="navbar">
        <ul className="navbar-list navbar-list--left">
          <li>
            <img src={logo} alt="Logo" />
          </li>
          <li>
            <input
              className="navbar-list--left__input"
              type="text"
              placeholder="Search by name"
              onChange={(e) => setFilter(e.target.value)}
            />
          </li>
        </ul>
        <ul className="navbar-list navbar-list--right">
          <li>
            <button
              onClick={() => setIsOpen(true)}
              href="/"
              className="navbar-list--right__button"
            >
              Add a photo
            </button>
          </li>
        </ul>
        <Modal open={isOpen} onClose={handleClose}>
          <h2>Add a new photo</h2>
          <p>Label:</p>
          <input type="text" />
          <p>Photo URL:</p>
          <input type="text" />
          <div>
            <button onClick={() => setIsOpen(false)}>Cancel</button>
            <button onClick={() => setIsOpen(false)}>Submit</button>
          </div>
        </Modal>
      </nav>
      {/* MOBILE */}
      <nav className="navbar-mobile">
        <ul className="navbar-list-mobile navbar-list--left-mobile">
          <li>
            <img src={logo} alt="Logo" />
          </li>
          <li>
            <input
              className="navbar-list--left__input"
              type="text"
              placeholder="Search by name"
              onChange={(e) => setFilter(e.target.value)}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
