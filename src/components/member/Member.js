import React, { Component } from 'react';
import styled from 'styled-components';

class Member extends Component {

    constructor(props){
        super(props);
    }


    componentDidMount(){
        this.props.onMemberList();
    }

    render(){

        const { member } = this.props;

        return (
            <Content>
                <Title>회원목록</Title>
                <Wrap>
                    <Head>
                        <Th>등급</Th>
                        <Th>닉네임</Th>
                        <Th>자기소개</Th>
                    </Head>
                    <List>
                        {member ?
                            Object.keys(member).map((user, index) => 
                                member[user].class === "Master" ?
                                    <Item key={index}>
                                        <Td>
                                            <span><Class className={member[user].class}>{member[user].class}</Class></span>
                                        </Td>
                                        <Td><span>{member[user].name}</span></Td>
                                        <Td><span>준비중...</span></Td>
                                    </Item>
                                : null
                            )
                        : null}
                        {member ?
                            Object.keys(member).map((user, index) => 
                                member[user].class === "Step" ?
                                    <Item key={index}>
                                        <Td>
                                            <span><Class className={member[user].class}>{member[user].class}</Class></span>
                                        </Td>
                                        <Td><span>{member[user].name}</span></Td>
                                        <Td><span>준비중...</span></Td>
                                    </Item>
                                : null
                            )
                        : null}
                        {member ?
                            Object.keys(member).map((user, index) => 
                                member[user].class !== "Master" && member[user].class !== "Step" ?
                                    <Item key={index}>
                                        <Td>
                                            <span><Class className={member[user].class}>{member[user].class}</Class></span>
                                        </Td>
                                        <Td><span>{member[user].name}</span></Td>
                                        <Td><span>준비중...</span></Td>
                                    </Item>
                                : null
                            )
                        : null}
                    </List>
                </Wrap>
            </Content>
                
        )
    }
}

const Content = styled.div`
    max-width:1000px;
    margin:0 auto;
    background:#fff;
    padding: 1.5em;
    height:100%;
    overflow:auto;
    position:relative;
`;

const Title = styled.h3`
    font-size: 1.8em;
    text-align: center;
    margin-bottom:1em;

    &:after {
        content:"";
        display:block;
        width: 1em;
        height:1px;
        background:#222;
        margin:1em auto 0;
    }
`;

const Wrap = styled.div`
    height:calc(100% - (1.8em * 1.2 + 3.6em));
    overflow:auto;
`;

const Head = styled.div`
    padding: 1em 0;
    background:#efefef;

    &:after {
        content:"";
        display:block;
        clear:both;
    }
`;

const Th = styled.div`
    float:left;
    text-align:center;

    &:first-child {
        width:20%;
    }

    &:nth-child(2) {
        width:20%;
    }

    &:last-child {
        width:60%;
    }
`;

const List = styled.ul`

`;

const Item = styled.li`
    border-bottom:1px solid #ddd;

    &:after {
        content:"";
        display:block;
        clear:both;
    }
`;

const Td = styled.div`
    display:table;
    height:3em;
    float:left;
    text-align:center;

    &:first-child {
        width:20%;
    }

    &:nth-child(2) {
        width:20%;
    }

    &:last-child {
        width:60%;
    }

    & > span {
        display:table-cell;
        vertical-align: middle;
    }
`;

const Class = styled.i`
    display:inline-block;
    position:relative;
    vertical-align:middle;
    width:2em;
    height:2em;
    text-indent:-9999px;
    overflow:hidden;
    margin-right:0.5em;
    border-radius:50%;
    background: ${props => props.className === "Master" ? "#dd4f43" : props.className === "Step" ? "#149f5b" : "#ffce44"};
    font-style: normal;

    &:after {
        content: "${props => props.className === "Master" ? "M" : props.className === "Step" ? "S" : "F"}";
        display:block;
        color:#fff;
        position:absolute;
        top:50%;
        left:0;
        right:0;
        text-align:center;
        transform:translateY(-50%);
        text-indent:0;
    }
`;

export default Member;