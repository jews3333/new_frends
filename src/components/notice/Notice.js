import React, { Component } from 'react';

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
                            <div key={index}>{notice[key].title}</div>
                        )
                    : null}
                </div>
            </div>
        )
    }
}

export default Notice;