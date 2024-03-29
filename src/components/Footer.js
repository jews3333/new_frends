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
    height:3.5em;
    text-align:center;
    color:#6d8fd9;
    font-size:1.4rem;
    padding:1em;
    z-index:10;

    @media (max-width:1024px){
        font-size:1.2rem;
        height: 6.5em;
    }
`;

const Text = styled.span`
    display:inline-block;
    vertical-align:middle;

    @media (max-width:1024px){
        display:block;
        margin-bottom:0.5em;
    }
`;

const Button = styled(Link)`
    border:3px solid #6d8fd9;
    padding: 0.25em 0.5em;
    display:inline-block;
    vertical-align: middle;
    margin-left:1em;
`;

export default Footer;