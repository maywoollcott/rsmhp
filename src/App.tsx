import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import ContactUs from './Components/ContactUs/ContactUs';
import Mission from './Components/Mission/Mission';
import Providers from './Components/Providers/Providers';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Landing />
        <Mission />
        <Providers />
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
