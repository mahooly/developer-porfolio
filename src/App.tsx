import React from 'react';
import './styles/App.css';
import Header from './components/Header'
import Greeting from "./containers/Greeting";
import Skills from "./containers/Skills";
import WorkExperience from "./containers/WorkExperience";
import Education from "./containers/Education";
import Projects from "./containers/Projects";
import Footer from "./components/Footer";
import Contact from "./containers/Contact";

const App: React.FC = () => (
    <div>
        <Header/>
        <Greeting/>
        <Skills/>
        <WorkExperience/>
        <Education/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
);

export default App;
