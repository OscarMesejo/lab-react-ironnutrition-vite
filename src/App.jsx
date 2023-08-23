import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";


function App() {

  const [foodsList, setFoodsList] = useState(foodsJson);

  function handleDelete(foodsJsonId) {
    console.log(foodsJsonId);
    const newArray = foodsJson.filter((foodsJson) => {
      return foodsJson.id !== foodsJsonId;
    })
    setFoodsList(newArray)
    console.log(newArray)
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      {foodsList.map((food) => <FoodBox key={food.id} handleDelete={handleDelete} food={food} />)}


    </div>
  );
}

export default App;
