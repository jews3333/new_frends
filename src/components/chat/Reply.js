import React, { Component } from 'react';
import styled from 'styled-components';

class Reply extends Component {

    constructor(props){
        super(props);

        this.state = {
            content: ""
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    render(){
        const { onWrite, onDelete, uid, reply, chatId } = this.props;

        const { content } = this.state;

        return (
            <ReplyWrap>
                리플
                {reply ?
                    Object.keys(reply).map((key, index) => 
                        <Item key={index}>
                            <Text>{reply[key].name}</Text>
                            <p>{reply[key].content} <button onClick={() => onDelete(chatId, key, uid)}>삭제</button></p>
                        </Item>
                    )
                : null}
                <div>
                    <TextArea name="content" onChange={(e) => this.onChange(e)}></TextArea>
                    <button onClick={() => onWrite(chatId, content, uid )}>리플달기</button>
                </div>
            </ReplyWrap>
        )
    }
}

const ReplyWrap = styled.div`

`;

const Item = styled.div`

`;

const Text = styled.p`
    word-break: break-word;
`;

const TextArea = styled.textarea`
    width:100%;
    height:5em;
`;

export default Reply;