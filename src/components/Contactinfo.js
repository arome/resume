import React, { Component } from 'react';

class Contactinfo extends Component {
  render() {
    return (
        <div className="contact-info">
            <div className="container text-center">
                <ul className="list-inline">
                    <li className="email">
                        <i className="fa fa-envelope"></i>
                        <a href="mailto:omar@halbouni.ca">omar@halbouni.ca</a>
                    </li>
                    <li>
                        <i className="fa fa-phone"></i>
                        <a href="tel: 15148251827">+1(514) 825-1827</a>
                    </li>
                    <li className="website">
                        <i className="fa fa-globe"></i>
                        <a href="http://omar.halbouni.ca/#" target="_blank">omar.halbouni.ca</a>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
}

export default Contactinfo;