import React from "react";

const Button = ({ color, text }) => {
  return (
    <button
      className="button-submit"
      style={{ backgroundColor: color }}

    >
     {text}
    </button>
  );
};

export default Button;
