import React from 'react'
import styled from 'styled-components'
import logo from '../AF_Logo.png'


function Header() {
  return (
    <TopBar>
        <TopBarContainer>
            <Logo src={logo} alt="Airfry Logo" />
            <ul className="top-menu">
                <li>Recipes</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </TopBarContainer>
    </TopBar>
  )
}

export default Header


const TopBar = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`;
const TopBarContainer = styled.div`
    width: 95%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 300px;

        li {
            cursor: pointer;
            transition: all 0.2s ease;

            &:hover {
                color: crimson;
            }
        }
    }
`;

const Logo = styled.img`
    width: 100px;
`;