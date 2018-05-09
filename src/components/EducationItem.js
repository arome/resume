import React, { Component } from 'react';

class EducationItem extends Component {
  render() {
    return (
    <div className="item col-xs-12 col-sm-6">
        <div className="item-inner">
            <h3 className="degree">{this.props.degree}</h3>
            <div className="education-body">
                {this.props.school}
            </div>
            <div className="time">{this.props.time}</div>
            <div className="desc">
                {this.props.desc}    
            </div>
        </div>
    </div>
    );
  }
}

export default EducationItem;