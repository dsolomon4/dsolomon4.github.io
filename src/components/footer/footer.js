import React, { Component } from 'react';
export default class Footer extends Component {
render() {
return (
<React.Fragment>
<footer className="w3-center w3-black w3-padding-32 w3-opacity w3-hover-opacity-off">
        <a href="#home" className="w3-button w3-light-grey"><i className="fa fa-arrow-up w3-margin-right" />To the top</a>
        <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" className="w3-hover-text-green">w3.css</a></p>
      </footer>
</React.Fragment>
);
}
}