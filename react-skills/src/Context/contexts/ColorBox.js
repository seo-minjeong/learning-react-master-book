import React from "react";
import ColorConsumer from "./color";

const ColorBox = () => {
  return (
    <ColorConsumer>
      {({ state }) => (
        <>
          <div
            styled={{
              width: "64px",
              height: "64px",
              background: state.color,
            }}
          />
          <div
            styled={{
              width: "32px",
              height: "32px",
              background: state.subcolor,
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
