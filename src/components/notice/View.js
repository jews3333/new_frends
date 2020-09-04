import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormatDate } from '../../modules/common';

class View extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.onNoticeView(this.props.match.params.id);
    }

    render(){

        const { notice, onNoticeDelete } = this.props;

        return (
            <div>공지사항 뷰페이지
                {notice ?
                Object.keys(notice).map((key, index) =>
                    <div key={index}>
                        <p>{notice[key].title}</p>
                        <p>{notice[key].content}</p>
                        <p>{FormatDate(notice[key].date.seconds)}</p>
                        <Link to={`/notice/form/${key}`}>수정하기</Link>
                        <button onClick={() => onNoticeDelete(key)}>삭제하기</button>
                    </div>
                )
                : null}
            </div>
        )
    }
}

export default View;
