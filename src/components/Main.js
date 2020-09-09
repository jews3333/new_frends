import React from 'react';
import LogoSrc from '../resource/images/logo.png';
import styled from 'styled-components';

function Main(){

    return (
        <Content>
            <Logo><img src={LogoSrc} alt='뉴프렌즈'/></Logo>
            <Text>안녕하세요! 클럽 뉴프렌즈입니다! 프렌즈 친구들과 신나는 레이싱을 즐겨볼까요?</Text>
        </Content>
    )
}

const Content = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    width:100%;
    transform:translate(-50%, -50%);
    text-align:center;
    padding:1em;
`;

const Logo = styled.div`
    & > img {
        height: 195px;

        @media (max-width:1024px){
            height: 150px;
        }
    }
`;

const Text = styled.p`
    color:#fff;
    font-size:1.4em;
    margin:2em 0;
    line-height:1.2;

    @media (max-width:1024px){
        font-size:1em;
    }
`;

export default Main;