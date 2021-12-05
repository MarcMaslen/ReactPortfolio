import React from "react";
import { useState, useEffect } from "react";

const Button = () => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      // do something meaningful, Promises, if/else, whatever, and then
      window.open('https://github.com/MarcMaslen', "_blank") || window.location.replace('https://github.com/MarcMaslen')
    }
  });
  return <button onClick={() => setClicked(true)}>Github</button>;
};

export default Button;
