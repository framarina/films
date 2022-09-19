import React from "react";
import Option from "./option";

const options = () => {
  return (
    <>
      <div className="mt-4 pb-20 flex justify-center items-center flex-col md:flex-row md:flex-wrap md:justify-start">
        <Option title="JUEGO DE TRONOS" image="/images/got-main-image.jpeg" link={'got'}/>
        <Option title="LA CASA DEL DRAGÓN" image="/images/house-of-dragon-main-image.webp" link={'hod'}/>
      </div>
    </>
  );
};

export default options;
