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

        const { notice } = this.props;

        return (
            <Content>
                <Title>공지사항</Title>
                <Lists>
                    {notice ?
                        Object.keys(notice).map((key, index) => 
                            <List>
                                <Item to={`/notice/${key}`} key={index}>
                                    <Tit>{notice[key].title}</Tit>
                                    <Date>{FormatDate(notice[key].date.seconds)}</Date>
                                </Item>
                            </List>
                        )
                    : null}
                </Lists>
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
`;

const Date = styled.span`
    display:block;
    float:right;
    width:12em;
    text-align:right;
`;

export default Notice;