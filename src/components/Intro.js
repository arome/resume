import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
    <div className="intro">
        <div className="container text-center">
            <img className="profile-image" src="assets/img/profile-image.png" alt="" />
            <h1 className="name">Omar Halbouni</h1>
            <div className="title">Full Stack Developer
            </div>
            <div className="profile">
                <p>Recent graduate in computer science. My motto in coding is to build apps that will benefit and improve
                    the quality of life by, for example,
                    <a href="https://automatetheboringstuff.com/">automating the boring stuff
                    </a> (a course I actually really enjoyed following on Udemy).</p>
            </div>
        </div>
    </div>
    );
  }
}

export default Intro;