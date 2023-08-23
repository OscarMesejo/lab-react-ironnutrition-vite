import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";

const [foodsList, setFoodsList] = useState();

function App() {
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
    </div>
  );
}

export default App;
