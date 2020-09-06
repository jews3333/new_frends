import React from 'react';
import styled from 'styled-components';

function Footer(){

    return (
        <Foot>
            <p style={{marginBottom:'1em'}}>&copy; 2020 NEWFRENDS. ALL RIGHTS RESERVED.</p>
            <p>본 사이트는 넥슨의 카트라이더 러쉬플러스와 무관한 사이트입니다.</p>
        </Foot>
    )
}

const Foot = styled.div`
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    background:#3557a1;
    height:5em;
    text-align:center;
    color:#6d8fd9;
    font-size:1.5rem;
    padding:1em;
    z-index:1;
`;

export default Footer;