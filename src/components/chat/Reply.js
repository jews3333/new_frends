import React, { Component } from 'react';
import styled from 'styled-components';
import { FormatDate } from '../../modules/common';

class Reply extends Component {

    constructor(props){
        super(props);

        this.state = {
            show: "none",
            content: ""
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onReplyShow = () => {
        if(this.state.show == "none") {
            this.setState({
                show: "block"
            });
        } else {
            this.setState({
                show: "none"
            });
        }
    }

    replyWrite = (chatId, content, uid) => {
        this.props.onWrite(chatId, content, uid);
        document.getElementById("replyForm").value = "";
    }
    
    render(){
        const { onWrite, onDelete, uid, reply, chatId } = this.props;

        const { show, content } = this.state;

        return (
            <ReplyWrap>
                <Button onClick={() => this.onReplyShow()} show={show}>리플 {reply ? Object.keys(reply).length : 0}</Button>
                <Hidden style={{display:show}}>
                    <List>
                        {reply ?
                            Object.keys(reply).map((key, index) => 
                                <Item key={index}>
                                    <Info>
                                        <Name><Class className={reply[key].class}>{reply[key].class}</Class>{reply[key].name}</Name>
                                        <Date><span>{FormatDate(reply[key].date.seconds)}</span></Date>
                                        {reply[key].writer === uid ?
                                        <Delete onClick={() => onDelete(chatId, key, uid)}><span>삭제</span></Delete>
                                        : null}
                                    </Info>
                                    <Text>{reply[key].content}</Text>
                                </Item>
                            )
                        : null}
                    </List>
                    <Form>
                        <TextArea name="content" id="replyForm" onChange={(e) => this.onChange(e)} placeholder="리플을 달아볼까요?"></TextArea>
                        <Submit onClick={() => this.replyWrite(chatId, content, uid)}>리플달기</Submit>
                    </Form>
                </Hidden>
            </ReplyWrap>
        )
    }
}

const ReplyWrap = styled.div`
    background:#efefef;
`;

const Button = styled.button`
    width:100%;
    padding:0.5em;
    text-align:center;
    ${props => props.show == "block" ? "background:#222;" : null}
    ${props => props.show == "block" ? "color:#efefef;" : null}
`;

const Hidden = styled.div`
    display:none;
    padding: 1em;
`;

const List = styled.div`

`;

const Item = styled.div`

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
    color:#222;
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

const Form = styled.div`

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
    height:2.5em;
    line-height:2.5em;
    font-size:1em;
    color:#fff;
`;



export default Reply;