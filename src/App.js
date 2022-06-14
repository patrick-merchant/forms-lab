import './App.css';
import RecipeList from './components/RecipeList';
import { useState, useRef } from 'react';

function App() {

  // FROM FORM.JS
  const inputValueRef = useRef(); 

  const [addedIngredients, setAddedIngredients] = useState([]);

  const addIngredient = () => {
      
      const addedIngredientValue = inputValueRef.current.value;

      setAddedIngredients((previousAddedIngredients) => {
          return [...previousAddedIngredients, addedIngredientValue];
      });
  }
  // END OF FORM.JS



  const [recipes, setRecipes] = useState([
    {
        cakeName: "Lemon Drizzle",
        ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
        rating: 5
    },
    {
        cakeName: "Tea Loaf",
        ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
        rating: 3
    },
    {
        cakeName: "Brownie",
        ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
        rating: 4
    },
    {
        cakeName: "Carrot Cake",
        ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
        rating: 5
    }
  ]);

  const nameInput = useRef();

  const handleSubmit = () => {

    const newName = nameInput.current.value;
    console.log(newName);

    const newRating = document.querySelector('input[name="rating"]:checked').value;;
    console.log(newRating);

    setRecipes(previousRecipes => [...previousRecipes, {
      cakeName: newName, 
      ingredients: addedIngredients, 
      rating: newRating
    }]);


}

  

  return (
      <>
        <RecipeList recipes={recipes} />
        
        {/* // FORM.JS return */}
        
        <h2>Add New Recipe:</h2>
        <input ref={nameInput} type="text" placeholder="Recipe Name"></input>
        <hr />

        <div id="ingredients">

        {/* Initialise empty array "addedIngredients"
        Add an OnClick event to this button, which adds input text to addedIngredients Array. */}
            <input ref={inputValueRef} type="text" placeholder="Ingredients"></input>
            <button onClick={addIngredient}>Add ingredient</button>
            <h4>Added Ingredients:</h4>
            <ul>{addedIngredients.map((addedIngredient, index) => (<li key={index}>{addedIngredient}</li>))}</ul>
        
            <hr />
        </div>

        <div id="rating" >
            <h4>Rating:</h4>
            <input id="1" type="radio" value="1" name="rating" ></input>
            <label htmlFor="1">1</label>

            <input id="2" type="radio" value="2" name="rating"></input>
            <label htmlFor="2">2</label>

            <input id="3" type="radio" value="3" name="rating"></input>
            <label htmlFor="3">3</label>

            <input id="4" type="radio" value="4" name="rating"></input>
            <label htmlFor="4">4</label>

            <input id="5" type="radio" value="5" name="rating"></input>
            <label htmlFor="5">5</label>
        </div>
        <hr />
        <button onClick={handleSubmit}>Submit Recipe</button>
        
      </>
  );
}

export default App;
