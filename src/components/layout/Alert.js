import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const InfoBox = styled.div`
  position: absolute;
  width: 100%;
  max-width: 300px;
  background-color: ${p => p.theme.primary};
  border-radius: 5px;
  right: 0px;
  border-radius: 4px;
  border: none !important;
  font-size: 1em;
  padding: 15px !important;
  font-family: 'Open Sans';
  margin-bottom: 15px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  background-color: #FFFFFF;
  color: #181A1D;
  border: 1px solid red;
`;

const Alert = () => {

  const alert = useSelector((state) => state.alerts);

  return (
    alert.status === 'active' && (
      <InfoBox>
        <i className='fas fa-info-circle' /> {alert.message}
      </InfoBox>
    )
  );
};

export default Alert;