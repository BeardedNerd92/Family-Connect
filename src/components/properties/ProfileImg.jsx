import React from "react";
import Placeholder from "../../assets/placeholder.jpg";

const ProfileImg = ({ src, alt, title, name }) => {
  return (
    <div
      data-bs-toggle='tooltip'
      data-bs-placement='top'
      title={!title ? "placeholder" : title}>
      <img
        className='img-thumbnail prof-img'
        src={!src ? Placeholder : src}
        alt={!alt ? "Placeholder" : alt}
      />
      <h6>{name}</h6>
    </div>
  );
};

export default ProfileImg;
