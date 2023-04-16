import React from 'react';
import './App.css';
import './components/Header/Header';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
