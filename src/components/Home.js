import React, { useContext, useState } from "react";
import { ModesContext } from "./App";

const Home = () => {
  const { color, toggle, modes } = useContext(ModesContext);

  return (
    <div className="home">
      <button onClick={toggle}>{color === modes.light ? "🌙" : "🌞"}</button>
      <h1 style={color}>Hello CodeSandbox</h1>
      <h2 style={color}>Start editing to see some magic happen!</h2>
    </div>
  )
}

export default Home;