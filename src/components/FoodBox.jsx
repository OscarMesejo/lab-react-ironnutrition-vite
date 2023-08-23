// Your code here

function FoodBox(props) {
    const { food, handleDelete } = props;
    console.log(props);
    return (
        <div>
            <p><b>{food.name}</b></p>

            <img width="200px" src={food.image} />

            <p>Calories: {food.calories}</p>
            <p>Servings {food.servings}</p>

            <p>
                <b>Total Calories: {food.servings} * {food.calories} </b> kcal
            </p>

            <button onClick={() => (handleDelete(food.id))}>Delete</button>
        </div>
    )
}
export default FoodBox;