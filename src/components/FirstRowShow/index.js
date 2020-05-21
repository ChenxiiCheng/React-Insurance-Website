import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

import './style.scss';

export const FirstRowShow = (props) => {
  return (
    <Fragment>
      <div className="first-row-wrapper">
        <div className="first-row-content">
          <h1>Compare quotes and get {props.type} insurance right now!</h1>
          <div className="info-show">
            <div className="info-show-item">
              <div className="info-show-title">
                <img
                  src="https://static.policygenius.com/svgs/homeAutoBundleColor.svgz"
                  alt="item pic"
                />
                <span>The market, right here.</span>
              </div>
              <div className="info-show-content">
                Our customers save an average of $1,127/yr by shopping top-rated
                insurers in one place.
              </div>
            </div>
            <div className="info-show-item">
              <div className="info-show-title">
                <img
                  src="https://static.policygenius.com/svgs/emailColor.svgz"
                  alt="item pic"
                />
                <span>The right advice.</span>
              </div>
              <div className="info-show-content">
                Find out what you need and what you don’t. No dodgy sales
                pitches.
              </div>
            </div>
            <div className="info-show-item">
              <div className="info-show-title">
                <img
                  src="https://static.policygenius.com/svgs/agent.svgz"
                  alt="item pic"
                />
                <span>Right in your corner.</span>
              </div>
              <div className="info-show-content">
                We even re-shop your policy annually so you always have the best
                rate.
              </div>
            </div>
          </div>
          <a href="http://172.81.242.65:3000" className="button-link">
            GET STARTED
          </a>
          <div className="clock-time">
            <Icon type="clock-circle" />
            <span>3-5 minutes to complete</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
