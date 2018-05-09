import React, { Component } from 'react';

class TopSkill extends Component {
  render() {
    return (
        <div className="item col-xs-12 col-sm-4">
            <div className="item-inner">
                <div className="chart-easy-pie text-center">
                    <div className="chart-theme-1 chart" data-percent={this.props.percentage}>
                        <span>{this.props.percentage}</span>%
                        <canvas height="110" width="110"></canvas>
                        <canvas height="110" width="110"></canvas>
                    </div>
                </div>
                <h4 className="skill-name">{this.props.skillname}</h4>
                <div className="level">{this.props.level}</div>
                <div className="desc">{this.props.desc}</div>
            </div>
        </div>
    );
  }
}

export default TopSkill;