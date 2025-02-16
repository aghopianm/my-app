import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Workouts from "./components/Workouts";
import Recipes from "./components/Recipes";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </Router>
  );
}

export default App;
