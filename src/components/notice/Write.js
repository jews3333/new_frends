import React, { Component } from 'react';

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

        const { onWrite } = this.props;

        const { title, content, id } = this.state;

        return (
            <div>글쓰기
            <div>
                <input type="text" name="title" value={title} onChange={(e) => this.onChange(e)}/>
                <textarea name="content" value={content} onChange={(e) => this.onChange(e)}></textarea>
                <button onClick={() => onWrite(title, content, id)}>작성완료</button>
            </div>
        </div>
        )
    }
}

export default Write;