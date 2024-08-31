// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
// import Contact from './pages/Contact';
// import About from './pages/About';
// import Dashboard from './pages/Dashboard';
import Login from './pages/Login.jsx'
import Signup from './pages/SignUp.jsx';
// import Dashboard from './pages/Dashboard.jsx';
import Categories from './pages/Categories.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import PlantDetails from './pages/PlantDetails';
import ViewAllPlants from './pages/ViewAllPlants.jsx';
import PlantPage from './pages/PlantPage.jsx';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/login"element={<Login/>}/>
        <Route path="/signup"element={<Signup/>}/>
        <Route path="/Categories"element={<Categories/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/plant-details/:categoryId" element={<PlantDetails />} />
        <Route path="/view-all-plants" element={<ViewAllPlants/>}/>
        {/* <Route path="/plants" element={<PlantPage />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />}/> */}
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
         /> */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;

