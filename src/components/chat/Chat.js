import React, { Component } from 'react';
import Write from './Write';
import Reply from './Reply';
import styled from 'styled-components';
import { FormatDate } from '../../modules/common';

class Chat extends Component {

    constructor(props){
        super(props);
    }


    componentDidMount(){
        this.props.onChatList();
    }

    render(){

        const { onChatWrite, onChatDelete, onReplyWrite, onReplyDelete, chat, user } = this.props;

        return (
            <Content>
                <Title>수다수다방</Title>

                <ChatWrap>
                {chat ?
                    Object.keys(chat).map((key, index) => 
                        <Item key={index}>
                            <Info>
                                <Name><Class className={chat[key].class}>{chat[key].class}</Class>{chat[key].name}</Name>
                                <Date><span>{FormatDate(chat[key].date.seconds)}</span></Date>
                                <Delete onClick={() => onChatDelete(key, user.uid)}><span>삭제</span></Delete>
                            </Info>
                            <Text>{chat[key].content}</Text>
                            <Reply chatId={key} reply={chat[key].reply} onWrite={onReplyWrite} onDelete={onReplyDelete} uid={user ? user.uid : null} />
                        </Item>
                    )
                : null}
                </ChatWrap>

                <Write onChatWrite={onChatWrite} uid={user ? user.uid : null} />
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
    overflow:hidden;
    position:relative;
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

const ChatWrap = styled.div`
    height:calc(100% - (1.8em * 1.2 + 3.6em) - (6em + 1.4em * 2));
    overflow:auto;
`;

const Item = styled.div`
    margin-bottom: 1em;
`;

const Info = styled.div`
    border-bottom:1px solid #ccc;
    padding: 0.5em;

    &:after {
        content:"";
        display:block;
        clear:both;
    }
`;

const Name = styled.div`
    height:2em;
    float:left;
    vertical-align: middle;
    font-size:1.1em;

    & > span {
        vertical-align: middle;
    }
`;

const Date = styled.div`
    display:table;
    height:2em;
    float:left;
    margin-left:1em;
    color:#777;

    & > span {
        display:table-cell;
        vertical-align: middle;
    }
`;

const Class = styled.span`
    display:inline-block;
    position:relative;
    vertical-align:middle;
    width:2em;
    height:2em;
    text-indent:-9999px;
    overflow:hidden;
    margin-right:0.5em;
    border-radius:50%;
    background: ${props => props.className == "Master" ? "#dd4f43" : props.className == "Step" ? "#149f5b" : "#ffce44"};

    &:after {
        content: "${props => props.className == "Master" ? "M" : props.className == "Step" ? "S" : "F"}";
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

const Text = styled.p`
    word-break:breal-word;
    padding:1em;
    min-height:4em;
`;

const Delete = styled.button`
    display:block;
    color:#2e3192;
    font-size:1em;
    height:2em;
    width:4em;
    line-height:2em;
    position:relative;
    float:right;
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
        background:#fcbd11;
        transform: skewX(-15deg);
    }

    & > span {
        position:relative;
    }
`;

export default Chat;