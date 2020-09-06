import React, { Component } from 'react';
import styled from 'styled-components';

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
            <Form>
                <TextArea name="content" onChange={(e) => this.onChange(e)}></TextArea>
                <Submit onClick={() => onChatWrite(content, uid)}>작성하기</Submit>
            </Form>
        )
    }
}

const Form = styled.div`
    position:absolute;
    bottom:1em;
    left:1em;
    right:1em;
`;

const TextArea = styled.textarea`
    width:100%;
    height:6em;
    vertical-align:top;
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

export default Write;