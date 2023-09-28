import React, { useRef } from "react";
import backendUrl from "../backend-url";

const AddNewModal = ({ setIsOpen }) => {
  const labelRef = useRef();
  const imageUrlRef = useRef();
  const passwordRef = useRef();

  const handleAddImage = () => {
    const label = labelRef.current.value;
    const imageUrl = imageUrlRef.current.value;
    const password = passwordRef.current.value;

    fetch(backendUrl + "/images", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ label, imageUrl, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        window.location.reload();
      })
      .catch((err) => {
        alert(`Something went wrong ${err}`);
      });
  };

  return (
    <>
      <h2 className="modal-title">Add a new photo</h2>
      <p className="modal-label">Label:</p>
      <input ref={labelRef} className="input-modal" type="text" />
      <p className="modal-label">Photo URL:</p>
      <input ref={imageUrlRef} className="input-modal" type="text" />
      <p className="modal-label">Password:</p>
      <input ref={passwordRef} className="input-modal" type="password" />
      <div style={{ textAlign: "end" }}>
        <button
          className="modal-cancel-button"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </button>
        <button className="modal-image-button" onClick={() => handleAddImage()}>
          Submit
        </button>
      </div>
    </>
  );
};

export default AddNewModal;
