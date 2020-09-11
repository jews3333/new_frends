import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import LogoSrc from '../resource/images/logo.png';
import SignOut from '../containers/sign/SignOutContainer';

class Nav extends Component {

    constructor(props){
        super(props);
        this.state = {
            nav: 0,
            path: props.location.pathname
        }
    }

    
    UNSAFE_componentWillReceiveProps = async (nextProps) => {

        if(nextProps.user){
            this.setState({
                nav: 1
            });
        } else {
            this.setState({
                nav: 0
            });
        }

        await this.setState({
            path: nextProps.location.pathname
        });

        if(this.state.path === "/about"){
            this.setState({
                nav: 1
            });
        }
    }

    componentDidMount(){
        if(this.state.path === "/about"){
            this.setState({
                nav: 1
            });
        }
    }

    render(){

        const { user } = this.props;

        const { nav } = this.state;

        return (
            <Navgator nav={nav}>
                <Logo to="/" nav={nav}><img src={LogoSrc} alt='뉴프렌즈'/></Logo>
                {user ?
                <Menu>
                    <Link to="/about" activeClassName="active"><span>클럽소개</span></Link>
                    <Link to="/notice" activeClassName="active"><span>공지사항</span></Link>
                    <Link to="/chat" activeClassName="active"><span>수다수다방</span></Link>
                    <Link to="/member" activeClassName="active"><span>프렌즈</span></Link>
                </Menu>
                : null}
                {!nav ? <Text>안녕하세요! 클럽 뉴프렌즈입니다! 프렌즈 친구들과 신나는 레이싱을 즐겨볼까요?</Text> : null}
                
                    {user ?
                        <Util nav={nav}>
                            <SignOut/>
                        </Util>
                    : <Util nav={nav}>
                        <SignIn to="/signin"><span>로그인</span></SignIn>
                        <SignUp to="/signup"><span>가입하기</span></SignUp>
                        {!nav ?
                        <Etc>
                            <About to="/about">클럽소개</About>
                        </Etc>
                        : null}
                    </Util>}
    
            </Navgator>
        )
    }
}

const Navgator = styled.div`
    position:fixed;
    z-index: 10;
    left:0;
    padding: 1em;
    top: ${props => props.nav ? '0' : 'calc(50% - 2.5em)'};
    right:0;
    ${props => props.nav ? null : 'transform:translateY(-50%);'}
    ${props => props.nav ? null : 'text-align: center;'}
    transition: all 0.5s ease;

    &:after {
        content:"";
        display:block;
        clear:both;
    }
`;

const Logo = styled(NavLink)`
    ${props => props.nav ? 'float: left;' : null}

    & > img {
        transition: all 0.5s ease;
        height: ${props => props.nav ? '65px' : '195px'};

        @media (max-width:1024px){
            height: ${props => props.nav ? '40px' : '150px'};
        }
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

    @media (max-width:1024px){
        float:none;
        position:fixed;
        top:calc(40px + 2em);
        right:0;
        left:0;
        z-index:10;
        margin-left:0;
        padding:0 1em;
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

    @media (max-width:1024px){
        width:25%;
        text-align: center;
        padding: 0 0.75em;
        font-size: 1em;
        margin:0.5em auto;
    }
`;

const Text = styled.p`
    color:#fff;
    font-size:1.4em;
    margin:2em 0;
    line-height:1.2;

    @media (max-width:1024px){
        font-size: 1em;
    }
`;

const Util = styled.div`
    display:inline-block;
    ${props => props.nav ? 'float:right;' : null}
`;

const SignIn = styled(NavLink)`
    display:inline-block;
    color:#fcbd11;
    font-size:1.4em;
    height:2em;
    width:8em;
    line-height:2em;
    position:relative;
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

    @media (max-width:1024px){
        width:6em;
        font-size: 1em;
    }
`;

const SignUp = styled(NavLink)`
    display:inline-block;
    color:#2e3192;
    font-size:1.4em;
    height:2em;
    width:8em;
    line-height:2em;
    position:relative;
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

    @media (max-width:1024px){
        width:6em;
        font-size: 1em;
    }
`;

const Etc = styled.div`
    margin-top:2em;
`;

const About = styled(NavLink)`
    color:#fff;
    font-size: 1.4em;
    border-bottom:5px solid #fff;

    @media (max-width:1024px){
        font-size: 1em;
        border-bottom:3px solid #fff;
    }
`;

export default withRouter(Nav);
