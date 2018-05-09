import React, { Component } from 'react';

class Topbar extends Component {
  render() {
    return (
        <div className="top-bar container-fluid">
            <div className="actions">
                <a className="btn hidden-xs" href="mailto:omar@halbouni.ca"><i className="fa fa-paper-plane" aria-hidden="true"></i> Hire Me</a>
                <a className="btn" href="assets/CV-Halbouni,Omar-EN.pdf"><i className="fa fa-download" aria-hidden="true"></i>Download My Resume</a>
            </div>
            <ul className="social list-inline">
                <li><a href="https://www.linkedin.com/in/omarhalbouni"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                 {/* <li><a href="https://github.com/arome"><i className="fa fa-github-alt" aria-hidden="true"></i></a></li> */}
            </ul>
        </div>
    );
  }
}

export default Topbar;