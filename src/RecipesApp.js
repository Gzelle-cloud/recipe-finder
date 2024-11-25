import { useEffect, useState } from "react";
import ShowRecipes from "./ShowRecipes";

function RecipesApp() {
  const MY_ID = "64084af5";
  const MY_KEY = "c083694c8102811c6b9dac3ebdf7cbce";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("avocado");

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits)
    }

    getRecipe();
    
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)  
  }

  const finalSearch = (e) => {
    e.preventDefault()
    setWordSubmitted(mySearch)
  }

  return (
    <div className="App">
    <div className="container">    
      <h1>Find a Recipe</h1>    
    </div>

    <div className='container'>
      <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}></input>
      </form>
    </div>

    <div className='container'>
        <button onClick={finalSearch}>Find recipes</button>
    </div>
    {myRecipes.map((element, index) => (
      <ShowRecipes key={index}
        label={element.recipe.label} 
        image={element.recipe.image} 
        calories={element.recipe.calories} 
        ingredients={element.recipe.ingredientLines}
        cuisine={element.recipe.cuisineType}
        url={element.recipe.url} 
      />
    ))}

  </div>
  );
}

export default RecipesApp;