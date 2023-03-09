import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterSection>
        <FooterContainer>
        </FooterContainer>
    </FooterSection>
  )
}

export default Footer


const FooterSection = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
    padding: 2.5rem 0;
    border-top: 1px solid rgba(0,0,0,0.1);
    background: #FF4000;
`;
const FooterContainer = styled.div`
    width: 95%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    p {
        width: 100%;
        text-align: center;
    }
`;

