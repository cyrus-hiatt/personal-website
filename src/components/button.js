// src/components/Button.js
import React from "react";
import "../styles/button.css";

function Button({ children, onClick, className }) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
