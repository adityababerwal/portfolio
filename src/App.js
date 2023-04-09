import React from 'react';
import './App.css';
import './components/Header/Header';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      {/*<Header/>*/}
      <Header/>
      <Home/>
      {/*<Projects/>*/}
    </div>
  );
}

export default App;
