function ShowRecipes({label, image, calories, ingredients, cuisine, url}) {
  
  return(
    <div>
      
      <div className="container">
        <h2>{label} ({calories.toFixed()} calories)</h2>
      </div> 
      <div className="container">
        <p className="tag">#{cuisine}</p>
      </div> 
      <div className="container">
        <img src={image} width="300px" alt="dish"/>
      </div>
      <div className="container"> 
          
          <ul className="container list">
            {ingredients.map((ingredient, id) => (
              <li key={id}>                
                {ingredient}
              </li>
            ))}
          </ul>       
        
      </div>
      <div className="container">
        <a href={url} target="_blank">Go to source page</a>
      </div>     

    </div>
  );
}

export default ShowRecipes;