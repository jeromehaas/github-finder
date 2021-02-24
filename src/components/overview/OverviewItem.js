import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    background-color: ${p => p.theme.primary};
    width: 100%;
    height: 100%;
    text-align: center;
    border-radius: 5px;
    display: flex; 
    flex-direction: column;
    justify-content: center; 
    padding: 30px;
`;


const Text = styled.p`
  text-align: center;
  color: ${p => p.theme.terirary};
  display: block;
`;

const Title = styled(Text)`
  font-size: 15px;
`;

const Amount = styled(Text)`
  font-size: 30px;
`;

const OverviewItem = ({ title, amount }) => {

  return (
    <Item>
      <Title>{title}</Title> 
      <Amount>{amount}</Amount> 
    </Item>
  );
};

export default OverviewItem;