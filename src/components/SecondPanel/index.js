import React, { Fragment } from 'react';
import './style.scss';

export const SecondPanel = () => {
  return (
    <Fragment>
      <div className="second-row-wrapper">
        <div className="second-row-block">
          <div className="second-row-content">
            <h1>What is homeowners insurance?</h1>
            <p>
              Homeowners insurance financially protects you if something bad
              happens to your home. It also covers your personal belongings, the
              cost of hotel stays if your home is too damaged to reside in, and
              legal expenses if you’re sued because of an accident.
            </p>
            <p>
              Although homeowners insurance isn’t required by law like auto
              insurance is, most mortgage lenders will require that you keep the
              home insured throughout the duration of your mortgage term.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
