import React, { useState } from "react";
import BasicButton from "./muibutton";

const HeroSection = () => {
  const [name, setName] = useState("");

  return (
    <div className="body">
      <img className="breaking-news" src="src/assets/download (9).jpg" alt="" />

      <h1 className="hero-title">
        Truth You Can Trust, News You Can Count On.
      </h1>

      <form className="hero-form">
        <p> Sign-up for he latest news!</p>
        <input
          className="join-input"
          placeholder="Email"
          type="email"
          value={name}
          onChange={(e) => SVGAnimateTransformElement(e.target.value)}
        />
        <BasicButton color="blue" text="Sign up" onClick="" />
      </form>
    </div>
  );
};

export default HeroSection;
