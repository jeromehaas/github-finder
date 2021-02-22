import React from 'react';
import { useSelector } from 'react-redux';

const Alert = () => {

  const alert = useSelector((state) => state.alerts);

  return (
    alert.status === 'active' && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' /> {alert.message}
      </div>
    )
  );
};

export default Alert;