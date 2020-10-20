import React, { useState, useEffect, useRef } from "react";
import PacGhost from "./apps/pac";

const styles = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexWrap: "wrap",
};

const COLORS = ["red", "green", "blue", "purple"];

const App = () => {
  const divRef = useRef(null);
  const [dim, setDim] = useState({
    xCount: 0,
    yCount: 0,
  });
  useEffect(() => {
    if (divRef.current) {
      const { offsetWidth, offsetHeight } = divRef.current;
      const xCount = Math.floor(offsetWidth / 47);
      const yCount = Math.floor(offsetHeight / 45);
      setDim({ xCount, yCount });
      console.log(offsetHeight, offsetWidth);
      console.log(xCount, yCount);
    }
  }, []);
  return (
    <>
      <div ref={divRef} style={styles}>
        {dim.xCount &&
          [...Array(dim.xCount).keys()].map((k) => {
            return [...Array(dim.yCount).keys()].map((l) => (
              <PacGhost
                key={k + l}
                color={COLORS[Math.floor(Math.random() * COLORS.length)]}
                scale={0.8}
              />
            ));
          })}
      </div>
    </>
  );
};

export default App;
