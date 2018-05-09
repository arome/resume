import React, { Component } from 'react';

class PortfolioItem extends Component {
  render() {
    return (
      <div className={"item col-md-4 col-xs-6 "+this.props.type}>
       {/* style="position: absolute; left: 0px; top: 0px;" */}
        <div className="item-inner">
            <figure className="figure">
                <img className="img-responsive" src={"assets/img/"+this.props.imgsrc} alt="" />
            </figure>
            <div className="content text-left">
                <h3 className="sub-title">
                    <a href="#">{this.props.title}</a>
                </h3>
                <div className="meta">{this.props.meta}</div>
                {/* <div className="action"><a href="#">View on Github</a></div> */}
            </div>
            <a className="link-mask" href="#"></a>
        </div>
    </div>
    );
  }
}

export default PortfolioItem;