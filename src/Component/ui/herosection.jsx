import React, { useState } from "react";
import BasicButton from "./muibutton";
import { TextField } from "@mui/material";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleClick = () => {
    console.log(`button clicked!!`);
    if (email) {
      alert(`thank you for joining, tune in to the lastest news!`);
    } else {
      alert(`Please fill out email to receive our newsletter`);
    }
  };

  return (
    <div className="body">
      <img
        className="breaking-news"
        src="earth_stars_glow_1207423_1920x1080.jpg"
        alt=""
      />

      <h1 className="hero-title">
        Truth You Can Trust, News You Can Count On.
      </h1>

      <form className="hero-form">
        <p> Sign-up for he latest news!</p>
        <TextField
          style={{
            width: "40%",
            marginTop: "30px",
            backgroundColor: "whitesmoke",
          }}
          required
          id="outlined-required"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <BasicButton color="blue" text="Sign up" onClick={handleClick} />
      </form>
    </div>
  );
};

export default HeroSection;
