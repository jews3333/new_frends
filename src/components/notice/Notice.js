import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormatDate } from '../../modules/common';
import styled from 'styled-components';

class Notice extends Component {

    constructor(props){
        super(props);
    }


    componentDidMount(){
        this.props.onNoticeList();
    }

    render(){

        const { notice, user } = this.props;

        return (
            <Content>
                <Title>공지사항</Title>
                <Lists>
                    <Head>
                        <div>제목</div>
                        <div>날짜</div>
                    </Head>
                    {notice ?
                        Object.keys(notice).map((key, index) => 
                            <List key={index}>
                                <Item to={`/notice/${key}`}>
                                    <Tit>{notice[key].title}</Tit>
                                    <Date>{FormatDate(notice[key].date.seconds)}</Date>
                                </Item>
                            </List>
                        )
                    : null}
                </Lists>
                {user.class === "Master" ?
                <Buttons>
                    <Button to="/notice/form"><span>글쓰기</span></Button>
                </Buttons>
                : null}
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
    overflow:auto;
    position:relative;
`;

const Title = styled.h3`
    font-size: 1.8em;
    text-align: center;
    margin-bottom:1em;

    &:after {
        content:"";
        display:block;
        width: 1em;
        height:1px;
        background:#222;
        margin:1em auto 0;
    }
`;

const Lists = styled.ul`
    
`;

const Head = styled.li`
    padding: 1em 0;
    background:#efefef;

    &:after {
        content:"";
        display:block;
        clear:both;
    }

    & > div {
        float:left;
        text-align:center;

        &:first-child {
            width:calc(100% - 12em);
        }

        &:last-child {
            width:12em;
        }
    }
`;

const List = styled.li`
    border-bottom:1px solid #ccc;
`;

const Item = styled(Link)`
    display:block;
    padding: 1em 0;
    &:after {
        content:"";
        display:block;
        clear:both;
    }
`;

const Tit = styled.span`
    display:block;
    float:left;
    width:calc(100% - 12em);
    overflow:hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    padding:0 0.5em;
`;

const Date = styled.span`
    display:block;
    float:right;
    width:12em;
    text-align:center;
    color:#777;
    padding:0 0.5em;
`;

const Buttons = styled.div`
    position:absolute;
    bottom:1.5em;
    left:0;
    right:0;
    text-align: center;
`;

const Button = styled(Link)`
    display:block;
    color:#2e3192;
    font-size:1.4em;
    height:2em;
    width:8em;
    line-height:2em;
    position:relative;
    text-align: center;
    margin:0 auto;

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

export default Notice;