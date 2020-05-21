import React, { Fragment } from 'react';

import './style.scss';

export const FourRow = (props) => {
  return (
    <Fragment>
      <div className="four-row-wrapper">
        <div className="four-row-block">
          <h1>
            The following factors will determine the cost of your home insurance
            policy:
          </h1>
          <div className="four-row-content">
            <div className="four-row-content-firstline">
              <div className="four-row-card">
                <div className="four-row-banner"></div>
                <h2>Auto Fire Notification</h2>
                <p>
                  There is automatic fire notification to the fire department.
                  You can set up automatic fire notification for your
                  department.
                </p>
              </div>
              <div className="four-row-card">
                <div className="four-row-banner"></div>
                <h2>Home Security System</h2>
                <p>
                  The home security system is installed and monitored. You can
                  choose to set up security system for your department.
                </p>
              </div>
            </div>
            <div className="four-row-content-secondline">
              <div className="four-row-card">
                <div className="four-row-banner"></div>
                <h2>Swimming Pool</h2>
                <p>
                  Undergground swimming pool | Overground swimming pool | Indoor
                  swimming pool | Multiple swimming pool
                </p>
              </div>
              <div className="four-row-card">
                <div className="four-row-banner"></div>
                <h2>Basement</h2>
                <p>
                  There is a basement or there is no basement or there are
                  multiple basements in your house.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
