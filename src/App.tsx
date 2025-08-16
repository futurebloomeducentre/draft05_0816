import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import GroupCourses from './components/GroupCourses';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WeatherPolicy from './components/WeatherPolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/weather-policy" element={<WeatherPolicy />} />
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <About />
              <GroupCourses />
              <Courses />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;