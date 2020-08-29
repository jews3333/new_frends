import React, { Component } from 'react';

class Write extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: "",
            content: "",
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){

        const { onWrite } = this.props;

        const { title, content } = this.state;

        return (
            <div>글쓰기
            <div>
                <input type="text" name="title" onChange={(e) => this.onChange(e)}/>
                <textarea name="content" onChange={(e) => this.onChange(e)}></textarea>
                <button onClick={() => onWrite(title, content)}>작성완료</button>
            </div>
        </div>
        )
    }
}

export default Write;