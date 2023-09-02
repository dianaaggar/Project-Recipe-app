import { useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from './utilities/users-service';
// pages
import AuthPage from './pages/AuthPage/AuthPage';
import CreateRecipe from './pages/CreateRecipe/CreateRecipe';
import SavedRecipes from './pages/SavedRecipes/SavedRecipes';
import HomePage from './pages/HomePage/HomePage'

// components
import NavBar from './components/NavBar/NavBar'
// css
import './App.css';

function App() {
  // array destructuring
  const [user, setUser] = useState(getUser());

  return (
    <main className='App'>
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/' element={<HomePage user={user} setUser={setUser}/>} />
            <Route path='/CreateRecipe' element={<CreateRecipe user={user} setUser={setUser}/>} />
            <Route path='/SavedRecipes' element={<SavedRecipes user={user} setUser={setUser}/>} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
