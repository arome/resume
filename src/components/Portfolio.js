import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

class Portfolio extends Component {
  render() {
    return (
        <section id="portfolio-section" className="portfolio-section section">
        <h2 className="section-title">Portfolio</h2>
        <ul id="filters" className="filters clearfix">
          <li className="type active" data-filter="*">All</li>
          <li className="type" data-filter=".mobile">Mobile Apps</li>
          <li className="type" data-filter=".desktop">Desktop Programs</li>
        </ul>
        <div class="items-wrapper isotope row">
        {/* style="position: relative; height: 624px;" */}
            <PortfolioItem
                type="mobile"
                imgsrc="portfolio-1.jpg"
                title="Daycare Manager System"
                meta="Ionic 2/AngularJS 2"
            />
            <PortfolioItem
                type="mobile"
                imgsrc="portfolio-2.jpg"
                title="Library Management System"
                meta="Ionic 1/AngularJS 1"
            />
            <PortfolioItem
                type="mobile"
                imgsrc="portfolio-3.jpg"
                title="AquaFill"
                meta="Android"
            />
            <PortfolioItem
                type="desktop"
                imgsrc="portfolio-4.jpg"
                title="Kijiji Price Monitor"
                meta="NodeJS"
            />
            <PortfolioItem
                type="desktop"
                imgsrc="portfolio-5.jpg"
                title="Unix Shell"
                meta="C"
            />
            <PortfolioItem
                type="desktop"
                imgsrc="portfolio-6.jpg"
                title="Fido Offers Manager"
                meta="VBA"
            />
        </div>
      </section>
    );
  }
}

export default Portfolio;