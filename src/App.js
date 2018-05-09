import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar';
import Intro from './components/Intro';
import Contactinfo from './components/Contactinfo';
import Pagenav from './components/Pagenav';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div>
        <header className="header">
          <Topbar/>
          <Intro/>
          <Contactinfo/>
          <Pagenav/>
        </header>
        <Education/>
        <Portfolio/>
        <div className="wrapper container">
          <Experience/>
          <Skills/>
          <Contact/>
        </div>
        <footer class="footer text-center">
          <div class="container">
              <small class="copyright">Template Copyright @
                  <a href="http://themes.3rdwavemedia.com/" target="_blank"> 3rd Wave Media</a>
              </small>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
