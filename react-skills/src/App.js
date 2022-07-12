import React from "react";
import ColorBox from "../src/Context/contexts/ColorBox";
import { ColorProvider } from "../src/Context/contexts/color";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
