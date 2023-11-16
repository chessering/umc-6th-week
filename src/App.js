import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header";
import Movies from "./pages/Movies.jsx";
import Tv from "./pages/Tv.jsx";
import Home from "./pages/Home.jsx";
import Celebrity from "./pages/Celebrity.jsx";
import NotFound from "./pages/NotFound.jsx";
import MovieDetail from "./pages/MovieDetail";


function App() {

  
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/movie/:title' element={<MovieDetail/>}/>
        <Route path='/person' element={<Celebrity/>} />
        <Route path='/tv' element={<Tv/>} />
        <Route path='/*/*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
