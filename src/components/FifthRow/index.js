import React, { Fragment } from 'react';

import './style.scss';

export const FifthRow = (props) => {
  return (
    <Fragment>
      <div className="fifth-row-wrapper">
        <div className="fifth-row-block">
          <h1>{props.type} Insurance Basics</h1>
          <div className="fifth-row-content">
            <div className="fifth-row-cards">
              <div className="fifth-row-item">
                <div className="fifth-row-item-banner"></div>
                <div className="fifth-row-item-title">
                  <h2>Choose</h2>
                  <img
                    src="https://policygenius-contentful.imgix.net/3uw9cov4u60w/6IXEr7SXhX4OIxx4rJbcMo/dd9b744ef47d66ef63c45e5f7c662c85/check_3x.png?fit=max&auto=format&ch=Width,DPR&w={width}"
                    alt="card logo"
                  />
                </div>
                <p>
                  Decide how much coverage you’ll need to protect your
                  belongings and your liability.
                </p>
              </div>

              <div className="fifth-row-item">
                <div className="fifth-row-item-banner"></div>
                <div className="fifth-row-item-title">
                  <h2>Pay</h2>
                  <img
                    src="https://policygenius-contentful.imgix.net/3uw9cov4u60w/3b7ROfTlzoFAhmAXs9tpJY/9af21e372f0922fb63a4fc3164b44849/claim_3x.png?fit=max&auto=format&ch=Width,DPR&w={width}"
                    alt="card logo"
                  />
                </div>
                <p>
                  Once you’ve got your policy and all available discounts,
                  you’ll pay your premium monthly or annually.
                </p>
              </div>

              <div className="fifth-row-item">
                <div className="fifth-row-item-banner"></div>
                <div className="fifth-row-item-title">
                  <h2>Choose</h2>
                  <img
                    src="https://policygenius-contentful.imgix.net/3uw9cov4u60w/1e1dGVpvbjjTKI5J6rF04s/6f3e88b8419fc2823a6dc2cbd6ffefba/payment_3x.png?fit=max&auto=format&ch=Width,DPR&w={width}"
                    alt="card logo"
                  />
                </div>
                <p>
                  If your home or belongings are damaged by an event outlined in
                  your policy, the insurance company will pay out to fix or
                  replace them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
