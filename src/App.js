import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Portfolio from './components/portfolio/portfolio';
import About from './components/about/about';
import'./css/style.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
