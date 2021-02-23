import React, { Fragment } from 'react';
import Loader from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';


const Spinner = () => {
  const theme = useSelector((state) => state.theme);
  const color = theme.style === 'dark' ? '#181A1D' : '#ffffff';
  return (
    <Loader
      type="Puff"
      color={color}
      height={60}
      width={60}
      timeout={2000}
      style={{textAlign: 'center', padding: '30px'}}
    />
  );
};

export default Spinner;