import React, { Component } from 'react';
import EducationItem from './EducationItem';

class Education extends Component {
  render() {
    return (
    <section id="eudcation-section" className="education-section section">
        <h2 className="section-title">Education</h2>
        <div className="row">
          <EducationItem
            degree="Bachelor of Computer Science" 
            school="University of Montreal" 
            time="2012 - 2016"
            desc=""
          />
          <EducationItem 
            degree="Diploma of College Studies" 
            school="College Bois-de-Boulogne" 
            time="2009 - 2011"
            desc=""
          />
        </div>
      </section>
    );
  }
}

export default Education;