import React from "react";
import PlaceHolder from "../../../assets/placeholder.jpg";
import ProfileImg from "../../properties/ProfileImg";

const SideHeader = () => {
  return (
    <section className='sidebar '>
      <div className='sidebar-img'>
        <ProfileImg src={PlaceHolder} />
        <ProfileImg src={PlaceHolder} />
        <ProfileImg src={PlaceHolder} />
      </div>
    </section>
  );
};

export default SideHeader;
