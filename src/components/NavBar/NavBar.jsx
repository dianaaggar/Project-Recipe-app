import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();

    setUser(null);
  }

  return (
    <nav className='navbar'>
      <img src="https://www.sweetware.com/images/recipetransparent1.png" className='logoImg' alt="Logo"></img>
      <Link to="/">Home</Link>
      <Link to="/createRecipe">Create Recipe</Link>
      &nbsp;  &nbsp;
      <Link to="/savedRecipes">Favorite Recipe</Link>
      &nbsp;&nbsp; 
      {/* <span>Welcome, {user.name}</span>
      &nbsp;&nbsp; */}

      <Link to='' onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
    
  );
}
