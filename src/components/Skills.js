import React, { Component } from 'react';
import TopSkill from './TopSkill';

class Skills extends Component {
  render() {
    return (
        <section id="skills-section" className="skills-section section text-center">
            <h2 className="section-title">Professional Skills</h2>
            <div className="top-skills">
                <h3 className="subtitle">Top Skills</h3>
                <div className="row">
                    <TopSkill
                        percentage="85"
                        skillname="Java"
                        level="Junior, 2 years"
                        desc="First language I started learining and the main one used during my studies."
                    />
                    <TopSkill
                        percentage="80"
                        skillname="JavaScript"
                        level="Junior, 2 years"
                        desc="Includes experience with different JS frameworks."
                    />
                    <TopSkill
                        percentage="75"
                        skillname="Angular"
                        level="Junior, 1 year"
                        desc="I lately started working on hybrid application and this is when I started using AngularJS 1 and 2."
                    />
                </div>
            </div>
            <div className="other-skills">
                <h3 className="subtitle">Other Skills</h3>
                <div className="misc-skills">
                    <span className="skill-tag">C/C++</span>
                    <span className="skill-tag">CSS3</span>
                    <span className="skill-tag">HTML5</span>
                    <span className="skill-tag">Java</span>
                    <span className="skill-tag">JS</span>
                    <span className="skill-tag">PHP</span>
                    <span className="skill-tag">Python</span>
                    <br/>
                    <span className="skill-tag">Android</span>
                    <span className="skill-tag">AngularJS 1 &amp 2</span>
                    <span className="skill-tag">Bootstrap 3</span>
                    <span className="skill-tag">jQuery</span>
                </div>
            </div>
        </section>
    );
  }
}

export default Skills;