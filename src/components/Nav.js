import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Nav(){

    return (
        <Navgator>
            <NavLink to="/about" activeClassName="active">About</NavLink>
            <NavLink to="/notice" activeClassName="active">Notice</NavLink>
            <NavLink to="/chat" activeClassName="active">Chat</NavLink>
        </Navgator>
    )
}

const Navgator = styled.div`
    position:fixed;
    z-index: 10;
    left:0;
    bottom:0;
    right:0;
    text-align: center;
`;

export default Nav;