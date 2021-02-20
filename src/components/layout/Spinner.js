import React, { Fragment } from 'react';
import spinnerImage from 'media/spinners/spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinnerImage} alt="spinner" style={{ width: '200px', margin: '0 auto', display: 'block'}} /> 
    </Fragment>
  );
};

export default Spinner;