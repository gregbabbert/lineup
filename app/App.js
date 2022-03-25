import React from "react";
import Team from "./components/Team";
import LineupSide from "./components/LineupSide";

const App = () => {
  return (
    <div className="home">
      <LineupSide />
      <Team />
    </div>
  );
};

export default App;
