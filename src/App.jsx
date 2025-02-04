import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';;
import NavigationBar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Schedule from './components/Schedule';
import Team from './components/Team';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">

                <NavigationBar sections={['about', 'team', 'schedule', 'documentation']} />
                <HeroSection id="home" /> {/* Dodano ID dla sekcji */}
                <About id="O projekcie" /> {/* Dodano ID dla sekcji */}
                <Team id="Zespó³" /> {/* Dodano ID dla sekcji */}
                <Schedule id="Harmonogram" /> {/* Dodano ID dla sekcji */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
