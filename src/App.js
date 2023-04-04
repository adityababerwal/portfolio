import './App.css';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Projects/>
      <ContactMe/>
    </div>
  );
}

export default App;
