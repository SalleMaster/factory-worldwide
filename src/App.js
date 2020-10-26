import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

// Components
import Nav from './components/Nav';
import Footer from './components/Footer';

// Screens
import AddDataScreen from './screens/AddDataScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
      <Nav />
      <main>
        <Route path='/add-data-screen' component={AddDataScreen} exact />
        <Route path='/' component={HomeScreen} exact />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
