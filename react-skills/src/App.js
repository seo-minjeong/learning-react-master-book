import React from "react";
import CounterContainer from "./Redux/containers/CounterContainer";
import TodosContainer from "./Redux/containers/TodosContainer";


// 카운터 기능
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
