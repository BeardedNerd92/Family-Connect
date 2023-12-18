import React from "react";
import ProfileImg from "../../properties/ProfileImg";
import Logout from "../../../assets/logout-8-32.png";
import { Button } from "../../properties/Button";

const TopHeader = () => {
  return (
    <section className='top-header'>
      <div className='logout-btn'>
        <a href=''>
          <img src={Logout} alt='Logout' />
        </a>
      </div>
      <div className='bottom-header-prof-img'>
        <ProfileImg />
      </div>
    </section>
  );
};

export default TopHeader;
