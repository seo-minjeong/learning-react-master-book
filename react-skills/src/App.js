import React from "react";
import Counter from "./Redux/components/Counter";
import Todos from "./Redux/components/Todos";

const App = () => {
  return (
    <div>
      <Counter number={0} />
      <hr />
      <Todos />
    </div>
  );
};

export default App;
