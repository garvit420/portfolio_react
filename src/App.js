import Header from './components/Header/Header.js';
import Work from './components/Work/Work.js';
import Experience from './components/Experience/ProfessionalExperience.js';
import Contact from './components/Contact/Contact.js';
import Home from './components/Home/Home.js';
import MyExpertise from './components/Expertise/MyExpertise.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <MyExpertise />
      <Work />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
