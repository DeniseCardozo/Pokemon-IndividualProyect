import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home.jsx';
import CreatePokemon from './pages/CreatePokemon.jsx';
import PokemonDetail from './pages/PokemonDetail.jsx';
import LandingPage from './pages/LandingPage.jsx';

function App() {
  return (
      <React.Fragment>     
          <Route exact path="/" component={LandingPage}/> 
          <Route exact path="/home" component={Home}/>  
          <Route exact path="/home/create" component={CreatePokemon} />
          <Route path="/detail/:idPokemon" component={PokemonDetail} /> 
      </React.Fragment>
  );
}

export default App;
