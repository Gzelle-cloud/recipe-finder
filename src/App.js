import './App.css';
import Home from './Home';
import RecipesApp from './RecipesApp';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <nav>
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="/recipes" className='nav-link'>Recipes</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipesApp />} />
      </Routes>

    </Router>
  );
}

export default App;
