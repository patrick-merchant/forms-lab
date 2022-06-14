const Recipe = ({recipe}) => {

    const ingredientsList = recipe.ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>))

    return (
                <div className ="recipes">
                <h3>{recipe.cakeName}</h3>
                <h4>Ingredients:</h4>
                <ul>{ingredientsList}</ul>
                <p>Rating: {recipe.rating}</p>
                <hr />
                </div>

    )
}

export default Recipe;