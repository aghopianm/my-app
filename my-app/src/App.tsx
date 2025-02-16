import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Workouts from "./components/Workouts";
import Recipes from "./components/Recipes";
import Breakfast from "./components/recipes/Breakfast";
import Lunch from "./components/recipes/Lunch";
import Dinner from "./components/recipes/Dinner";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/breakfast" element={<Breakfast />} />
        <Route path="/recipes/lunch" element={<Lunch />} />
        <Route path="/recipes/dinner" element={<Dinner />} />
      </Routes>
    </Router>
  );
}

export default App;
