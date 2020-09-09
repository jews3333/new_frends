import React, { Component } from 'react';
import styled from 'styled-components';

class Write extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: "",
            content: "",
            id: this.props.match.params.id
        }
    }

    componentDidMount(){
        //this.props.onWriteView(this.state.id);

        //console.log(this.props);

            // this.setState({
            //     title: this.props.notice[id].title,
            //     content: this.props.notice[id].content
            // })
        if(this.state.id) {
            this.props.onWriteView(this.state.id);
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.notice){
            this.setState({
                title: nextProps.notice[this.state.id].title,
                content: nextProps.notice[this.state.id].content
            })
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){

        const { onWrite, user } = this.props;

        const { title, content, id } = this.state;

        return (
            user.class === "Master" ?
            <Content>
                <Title>공지사항 작성/수정</Title>
                <div style={{marginBottom: '0.5em'}}>
                    <input type="text" name="title" value={title} onChange={(e) => this.onChange(e)} style={{width:"100%"}} />
                </div>
                <div style={{marginBottom: '0.5em'}}>
                    <textarea name="content" value={content} onChange={(e) => this.onChange(e)} style={{width:"100%", height:"15em"}}></textarea>
                </div>
                <Buttons>
                    <Submit onClick={() => onWrite(title, content, id)}><span>작성완료</span></Submit>
                </Buttons>
            </Content>
            : <Content>
                <p style={{position:"absolute", top:"50%", left:0, right:0, textAlign:"center", transform:"translateY(-50%)"}}>관리자만 접근이 가능합니다.</p>
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

const Buttons = styled.div`
    position:absolute;
    bottom:1.5em;
    left:0;
    right:0;
    text-align: center;
`;

const Submit = styled.button`
    display:inline-block;
    vertical-align: middle;
    color:#fcbd11;
    font-size:1.4em;
    height:2em;
    width:8em;
    line-height:2em;
    position:relative;
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

export default Write;