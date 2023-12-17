import React from "react";
import { Card } from "../../properties/Card/Card";

export const MainSection = () => {
  return (
    <section className='main-sec'>
      <h1 className='heading'>Recent Posts</h1>
      <div className='main-sec-cards'>
        <Card className='card-item' />
        <Card className='card-item' />
        <Card className='card-item' />
        <Card className='card-item' />
      </div>
    </section>
  );
};
