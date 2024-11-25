function MyRecipesComponent({label, image, calories, ingredients}) {
  
  return(
    <div>
      
      <div className="container">
        <h2>{label}</h2>
      </div> 
      <div className="container"> 
        <img src={image} width="300px" alt="dish"/>
      </div>
      <div className="container">
        <p>{calories.toFixed()} calories</p>
      </div>

      <ul className="container list">
        {ingredients.map((ingredient, id) => (
          <li key={id}>
            <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" alt="icon" className="icon"/>
            {ingredient}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default MyRecipesComponent;