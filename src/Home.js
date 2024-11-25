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
          <p>Start your culinary adventure today! Go to the "Recipes" page and just type in your ingredients and let the magic begin.</p>
        </div>
      </div>

      

      <video autoPlay muted loop>    
        <source src="https://videocdn.cdnpk.net/videos/717f5b08-2c8b-4e23-b09c-1d20d58d587c/horizontal/previews/clear/large.mp4?token=exp=1732555313~hmac=ff88914f23b46562aa9c69acb5e5e77d9b0d69b558059e6c2d0f1d1455025121" type="video/mp4" />    
      </video>
      {/*  */}
      
    </div>
  );
}

export default Home;