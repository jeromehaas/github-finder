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
    transition: background-color 0.1s ease;
    background-color: ${p => p.isDark ? p.theme.secondary :  p.theme.primary};
`;

const Notch = styled.div`
    height: 21px;
    width: 21px;
    border: 1px solid #666;
    margin-top: 1px;
    background: white;
    border-radius: 50%;
    transition: transform 0.1s linear, background-color 0.1s linear ;
    background-color: ${p => p.isDark ? p.theme.primary :  p.theme.secondary};
    transform: translate(${p => p.isDark ? '26px' : '1px'});
`;

const Toggle = ({isActive, onToggle}) => {

  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme);

  return (
    <ToggleWrapper isDark={theme.style === 'dark'} onClick={() => dispatch(toggleTheme(theme.style))}>
      <Notch isDark={theme.style === 'dark'} />
    </ToggleWrapper>
  );
};

export default Toggle;