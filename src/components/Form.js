// import { useState, useRef } from "react";


// const Form = ({newRecipe}) => {

//     const inputValueRef = useRef(); 

//     const nameInput = useRef();

//     const [addedIngredients, setAddedIngredients] = useState([]);

//     const addIngredient = () => {
        
//         const addedIngredientValue = inputValueRef.current.value;

//         setAddedIngredients((previousAddedIngredients) => {
//             return [...previousAddedIngredients, addedIngredientValue];
//         });
//     }

//     const handleSubmit = () => {
//         // Extract data from Recipe Container, pass in as prop to app -so app is controlling state and we can update it there.
//         // pass in newRecipe generate callback.
//         // newRecipe: cakeName, ingredients (array), rating.
//     }

//     return (
//         <>
//         <h2>Add New Recipe:</h2>
//         <input ref={nameInput} type="text" placeholder="Recipe Name"></input>
//         <hr />

//         <div id="ingredients">

//         {/* Initialise empty array "addedIngredients"
//         Add an OnClick event to this button, which adds input text to addedIngredients Array. */}
//             <input ref={inputValueRef} type="text" placeholder="Ingredients"></input>
//             <button onClick={addIngredient}>Add ingredient</button>
//             <h4>Added Ingredients:</h4>
//             <ul>{addedIngredients.map((addedIngredient, index) => (<li key={index}>{addedIngredient}</li>))}</ul>
        
//             <hr />
//         </div>

//         <div id="rating">
//             <h4>Rating:</h4>
//             <input id="1" type="radio" value="1" name="rating"></input>
//             <label htmlFor="1">1</label>

//             <input id="2" type="radio" value="2" name="rating"></input>
//             <label htmlFor="2">2</label>

//             <input id="3" type="radio" value="3" name="rating"></input>
//             <label htmlFor="3">3</label>

//             <input id="4" type="radio" value="4" name="rating"></input>
//             <label htmlFor="4">4</label>

//             <input id="5" type="radio" value="5" name="rating"></input>
//             <label htmlFor="5">5</label>
//         </div>
//         <hr />
//         <button onSubmit={handleSubmit}>Submit Recipe</button>

//         </>
        
//     );
// }

// export default Form;