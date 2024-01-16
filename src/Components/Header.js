import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <ContainerHeader>
      <h2>header</h2>
    </ContainerHeader>
  )
}

export default Header;

const ContainerHeader = styled.div`
    background-color: orange;
    height: 85px;
    min-width: 100vw;
    margin: none;
`;
