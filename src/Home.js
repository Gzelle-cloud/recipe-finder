import video from "./video.mp4";

function Home() {
  return(
    <div>
      <div className="background">
        <div className="container">
          <h2>Welcome to Recipe finder!</h2>
        </div>
        <div className="container">
          <p>Discover the joy of cooking with what you already have. Simply enter the ingredients you have on hand, and we'll find recipes that match.</p>
        </div>
        <div className="container">
          <p className="box"><img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon" className="icon"/><b>No more food waste</b> – make the most of your pantry.</p>
          <p className="box"><img src="https://img.icons8.com/?size=100&id=zphNWHGZfV0i&format=png&color=000000" alt="icon" className="icon"/><b>Endless inspiration</b> – explore dishes you’ve never tried before.</p>
          <p className="box"><img src="https://img.icons8.com/?size=100&id=63256&format=png&color=000000" alt="icon" className="icon"/><b>Save time</b> – quick, easy recipes tailored to you.</p>
        </div>
        <div className="container">
          <p>Start your culinary adventure today! Go to the "Recipes" page and just type in your ingredients and let the magic begin. </p>
        </div>
      </div>

      <video autoPlay muted loop>    
        <source src={ video } type="video/mp4" />    
      </video>
      
    </div>
  );
}

export default Home;
