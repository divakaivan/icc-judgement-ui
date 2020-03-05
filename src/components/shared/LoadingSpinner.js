import React from 'react';

import './LoadingSpinner.css';

/**
 * A loading spinner component. Shows two lines going in circle until a component loads.
 */
const LoadingSpinner = props => {
  return (
    <div className={`${props.asOverlay && 'loading-spinner__overlay'}`}>
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default LoadingSpinner;
