import React from 'react'
import styled from 'styled-components';

function Footer() {
  return (
    <ContainerFooter>
      <h2>Footer</h2>
    </ContainerFooter>
  )
}

export default Footer;

const ContainerFooter = styled.div`
  background-color: orange;
  height: 95px;
  width: 100vw;
`;
