import React from "react";
import Button from "./ui/button";
import Input from "./ui/input";
import ContactCard from "./muicontact";

export const Contact = () => {
  return (
    <ContactCard />
    // <div className="page">
    //   <img
    //     className="anchors"
    //     src="src/assets/5-anchors-mc-240529-90ee07.webp"
    //     alt=""
    //   />
    //   <div className="form">
    //     <img className="helping-hand" src="src/assets/helpinghand.jpg" alt="" />
    //     <Input className="contact-input" type="text" placeholder="First Name" />
    //     <Input className="contact-input" type="text" placeholder="Last Name" />
    //     <Input className="contact-input" type="email" placeholder="Email" />
    //     <textarea
    //       name="message"
    //       rows="5"
    //       className="text-area"
    //       placeholder="FeedBack"
    //     >
    //       Feedback
    //     </textarea>
    //     <Button color="orange" text="Submit" />
    //   </div>
    // </div>
  );
};
