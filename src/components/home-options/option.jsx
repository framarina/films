import React, { useState } from "react";
import RedirectAcount from "./redirectAcount";

const Options = (props) => {
  return (
    <>
      <RedirectAcount
        title={props.title}
        text="ACCEDE A TU CUENTA"
        link={props.link}
        image={props.image}
      />
    </>
  );
};

export default Options;
