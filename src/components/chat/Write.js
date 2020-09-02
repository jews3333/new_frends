import React, { Component } from 'react';

class Write extends Component {

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

        const { onChatWrite, uid } = this.props;

        const { content } = this.state;

        return (
            <div>채팅 글쓰기
                <div>
                    <textarea name="content" onChange={(e) => this.onChange(e)}></textarea>
                    <button onClick={() => onChatWrite(content, uid)}>작성하기</button>
                </div>
            </div>
        )
    }
}

export default Write;