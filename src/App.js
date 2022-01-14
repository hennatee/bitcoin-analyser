import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Analyzer from "./Analyzer/AnalyzerPage";
import HomePage from "./Home/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/analyzer" element={<Analyzer />}></Route>
        <Route exact path="/" element={<HomePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
