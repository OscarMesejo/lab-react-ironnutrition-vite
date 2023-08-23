// Your code here
import { useState } from "react"

function AddFoodForm(props){
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState();
    const [servings, setServings] = useState();

    function resetInputs(){
        setName("");
        setImage("");
        setCalories();
        setServings();
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const newForm ={
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }

        props.createFood(newForm);
        resetInputs();
    }

    return(
        <div className="AddFoodForm">
            <h1>Add Food Entry</h1>

            <form>

                <label>Name</label>
                <input type="text" name="name" id="" />

                <label>Image</label>
                <input type="text" name="image" id="" />

                <label>Calories</label>
                <input type="number" name="calories" id="" />

                <label>Servings</label>
                <input type="number" name="servings" id="" />

                <button onClick={(e) => handleSubmit(e)} type="submit">Create</button>

            </form>
        </div>
    )
}

export default AddFoodForm;