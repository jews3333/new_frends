import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            <div>공지사항
                <div>
                    {notice ?
                        Object.keys(notice).map((key, index) => 
                            <Link to={`/notice/${key}`} key={index}>{notice[key].title}</Link>
                        )
                    : null}
                </div>
            </div>
        )
    }
}

export default Notice;