import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'redux/actions';




const ToggleWrapper = styled.div`
    width: 50px;
    min-width: 50px;
    height: 25px;
    border-radius: 25px;
    border: 1px solid #666;
    margin: auto;
    display: flex;
    background-image: linear-gradient(to bottom, ${p => p.theme.primaryColor}, ${p => p.theme.secondaryColor});
`;

const Notch = styled.div`
    height: 21px;
    width: 21px;
    border: 1px solid #666;
    margin-top: 1px;
    background: white;
    border-radius: 50%;
    transition: transform 0.1s linear;
    transform: translate(${p => p.isActive ? '26px' : '1px'});
`;


const Toggle = ({isActive, onToggle}) => {

  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme);
  console.log('theme fomr the actions', theme);

  return (
    <ToggleWrapper onClick={() => dispatch(toggleTheme(theme.style))}>
      <Notch isActive={theme.style === 'dark'} />
    </ToggleWrapper>
  );
};

export default Toggle;