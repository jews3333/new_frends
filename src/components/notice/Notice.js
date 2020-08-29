import React, { Component } from 'react';

class Notice extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: "",
            content: "",
        }
    }

    render(){

        const { onWrite } = this.props;

        return (
            <div>공지사항</div>
        )
    }
}

export default Notice;