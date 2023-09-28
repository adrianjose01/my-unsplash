import React, { useRef } from "react";

const DeleteImage = ({ setIsOpen, imageId }) => {
  const passwordRef = useRef();

  const handleDeleteImage = () => {
    const password = passwordRef.current.value;

    fetch(`https://my-unsplash-backend-zb76.onrender.com/images/${imageId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    })
      .then((res) => res.json())
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
      <h2 className="modal-title">Are you sure?</h2>
      <p className="modal-label">password:</p>
      <input ref={passwordRef} className="input-modal" type="password" />
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
  );
};

export default DeleteImage;
