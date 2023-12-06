import React, { useRef, useState } from "react";
import backendUrl from "../backend-url";

const DeleteImage = ({ setIsOpen, imageId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const passwordRef = useRef();

  const handleDeleteImage = async () => {
    const password = passwordRef.current.value;

    if (password.length < 5) return alert("Llene los espacios correctamente");
    setIsLoading(true);

    try {
      const response = await fetch(backendUrl + "/images/" + imageId, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
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
          {" "}
          <h2 className="modal-title">Are you sure?</h2>
          <p className="modal-label">password:</p>
          <input
            ref={passwordRef}
            className="input-modal"
            type="password"
            id="password-check"
          />
          <div style={{ textAlign: "end" }}>
            <button
              className="modal-cancel-button"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button
              className="modal-image-button btn-delete"
              onClick={() => handleDeleteImage()}
            >
              Delete
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

export default DeleteImage;
