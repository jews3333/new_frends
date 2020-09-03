import React, { Component } from 'react';

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
            <div>리플
                <div>
                    {reply ?
                        Object.keys(reply).map((key, index) => 
                            <div key={index}>
                                <p>{reply[key].content} <button onClick={() => onDelete(chatId, key, uid)}>삭제</button></p>
                            </div>
                        )
                    : null}
                </div>
                <div>
                    <textarea name="content" onChange={(e) => this.onChange(e)}></textarea>
                    <button onClick={() => onWrite(chatId, content, uid )}>리플달기</button>
                </div>
            </div>
        )
    }
}

export default Reply;