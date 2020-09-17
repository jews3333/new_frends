import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class SignUp extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            id: "",
            pw: "",
            confirm: "",
            name: "",
            code: ""
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){

        const { onSignUp } = this.props;

        const { id, pw, confirm, name, code } = this.state;

        return (
            <Layer>
                <Wrap>
                    <Title>회원가입</Title>
                    <Input type="text" name="id" onChange={(e) => this.onChange(e)} placeholder="E-MAIL" />
                    <Input type="password" name="pw" onChange={(e) => this.onChange(e)} placeholder="PASSWORD" />
                    <Input type="password" name="confirm" onChange={(e) => this.onChange(e)} placeholder="PASSWORD CONFIRM" />
                    <Input type="text" name="name" onChange={(e) => this.onChange(e)} placeholder="NICKNAME" />
                    <Input type="text" name="code" onChange={(e) => this.onChange(e)} placeholder="CODE" />
                    <Submit onClick={() => onSignUp(id, pw, confirm, name, code)}>SignUp</Submit>
                    <Close to="/">닫기</Close>
                </Wrap>
            </Layer>
        )
    }
}

const Layer = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:10;
`;

const Wrap = styled.div`
    position:absolute;
    width:calc(100% - 3em);
    max-width:600px;
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

const Input = styled.input`
    width:100%;
    margin-bottom:0.25em;
    text-align: center;
`;

const Submit = styled.button`
    background:#2e3192;
    width:100%;
    vertical-align:top;
    height:2em;
    line-height:2em;
    font-size:1.4em;
    color:#fcbd11;
`;

const Close = styled(Link)`
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

export default SignUp;