import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import LogoSrc from '../resource/images/logo.png';
import SignOut from '../containers/sign/SignOutContainer';

function Nav(props){

    return (
        <Navgator user={props.user}>
            <Logo to="/" user={props.user}><img src={LogoSrc} alt='뉴프렌즈'/></Logo>
            {props.user ?
            <Menu>
                <Link to="/about" activeClassName="active"><span>클럽소개</span></Link>
                <Link to="/notice" activeClassName="active"><span>공지사항</span></Link>
                <Link to="/chat" activeClassName="active"><span>수다수다방</span></Link>
            </Menu>
            : null}
            {!props.user ? <Text>안녕하세요! 클럽 뉴프렌즈입니다! 프렌즈 친구들과 신나는 레이싱을 즐겨볼까요?</Text> : null}
            
                {props.user ?
                    <Util user={props.user}>
                        <SignOut/>
                    </Util>
                : <Util user={props.user}>
                    <SignIn to="/signin"><span>로그인</span></SignIn>
                    <SignUp to="/signup"><span>가입하기</span></SignUp>
                </Util>}

        </Navgator>
    )
}

const Navgator = styled.div`
    position:fixed;
    z-index: 10;
    left:0;
    padding: 1em;
    top: ${props => props.user ? '0' : 'calc(50% - 2.5em)'};
    right:0;
    ${props => props.user ? null : 'transform:translateY(-50%);'}
    ${props => props.user ? null : 'text-align: center;'}
    transition: all 0.5s ease;

    &:after {
        content:"";
        display:block;
        clear:both;
    }
`;

const Logo = styled(NavLink)`
    ${props => props.user ? 'float: left;' : null}
    & > img {
        transition: all 0.5s ease;
        height: ${props => props.user ? '65px' : '195px'};
    }
`;

const Menu = styled.ul`
    float:left;
    margin-left:3em;

    &:after {
        content:"";
        display:block;
        clear:both;
    }
`;

const Link = styled(NavLink)`
    display:block;
    float:left;
    font-size: 1.4em;
    padding: 0 1.5em;
    height:2em;
    line-height:2em;
    color:#fff;
    position:relative;


    &:before {
        content:"";
        display:block;
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        transform: skewX(-15deg);
    }

    & > span {
        position:relative;
    }

    &.active {
        color:#fcbd11;

        &:before {
            background:#2e3192;
        }
    }
`;

const Text = styled.p`
    color:#fff;
    font-size:1.4em;
    margin:2em 0;
`;

const Util = styled.div`
    display:inline-block;
    ${props => props.user ? 'float:right;' : null}
`;

const SignIn = styled(NavLink)`
    display:block;
    color:#fcbd11;
    font-size:1.4em;
    height:2em;
    width:8em;
    line-height:2em;
    position:relative;
    float:left;
    margin-right:0.5em;
    text-align: center;

    &:before {
        content:"";
        display:block;
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        background:#2e3192;
        transform: skewX(-15deg);
    }

    & > span {
        position:relative;
    }
`;

const SignUp = styled(NavLink)`
    display:block;
    color:#2e3192;
    font-size:1.4em;
    height:2em;
    width:8em;
    line-height:2em;
    position:relative;
    float:left;
    text-align: center;

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

export default Nav;
