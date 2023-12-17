import React from "react";
import Placeholder from "../../../assets/placeholder.jpg";
import ProfileImg from "../ProfileImg";

export const Card = ({ href, src, alt, cardText }) => {
  return (
    <div>
      <div className='card cards' style={{ width: "14rem" }}>
        <ProfileImg />
        <a href={href}>
          <img
            src={!src ? Placeholder : src}
            className='card-img-top'
            alt={!alt ? "Placeholder" : alt}
          />
          <div className='card-body'>
            <p className='card-text'>
              {!cardText ? "No expert to show at this time" : cardText}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};
