import React, { useState } from "react";
import logo from "../assets/my_unsplash_logo.svg";
import Modal from "./Modal";
import AddNewModal from "./AddNewModal";

const Navbar = ({ setFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

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
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <AddNewModal setIsOpen={setIsOpen} />
        </Modal>
      </nav>
    </header>
  );
};

export default Navbar;
