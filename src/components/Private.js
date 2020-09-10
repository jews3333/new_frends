import React from 'react';
import styled from 'styled-components';

function Private(){
    return (
        <Layer>
            <Wrap>
                <Title>라이센스 및 정보이용동의</Title>
                <List>
                    <li>뉴프렌즈 클럽 홈페이지에서는 다음과 같이 귀하의 E-MAIL을 수집, 이용합니다.
                        <ul>
                            <li>수집 목적 : 홈페이지 이용 및 회원관리</li>
                            <li>수집 항목 : E-MAIL 주소</li>
                            <li>개인정보 보유 및 이용기간 : 귀하의 회원탈퇴 또는 홈페이지 폐쇄 또는 관리자가 파기할때 까지</li>
                            <li>※ 개인적으로 파기를 요청하실 수 있습니다.</li>
                            <li>※ 뉴프렌즈는 귀하의 E-MAIL을 위탁하지 않습니다.</li>
                        </ul>
                    </li>
                    <li>뉴프렌즈 클럽 홈페이지는 다음과 같이 라이센스를 사용합니다.
                        <ul>
                            <li>폰트 : 홈페이지에 사용되는 폰트는 CookieRun 폰트입니다.<br/> - 라이센스 전문 : <a href="https://www.cookierunfont.com/#section7" title="새창열림" target="_blank" rel="noreferrer noopener">https://www.cookierunfont.com/#section7</a></li>
                            <li>이미지 : 카트라이더 러쉬플러스의 이미지(맵, 캐릭터 등)를 고객센터를 통해 허가를 받고 사용하고 있습니다.</li>
                        </ul>
                    </li>
                    <li>※ 뉴프렌즈 클럽 홈페이지는 넥슨의 카트라이더 러쉬플러스와 무관하며 개인소유의 홈페이지임을 밝힙니다.</li>
                </List>
                <Close onClick={() => window.history.back()}>닫기</Close>
            </Wrap>
        </Layer>
    )
}

const Layer = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:100;
`;

const Wrap = styled.div`
    position:absolute;
    width:calc(100% - 3em);
    max-width:1000px;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background: #fff;
    padding: 1.5em;
    border:5px solid #2e3192;
    color:#2e3192;
`;

const Title = styled.h3`
    font-size: 1.8em;
    text-align: center;
    margin-bottom:1em;
    line-height:1.2;

    &:after {
        content:"";
        display:block;
        width: 1em;
        height:1px;
        background:#222;
        margin:1em auto 0;
    }
`;

const List = styled.ul`
    line-height:1.4;
    color:#222;

    & > li {
        font-size: 1.2em;
        margin-bottom:1em;

        & > ul {
            margin-top:0.5em;
            padding-left:1em;
            font-size: 0.9em;
            color:#555;
            
            & > li {
                margin-bottom:0.5em;
            }
        }
    }
`;

const Close = styled.button`
    width:3em;
    height:3em;
    text-indent:-9999px;
    overflow:hidden;
    position:absolute;
    top:calc(0px - 1.5em);
    right:calc(0px - 1.5em);
    background:#fcbd11;
    border-radius:50%;
    border:5px solid #2e3192;

    &:before {
        content:"";
        display:block;
        width:5px;
        height: 70%;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%) rotate(45deg);
        background:#2e3192;
    }

    &:after {
        content:"";
        display:block;
        width:5px;
        height: 70%;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%) rotate(-45deg);
        background:#2e3192;
    }
`;

export default Private;