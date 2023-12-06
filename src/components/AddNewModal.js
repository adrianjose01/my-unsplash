import React, { useRef, useState } from "react";
import backendUrl from "../backend-url";

const AddNewModal = ({ setIsOpen }) => {
  const [isLoading, setIsLoading] = useState(false);
  const labelRef = useRef();
  const imageUrlRef = useRef();
  const passwordRef = useRef();

  const handleAddImage = async () => {
    const label = labelRef.current.value;
    const imageUrl = imageUrlRef.current.value;
    const password = passwordRef.current.value;

    if (label === "" || password.length < 5)
      return alert("Complete correctamente los espacios");
    setIsLoading(true);

    try {
      const response = await fetch(backendUrl + "/images", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ label, imageUrl, password }),
      });
      const data = await response.json();
      alert(data.message);
    } catch (err) {
      alert(`Something went wrong ${err}`);
    } finally {
      window.location.reload();
    }
  };

  return (
    <>
      {!isLoading ? (
        <>
          <h2 className="modal-title">Add a new photo</h2>
          <p className="modal-label">Label:</p>
          <input
            ref={labelRef}
            className="input-modal"
            type="text"
            id="label"
          />
          <p className="modal-label">Photo URL:</p>
          <input
            ref={imageUrlRef}
            className="input-modal"
            type="text"
            id="imageUrl"
          />
          <p className="modal-label">Password:</p>
          <input
            ref={passwordRef}
            className="input-modal"
            type="password"
            id="password"
          />
          <div style={{ textAlign: "end" }}>
            <button
              className="modal-cancel-button"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button
              className="modal-image-button"
              onClick={() => handleAddImage()}
            >
              Submit
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="modal-title">Loading</h2>
          <div className="loading"></div>
          <div className="loading-bar" />
        </>
      )}
    </>
  );
};

export default AddNewModal;
