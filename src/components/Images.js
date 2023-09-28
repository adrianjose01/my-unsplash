import React from "react";
import dividirArrayEnTres from "../separateArray";

const imgs = [
  {
    label: "First Image",
    imageUrl:
      "https://images.unsplash.com/photo-1527555197883-98e27ca0c1ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  },
  {
    label: "Second Image",
    imageUrl:
      "https://th.bing.com/th/id/R.485ce038602d4b59218c6771144bac9d?rik=anAbfDPxUB0dJg&pid=ImgRaw&r=0",
  },
  {
    label: "Third Image",
    imageUrl:
      "https://images.unsplash.com/photo-1527555197883-98e27ca0c1ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  },
  {
    label: "Fourth Image",
    imageUrl:
      "https://th.bing.com/th/id/R.571dab83ebe87e751902f4b9f278c2ae?rik=Ycr00z87qQfG2w&pid=ImgRaw&r=0",
  },
  {
    label: "Fifth Image",
    imageUrl:
      "https://images.unsplash.com/photo-1527555197883-98e27ca0c1ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  },
  {
    label: "Sixth Image",
    imageUrl:
      "https://images.unsplash.com/photo-1527555197883-98e27ca0c1ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  },
  {
    label: "Seventh Image",
    imageUrl:
      "https://images.unsplash.com/photo-1534685785745-60a2cea0ec34?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
  },
  {
    label: "Eigth Image",
    imageUrl:
      "https://www.enwallpaper.com/wp-content/uploads/photo-1570712699560-90346772c774-scaled.jpg",
  },
  {
    label: "Nineth Image",
    imageUrl:
      "https://th.bing.com/th/id/R.47ca44d102ca1fecb6f28efa010bce91?rik=6D9YHSZ%2beh9e7Q&pid=ImgRaw&r=0",
  },
];

const Images = ({ filter }) => {
  const filterArrays = imgs.filter((im) =>
    im.label.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(filterArrays);
  const imagesArrays = dividirArrayEnTres(filterArrays);
  return (
    <div className="image-container">
      <div>
        {imagesArrays[0] &&
          imagesArrays[0].map((img, i) => {
            return (
              <figure key={i} className="image-container-figure">
                <div className="delete-image-container">
                  <button className="image-container--delete_item">
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
                  <button className="image-container--delete_item">
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
                  <button className="image-container--delete_item">
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
