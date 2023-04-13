import React from 'react';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import './components/Header/Header';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Projects/>
      {/*
<About/>
      */}
      <Footer/>
    </div>
  );
}

export default App;
