import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Greeting from "./containers/greeting/Greeting";
import Skills from "./containers/skills/Skills";
import WorkExperience from "./containers/workExperience/WorkExperience";
import Education from "./containers/education/Education";
import Projects from "./containers/projects/Projects";
import Footer from "./components/footer/Footer";
import Contact from "./containers/contact/Contact";

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
