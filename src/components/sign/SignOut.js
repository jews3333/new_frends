import React from 'react';
import styled from 'styled-components';

function SignOut(props) {

    const { onSignOut } = props;

    return (
        <Button onClick={() => onSignOut()}><span>로그아웃</span></Button>
    );
}

const Button = styled.button`
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

export default SignOut;