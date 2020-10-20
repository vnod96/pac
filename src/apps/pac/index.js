import React from "react";
import "./index.css";

const COLOR_MAP = {
  red: "0deg",
  green: "150deg",
  blue: "240deg",
  purple: "300deg",
};

export default ({ scale = 1, color = "blue", padding = 5, ...otherProps }) => {
  return (
    <div style={{ padding, height: 45, width: 47 }} {...otherProps}>
      <div
        className="pac"
        style={{
          transform: `scale(${scale})`,
          filter: `hue-rotate(${COLOR_MAP[color]})`,
        }}
      ></div>
    </div>
  );
};
