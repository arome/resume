import React, { Component } from 'react';
import ExperienceItem from './ExperienceItem';

class Experience extends Component {
  render() {
    let mm_job_desc = {
        general:"Handle any database related issue of Mobile Maestria",
        tasks: [
            "Create, maintain and enhance a KPI report that display an overview of the mobile usage of the employees of the different companies Mobile Maestria serves."
            ,"Design the report with graphs and charts using the Jasper tool."
            ,"Create stored procedures to extract information used in the reports."
            ,"Fix bugs in the code."
            ,"Prepare the back-end queries that will be used by the front-end team to add new features."
        ]
    }
    let nexius_job_desc = {
        general:"Perform production support activities which involve assignment of issues and issue analysis and resolution within the specified SLA?s",
        tasks: [
            "Provide daily support with resolution of escalated tickets and act as liaison to business and technical leads to ensure issues are resolved in a timely manner"
            ,"Suggest fixes to complex issues by doing a thorough analysis of root cause and impact of the defect"
            ,"Coordinate with Application Development Team to successfully deploy software releases in both User Acceptance Testing and Production environments"
            ,"Efficiently do multitasking where the job holder will have to handle multiple customer requests from various sources."
        ]
    }
    return (
        <section id="experiences-section" className="experiences-section section">
            <h2 className="section-title">Work Experiences</h2>
            <div className="timeline">
                <ExperienceItem
                    place="Nexius"
                    location="Montreal"
                    title="Software Support Specialist"
                    time="June 2017 - Present"
                    desc={nexius_job_desc}
                />
                <ExperienceItem
                    place="Mobile Maestria"
                    location="Montreal"
                    title="Database Administrator"
                    time="January 2017 - Present"
                    desc={mm_job_desc}
                />
            </div>
        </section>
    );
  }
}

export default Experience;