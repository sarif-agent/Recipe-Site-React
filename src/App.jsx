import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardList from './components/CardList'
import NewRecipeForm from './components/NewRecipeForm.jsx'
import Navbar from './components/Navbar.jsx'
import Welcome from './components/Welcome.jsx'
import Settings from './components/Settings.jsx';
import { ApiContextProvider } from './context/ApiContext.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';
import PrivateRoute from './Services/PrivateRoute.jsx';

import LoadingPage from './components/LoadingPage.jsx';

function App() {


  //npx json-server --watch src/recipes.json --port 3001
  //npm run dev
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Navbar />
        <ApiContextProvider>
          <Routes>
            <Route path="/loading" element={<LoadingPage />} />
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/settings" element={<PrivateRoute element={<Settings />} />} />
            <Route path="/newRecipe" element={<PrivateRoute element={<NewRecipeForm />} />} />
            <Route path="/recipes" element={<CardList />} />
          </Routes>
        </ApiContextProvider>
      </AuthContextProvider>


    </BrowserRouter >

  )
}

export default App
