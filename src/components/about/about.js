import React, { Component } from 'react';
export default class About extends Component {
render() {
return (
<React.Fragment>
<div className="bgimg-1 w3-display-container w3-opacity-min" id="home">
        <div className="w3-display-middle" style={{whiteSpace: 'nowrap'}}>
        <div>
          <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">DESIREE SOLOMON</span>
          </div>
          <div> 
          <span className="w3-center w3-padding-large web w3-xlarge w3-wide w3-animate-opacity">WEB DEVELOPER</span>

        </div>
        </div>
      </div>

<div className="w3-content w3-container w3-padding-64" id="about">
        <h3 className="w3-center">ABOUT ME</h3>
        <div className="w3-row">
          <div className="w3-col m6 w3-center w3-padding-large">
            <img src="/img/desiree.png" className="w3-round w3-image " alt="Photo of Me" width={500} height={333} />
          </div>
          {/* Hide this text on small devices */}
          <div className="w3-col m6 w3-hide-small w3-padding-large">
            <p>I am a Junior Web Developer with over 15 years of Hospitality and Customer Service experience. Bachelor from Monroe College in Hospitality Management, and a Certification from the University of Central Florida in Full Stack Web Development. Great task and time management skills.</p>
          </div>
        </div>
      </div>
</React.Fragment>
);
}
}