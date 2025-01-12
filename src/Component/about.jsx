// import React from "react";

// const About = ({}) => {
//   return (
//     <>
//       <div className="about-cards">
//         <div className="anchor-card">
//           <img className="anchor-img" src="src/assets/download (7).jpg" />
//           <h1 className="title">Ron Burgundy</h1>
//           <h2 className="text">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
//             sint dignissimos iure obcaecati a velit, rem fugiat repellat quaerat
//             deleniti quo aperiam ipsam suscipit, dolorum molestiae accusantium
//             atque sapiente? Impedit!
//           </h2>
//         </div>

//         <div className="anchor-card">
//           <img className="anchor-img" src="src/assets/download (6).jpg" />
//           <h1 className="title">Ed Harken</h1>
//           <h2 className="text">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
//             sint dignissimos iure obcaecati a velit, rem fugiat repellat quaerat
//             deleniti quo aperiam ipsam suscipit, dolorum molestiae accusantium
//             atque sapiente? Impedit!
//           </h2>
//         </div>

//         <div className="anchor-card">
//           <img className="anchor-img" src="src/assets/download (5).jpg" />
//           <h1 className="title">Brick Tamland</h1>
//           <h2 className="text">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
//             sint dignissimos iure obcaecati a velit, rem fugiat repellat quaerat
//             deleniti quo aperiam ipsam suscipit, dolorum molestiae accusantium
//             atque sapiente? Impedit!
//           </h2>
//         </div>

//         <div className="anchor-card">
//           <img className="anchor-img" src="src/assets/download (4).jpg" />
//           <h1 className="title">Champ Kind</h1>
//           <h2 className="text">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
//             sint dignissimos iure obcaecati a velit, rem fugiat repellat quaerat
//             deleniti quo aperiam ipsam suscipit, dolorum molestiae accusantium
//             atque sapiente? Impedit!
//           </h2>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiLeftArrow } from "react-icons/bi";
import { PiX } from "react-icons/pi";
import { Margin, Padding } from "@mui/icons-material";
export default function About() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider
      {...settings}
      style={{
        width: "100%",
        backgroundColor: "",
        height: "700px",
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingBottom: "2rem",
      }}
    >
      <>
        {" "}
        <div className="anchor-card">
          <img className="anchor-img" src="src/assets/download (4).jpg" />
          <h1 className="title">Champ Kind</h1>{" "}
          <h2 className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            sint dignissimos iure obcaecati a velit, rem fugiat repellat quaerat
            deleniti quo aperiam ipsam suscipit, dolorum molestiae accusantium
            atque sapiente? Impedit!{" "}
          </h2>{" "}
        </div>
      </>
      <div>
        <div className="anchor-card">
          <img className="anchor-img" src="src/assets/download (5).jpg" />
          <h1 className="title">Brick Tamland</h1>
          <h2 className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            sint dignissimos iure obcaecati a velit, rem fugiat repellat quaerat
            deleniti quo aperiam ipsam suscipit, dolorum molestiae accusantium
            atque sapiente? Impedit!
          </h2>
        </div>
      </div>
      <div>
        <div className="anchor-card">
          <img className="anchor-img" src="src/assets/download (6).jpg" />
          <h1 className="title">Ed Harken</h1>
          <h2 className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            sint dignissimos iure obcaecati a velit, rem fugiat repellat quaerat
            deleniti quo aperiam ipsam suscipit, dolorum molestiae accusantium
            atque sapiente? Impedit!
          </h2>
        </div>
      </div>

      <div className="about-cards">
        <div className="anchor-card">
          <img className="anchor-img" src="src/assets/download (7).jpg" />
          <h1 className="title">Ron Burgundy</h1>
          <h2 className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            sint dignissimos iure obcaecati a velit, rem fugiat repellat quaerat
            deleniti quo aperiam ipsam suscipit, dolorum molestiae accusantium
            atque sapiente? Impedit!
          </h2>
        </div>
      </div>
    </Slider>
  );
}
