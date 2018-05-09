import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
        <section id="contact-section" className="contact-section section">
            <h2 className="section-title">Get in Touch</h2>
            <div className="intro">
                <img className="profile-image" src="assets/img/profile-image.png" alt=""/>
                <div className="dialog">
                    <p>I'm currently also taking on freelance work. If you would like a developer to work on a project or need
                        some programming tutoring do not hesitate to get in contact with me! You can also visit my website
                        <a href="http://www.codehelpmtl.ca/en/"> Code Help MTL</a> if you ever need help in a programming assignment.</p>
                    <p>
                        <strong>I can help with the following:</strong>
                    </p>
                    <ul className="list-unstyled service-list">
                        <li>
                            <i className="fa fa-check" aria-hidden="true"></i> Programs in C/C++, Java, JS, Python</li>
                        <li>
                            <i className="fa fa-check" aria-hidden="true"></i> App development with the Ionic framework</li>
                    </ul>
                    <p>Drop me a line at 
                        <a href="mailto:omar@halbouni.ca"> omar@halbouni.ca</a> or call me at
                        <a href="tel:15148258127"> +1 (514) 825-1827</a>
                    </p>
                    <ul className="social list-inline">
                        <li>
                            <a href="https://www.linkedin.com/in/omarhalbouni">
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li><a href="https://github.com/arome"><i className="fa fa-github-alt" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
  }
}

export default Contact;