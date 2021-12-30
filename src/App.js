import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Analyzer from "./Analyzer/AnalyzerPage";
import Home from "./HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/analyzer" element={<Analyzer />}></Route>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
