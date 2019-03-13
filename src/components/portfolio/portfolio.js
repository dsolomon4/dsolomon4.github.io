import React, { Component } from 'react';
export default class Portfolio extends Component {
render() {
return (
<React.Fragment>
<div>
<div className="bgimg-2 w3-display-container w3-opacity-min">
        <div className="w3-display-middle">
          <span className="w3-xxlarge w3-text-white w3-wide">PORTFOLIO</span>
        </div>
      </div>

        <div className="w3-content w3-container w3-padding-64" id="portfolio">
          <h3 className="w3-center">MY WORK</h3>
          <p className="w3-center"><em>Here are some of my latest work.<br /> Click on the images to view app</em></p><br />
          {/* Responsive Grid. Four columns on tablets, laptops and desktops. Will stack wrokobile devices/small screens (100% width) */}
          <div className="w3-row-padding w3-center">
            <div className="w3-col m6">
            <label> Crystal Game </label> <br/>
            <a href="https://github.com/dsolomon4/unit-4-game" target="_blank"> <label> View Code </label> </a><br/>
            <a href="https://dsolomon4.github.io/unit-4-game/" target="_blank"> <img src="/img/crystal_game.png" className="w3-hover-opacity port-pic" alt="Crystal Game" /> </a>
            </div>
            <div className="w3-col m6">
            <label> Friend Finder </label> <br/>
            <a href="https://github.com/dsolomon4/friend_finder" target="_blank"> <label> View Code </label> </a><br/>
            <a href="https://friend-finder-by-ds.herokuapp.com/" target="_blank"> <img src="/img/friend.png"  onclick="onClick(this)" className="w3-hover-opacity port-pic" alt="Friend Finder" /></a>
            </div>

          </div>
          <div className="w3-row-padding w3-center w3-section">
          <div className="w3-col m6">
          <label> Trivia Game </label> <br/>
          <a href="https://github.com/dsolomon4/TriviaGame" target="_blank"> <label> View Code </label> </a><br/>
            <a href="https://dsolomon4.github.io/TriviaGame/" target="_blank"> <img src="/img/trivia_game.png" className="w3-hover-opacity port-pic" alt="Trivia Game" /></a>
            </div>
            <div className="w3-col m6">
            <label> Patient Management </label> <br/>
            <a href="https://github.com/dsolomon4/patient_management" target="_blank"> <label> View Code </label> </a><br/>
            <a href="https://patient-management-ds-jf.herokuapp.com/" target="_blank"> <img src="/img/patient.png"className="w3-hover-opacity port-pic" alt="Patient Management" /></a>
            </div>

          </div>
        </div>
      </div>

 

        {/* Trivia Game */}
        {/* <div className="portfolio-pics" id="triva-game">
          <img src="assets/images/trivia_game.png" alt="Trivia Game" />
          <a className="btn btn-primary" href="" target="_blank" role="button"> View Application </a>
          <a className="btn btn-primary" href="" target="_blank" role="button"> View Code </a>  
        </div> */}
      
</React.Fragment>
);
}
}