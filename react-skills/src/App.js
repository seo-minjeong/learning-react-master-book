import React from "react";
import SelectColors from "./SelectColors";
import ColorBox from "../src/Context/contexts/ColorBox";
import { ColorProvider } from "../src/Context/contexts/color";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
