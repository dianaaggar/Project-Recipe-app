import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from './utilities/users-service';

import AuthPage from './pages/AuthPage/AuthPage';
import CreateRecipe from './pages/CreateRecipe/CreateRecipe';
import SavedRecipesPage from './pages/SavedRecipesPage/SavedRecipesPage';
import HomePage from './pages/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage user={user} setUser={setUser} />} />
            <Route path="/createRecipe" element={<CreateRecipe user={user} setUser={setUser} />} />
            <Route path="/savedRecipes" element={<SavedRecipesPage user={user} setUser={setUser} />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;

