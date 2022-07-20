import React from "react";
import CounterContainer from "./Redux/containers/CounterContainer";
import TodosContainer from "./Redux/containers/TodosContainer";

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;
