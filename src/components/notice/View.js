import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FormatDate } from '../../modules/common';
import styled from 'styled-components';

class View extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.onNoticeView(this.props.match.params.id);
    }

    render(){

        const { notice, onNoticeDelete, user } = this.props;

        return (
            <Fragment>
                {notice ?
                Object.keys(notice).map((key, index) =>
                    <Content key={index}>
                        <Title>{notice[key].title}</Title>
                        <Date>{FormatDate(notice[key].date.seconds)}</Date>
                        <Text>
                            {notice[key].content.split('\n').map((word, idx) => {
                                return (<span key={idx}>{word}<br/></span>);
                            })}
                        </Text>
                        {user.class === "Master" ?
                            <Buttons>
                                <Update to={`/notice/form/${key}`}><span>수정</span></Update>
                                <Delete onClick={() => onNoticeDelete(key)}><span>삭제</span></Delete>
                            </Buttons>
                        : null}
                    </Content>
                )
                : null}
            </Fragment>
        )
    }
}

const Content = styled.div`
    max-width:1000px;
    margin:0 auto;
    background:#fff;
    padding: 1.5em;
    height:100%;
    position:relative;
`;

const Title = styled.h3`
    font-size: 1.8em;
    text-align: center;
    margin-bottom:1em;
    line-height:1.2;
    white-space: nowrap;
    overflow:hidden;
    text-overflow:ellipsis;

    &:after {
        content:"";
        display:block;
        width: 1em;
        height:1px;
        background:#222;
        margin:1em auto 0;
    }
`;

const Date = styled.p`
    color:#999;
    text-align:center;
    margin-bottom:1em;
`;

const Text = styled.div`
    line-height:1.4;
    word-break: break-word;
    height: calc(100% - (1.8em * 2 + 3.6em + 2em) - (1.4em * 2));
    overflow:auto;
`;

const Buttons = styled.div`
    position:absolute;
    bottom:1.5em;
    left:0;
    right:0;
    text-align: center;
`;

const Update = styled(Link)`
    display:inline-block;
    vertical-align: middle;
    color:#fcbd11;
    font-size:1.4em;
    height:2em;
    width:8em;
    line-height:2em;
    position:relative;
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
        background:#2e3192;
        transform: skewX(-15deg);
    }

    & > span {
        position:relative;
    }
`;

const Delete = styled.button`
    display:inline-block;
    vertical-align: middle;
    color:#2e3192;
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
        background:#fcbd11;
        transform: skewX(-15deg);
    }

    & > span {
        position:relative;
    }
`;

export default View;
