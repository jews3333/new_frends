import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

class About extends Component {

    constructor(props){
        super(props);
        this.state = {
            loaded: 0
        }
    }


    onCopy = (e) => {
        const NEW = e.target.innerText;

        const t = document.createElement("textarea");

        document.body.appendChild(t);
        t.innerText = NEW;
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t);

        alert("복사되었습니다.");
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                loaded: 1
            })
        }, 31000);
    }

    render(){

        const { user } = this.props;

        const { loaded } = this.state;

        return (
            <Content loaded={loaded}>
                <Text delay="0">안녕하세요! 클럽 <span>뉴프렌즈</span>입니다!</Text>
                <Text delay="3">저희 클럽은 프렌즈의 <span>실력</span>과 <span>피지컬</span>은 중요하게 생각하지 않습니다!</Text>
                <Text delay="6">최소한의 <span>인성</span>만 갖추고 즐겁게 즐기기만 하면 됩니다!</Text>
                <Text delay="9">단, 꼭 지켜주어야하는 <span>약속</span>이 있습니다!</Text>
                <Text delay="12">하나. 남을 <span>비난</span>하고 <span>욕설</span>을 하지않는다.</Text>
                <Text delay="15">둘. <span>14일</span>간의 <span>미접속</span>은 하지않는다.</Text>
                <Text delay="18">간단하죠?</Text>
                <Text delay="21">아! 그리고 저희 클럽도 <span>시그니처 마크</span>가 있답니다.</Text>
                <Text delay="24">필수는 아니지만 뉴프렌즈의 <span>정예멤버</span>가 되길 원한다면</Text>
                <Text delay="27">꼭 닉네임 앞에 <New onClick={(e) => this.onCopy(e)}>ᴺᴱᵂ</New>를 붙혀주세요!</Text>
                {!user ? 
                <Text>
                    <SignUp to="/signup"><span>가입하기</span></SignUp>
                </Text>
                : null}
            </Content>
        )
    }
}

const Content = styled.div`

    height:100%;
    overflow:auto;
    padding:0 1em;

    & > p {
        position: ${props => props.loaded ? "relative" : "absolute"};
        opacity: ${props => props.loaded} !important;
        width: ${props => props.loaded ? "100%" : "calc(100% - 2em)"};
        ${props => props.loaded ? null : "transform:translate(-50%,-50%)"};
        ${props => props.loaded ? null : "left:50%;"}
        ${props => props.loaded ? null : "top:50%;"}
    }
`;

const Text = styled.p`
    font-size: 1.8em;
    color:#fff;
    text-align: center;
    padding: 0.4em 0;
    word-break: keep-all;
    position:absolute;
    opacity:0;
    transition: opacity 3s ease;
    line-height:1.2;
    ${props => props.delay ? `animation: textShow 3s ease;` : null} 
    ${props => props.delay ? `animation-delay: ${props.delay}s;` : null} 


    & > span {
        display:inline-block;
        background:#fcbd11;
        color:#2e3192;
        font-weight:bold;
        padding:0.1em;
    }

    @keyframes textShow {
        0% {
            opacity:0;
        }

        25% {
            opacity:1;
        }

        75% {
            opacity:1;
        }

        100% {
            opacity:0;
        }
    }

    @keyframes textShowImportant {
        from {
            opacity:0;
        }
        100% {
            opacity:1;
        }
    }

    @media (max-width:1024px){
        font-size: 1.4em;
    }
`;

const New = styled.button`
    font-family: arial, dotum, '돋움', sans-serif;
    display:inline-block;
    color:#fcbd11;
    font-weight:bold;
    padding:0.1em;
    position:relative;

    &:after {
        content:"복사하기";
        font-family: 'CookieRun', sans-serif;
        font-weight:normal;
        white-space:nowrap;
        font-size:0.4em;
        display:inline-block;
        padding: 0.1em 0.25em;
        position:absolute;
        bottom:100%;
        left:50%;;
        background:#222;
        color:#fff;
    }
`;

const SignUp = styled(NavLink)`
    display:block;
    color:#2e3192;
    height:2em;
    width:8em;
    line-height:2em;
    position:relative;
    text-align: center;
    margin:0 auto;

    &:before {
        content:"";
        display:block;
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        background:#fcbd11;
        transform: skewX(-15deg);
    }

    & > span {
        position:relative;
    }
`;

export default About;