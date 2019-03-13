import React, { Component } from 'react';
export default class Contact extends Component {
render() {
return (
<React.Fragment>

<div>
        {/* Third Parallax Image with Portfolio Text */}
        <div className="bgimg-3 w3-display-container w3-opacity-min">
          <div className="w3-display-middle">
            <span className="w3-xxlarge w3-text-white w3-wide">CONTACT</span>
          </div>
        </div>
        {/* Container (Contact Section) */}
        <div className="w3-content w3-container w3-padding-64" id="contact">
          <h3 className="w3-center">GET IN TOUCH</h3>
          <div className="w3-row w3-padding-32 w3-section">

            <div className="w3-col m12 w3-panel">
              <div className="w3-large w3-margin-bottom">
                <i className="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right" /> Central Florida, US<br />
                <i className="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right" /> Email: d.d.solomon4@gmail.com<br />
               <a href="https://www.linkedin.com/in/desireesolomon104/" target="_blank"><i className="fa fa-linkedin fa-fw w3-hover-text-black w3-xlarge w3-margin-right" /></a>  Linkedin: www.linkedin.com/in/desireesolomon104 <br />
               <a href="https://github.com/dsolomon4" target="_blank"><i className="fa fa-github-square fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i></a> Github: github.com/dsolomon4 <br/>
 </div>

            </div></div></div></div>

</React.Fragment>
);
}
}