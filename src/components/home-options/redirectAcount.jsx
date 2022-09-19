import React from "react";

const RedirectAcount = (props) => {
  return (
    <a
      href={'/catalogo/'+props.link}
      className="text-blue-800 m-3 text-center cursor-pointer font-bold shadow-xl rounded-xl"
    >
      <div
        className="flex justify-center items-center flex-col rounded-xl shadow-xl h-60 w-80 p-2 cursor-pointer"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundRepeat: "none",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: 'rgba(255,255,255,0.6)',
          backgroundBlendMode: 'overlay'
        }}
      >
        <h2 className="m-3 text-center font-semibold text-xl font-sans text-black">
          {props.title}
        </h2>
        {/*  {props.text} */}
      </div>
    </a>
  );
};

export default RedirectAcount;
