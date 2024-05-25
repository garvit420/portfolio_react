import Header from './components/Header/Header.js';
import Expertise from './components/Expertise/Expertise.js';
import Work from './components/Work/Work.js';
import Experience from './components/Experience.js';
import Contact from './components/Contact/Contact.js';
import Home from './components/Home/Home.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Expertise />
      <Work />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
