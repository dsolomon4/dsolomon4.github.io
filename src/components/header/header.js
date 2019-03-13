import React, { Component } from 'react';
export default class Header extends Component {
render() {
return (
<React.Fragment>
{/*generated code*/}
<header id="home">
<div className="w3-top">
        <div className="w3-bar w3-white w3-padding w3-card" style={{letterSpacing: '4px'}}>
          <a href="#home" className="w3-bar-item w3-button">DESIREE SOLOMON</a>
          {/* Right-sided navbar links. Hide them on small screens */}
          <div className="w3-right w3-hide-small">
            <a href="#about" className="w3-bar-item w3-button">About</a>
            <a href="#portfolio" className="w3-bar-item w3-button">Portfolio</a>
            <a href="#contact" className="w3-bar-item w3-button">Contact</a>
          </div>
        </div>
      </div>
</header>
</React.Fragment>
);
}
}