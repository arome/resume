import React, { Component } from 'react';

class ExperienceItem extends Component {
  render() {
    return (
        <div className="item">
            <div className="work-place">
                <h3 className="place">{this.props.place}</h3>
                <div className="location">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>{this.props.location}</div>
            </div>
            <div className="job-meta">
                <div className="title">{this.props.title}</div>
                <div className="time">{this.props.time}</div>
            </div>
            <div className="job-desc">
                <p>{this.props.desc.general}</p>
                <ul>
                    {this.props.desc.tasks.map((task) =>
                     <li>{task}</li>)}
                </ul>
            </div>
        </div>
    );
  }
}

export default ExperienceItem;