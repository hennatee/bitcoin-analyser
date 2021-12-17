import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Statistics from "./Statistics";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/analyzer" element={<Statistics />}></Route>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
