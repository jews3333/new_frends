import React, { Component } from 'react';
import Write from './Write';
import Reply from './Reply';
import styled from 'styled-components';

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
                <Title>채팅</Title>
                <div>
                    {chat ?
                        Object.keys(chat).map((key, index) => 
                            <div key={index}>
                                <p>{chat[key].content} <button onClick={() => onChatDelete(key, user.uid)}>삭제</button></p>
                                <Reply chatId={key} reply={chat[key].reply} onWrite={onReplyWrite} onDelete={onReplyDelete} uid={user ? user.uid : null} />
                            </div>
                        )
                    : null}
                    <Write onChatWrite={onChatWrite} uid={user ? user.uid : null} />
                </div>
            </Content>
        )
    }
}

const Content = styled.div`
    max-width:1000px;
    margin:0 auto;
    background:#fff;
    padding: 1.5em 1.5em calc(1.5em + (2em * 1.4) + 1em);
    height:100%;
    overflow:auto;
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

export default Chat;