import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class View extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.onNoticeView(this.props.match.params.id);
    }

    render(){

        const { notice } = this.props;

        return (
            <div>공지사항 뷰페이지
                {notice ?
                Object.keys(notice).map((key, index) =>
                    <div key={index}>
                        <p>{notice[key].title}</p>
                        <p>{notice[key].content}</p>
                        <p>{new Date(notice[key].date.seconds).toString()}</p>
                        <Link to={`/notice/form/${key}`}>수정하기</Link>
                    </div>
                )
                : null}
            </div>
        )
    }
}

export default View;
