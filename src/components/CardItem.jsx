import * as React from "react";
import box1 from '../img/box1.png';
import box2 from '../img/box2.png';


const CardItem = ({ name, style, cartinka, item }) => (
  <div
    style={{
      width: 280,
      height: 360,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      color: "#0F4240",
      textAlign: "center",
      border: "4px solid #C2E8F2",
      boxSizing: "border-box",
      borderRadius: "20px",
      paddingBottom: "40px",
      backdropFilter: "blur(10px)",
      boxShadow: "inset 2px 2px 15px rgba(13, 51, 49, .6)",
      ...style
    }}
  >
    <img className= "card-img" src={cartinka} />
    <h3>{name}</h3>
  </div>
);

export default CardItem;
