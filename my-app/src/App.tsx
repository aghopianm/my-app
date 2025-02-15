import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/workouts" element={<div>Workouts Page (To Be Created)</div>} />
        <Route path="/recipes" element={<div>Recipes Page (To Be Created)</div>} />
      </Routes>
    </Router>
  );
}

export default App;
