import React, { useState, useEffect } from "react";
import dividirArrayEnTres from "../separateArray";
import Modal from "./Modal";
import DeleteImage from "./DeleteImage";
import backendUrl from "../backend-url";

const Images = ({ filter }) => {
  const [photoId, setPhotoId] = useState();
  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOnDeleteBtn = (id) => {
    setIsOpen(true);
    setPhotoId(id);
  };

  useEffect(() => {
    fetch(backendUrl + "/images/")
      .then((res) => res.json())
      .then((data) => {
        setImages(data.images);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filterArrays = images.filter((im) =>
    im.label.toLowerCase().includes(filter.toLowerCase())
  );
  const imagesArrays = dividirArrayEnTres(filterArrays);

  return (
    <div className="image-container">
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <DeleteImage imageId={photoId} setIsOpen={setIsOpen} />
      </Modal>
      <div>
        {imagesArrays[0] &&
          imagesArrays[0].map((img, i) => {
            return (
              <figure key={i} className="image-container-figure">
                <div className="delete-image-container">
                  <button
                    id={img.imageUrl}
                    onClick={() => handleClickOnDeleteBtn(img._id)}
                    className="image-container--delete_item"
                  >
                    Delete photo
                  </button>
                </div>
                <img
                  className="image-container--item"
                  src={img.imageUrl}
                  alt={img.label}
                />
                <p className="image-container--label">{img.label}</p>
              </figure>
            );
          })}
      </div>
      <div>
        {imagesArrays[1] &&
          imagesArrays[1].map((img, i) => {
            return (
              <figure key={i} className="image-container-figure">
                <div className="delete-image-container">
                  <button
                    onClick={() => handleClickOnDeleteBtn(img._id)}
                    className="image-container--delete_item"
                  >
                    Delete photo
                  </button>
                </div>
                <img
                  className="image-container--item"
                  src={img.imageUrl}
                  alt={img.label}
                />
                <p className="image-container--label">{img.label}</p>
              </figure>
            );
          })}
      </div>
      <div>
        {imagesArrays[2] &&
          imagesArrays[2].map((img, i) => {
            return (
              <figure key={i} className="image-container-figure">
                <div className="delete-image-container">
                  <button
                    onClick={() => handleClickOnDeleteBtn(img._id)}
                    className="image-container--delete_item"
                  >
                    Delete photo
                  </button>
                </div>
                <img
                  className="image-container--item"
                  src={img.imageUrl}
                  alt={img.label}
                />
                <p className="image-container--label">{img.label}</p>
              </figure>
            );
          })}
      </div>
    </div>
  );
};

export default Images;
