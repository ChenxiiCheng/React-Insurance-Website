import React, { Fragment } from 'react';
import './style.scss';

export const FooterCom = () => {
  return (
    <Fragment>
      <div className="footer-wrapper">
        <div className="footer-block">
          <h2>Security you can trust</h2>
          <div className="items">
            <span>Trust & Security</span> | <span>Privacy Policy</span> |
            <span>Terms</span> | <span>Licenses</span>
          </div>
          Copyright &copy; We Do Secure (WDS) 2020 &copy; Chenxii
        </div>
      </div>
    </Fragment>
  );
};
