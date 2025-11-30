import React from "react";
import { Routes, Route } from "react-router-dom";
import { Landing, Home } from "./domains";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
