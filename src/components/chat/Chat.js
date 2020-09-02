import React, { Component } from 'react';
import Write from './Write';
import Reply from './Reply';

class Chat extends Component {

    constructor(props){
        super(props);
    }


    componentDidMount(){
        this.props.onChatList();
    }

    render(){

        const { onChatWrite, onReplyWrite, chat, user } = this.props;

        return (
            <div>채팅
                <div>
                    {chat ?
                        Object.keys(chat).map((key, index) => 
                            <div key={index}>
                                <p>{chat[key].content}</p>
                                <Reply chatId={key} reply={chat[key].reply} onReplyWrite={onReplyWrite} uid={user ? user.uid : null} />
                            </div>
                        )
                    : null}
                    <Write onChatWrite={onChatWrite} uid={user ? user.uid : null} />
                </div>
            </div>
        )
    }
}

export default Chat;