import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/navbar';
import AppRouter from './routes/router';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
        <AppRouter />
      <Footer />
    </div>
  );
}

export default App;