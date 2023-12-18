import React from "react";

export const Button = ({ name, href }) => {
  return (
    <div className='button-component'>
      <button>
        <a href={href}>{name}</a>
      </button>
    </div>
  );
};
