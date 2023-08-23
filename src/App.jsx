import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";


function App() {

  const [foodsList, setFoodsList] = useState(foodsJson);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      {foodsList.map((food)=><FoodBox key= {food._id} food ={food} />)}

      
    </div>
  );
}

export default App;
