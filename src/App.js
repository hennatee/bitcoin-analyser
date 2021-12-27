import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Statistics from "./StatisticsPage";
import Home from "./HomePage";

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
