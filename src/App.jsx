import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";


function App() {

  const [foodsList, setFoodsList] = useState(foodsJson);

  function handleDelete(foodsJsonId) {
    console.log(foodsJsonId);
    const newArray = foods.filter((foodsJson) => {
      return foodsJson.id !== foodsJsonId;
    })
    setFoodsList(newArray)
    console.log(newArray)
  }

  function createFood(foodIWantToAdd){
    const newArray = [foodIWantToAdd, ...foodsJson]
    const updatedFoodList = [foodIWantToAdd, ...foodsJson]

    setFoodsJson(newArray);
    setFoods(updatedFoodList);
  }

  return (
    <div className="App">

    <AddFoodForm />

      <h1>Food List</h1>

      {foodsList.map((food) => <FoodBox key={food.id} handleDelete={handleDelete} food={food} />)}

      


    </div>
  );
}

export default App;
