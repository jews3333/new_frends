import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Footer(){

    return (
        <Foot>
            <Text>&copy; 2020 NEWFRENDS. ALL RIGHTS RESERVED.</Text>
            <Text>본 사이트는 넥슨의 카트라이더 러쉬플러스와 무관한 사이트입니다.</Text>
            <Button to="/private">라이센스 및 정보이용동의</Button>
        </Foot>
    )
}

const Foot = styled.div`
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    background:#3557a1;
    height:8em;
    text-align:center;
    color:#6d8fd9;
    font-size:1.5rem;
    padding:1em;
    z-index:10;
`;

const Text = styled.p`
    margin-bottom: 1em;
`;

const Button = styled(Link)`
    border:3px solid #6d8fd9;
    padding: 0.25em 0.5em;
    display:inline-block;
    vertical-align: top;
`;

export default Footer;