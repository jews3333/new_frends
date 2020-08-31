import React, { Component } from 'react';

class Write extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: "",
            content: ""
        }
    }

    componentDidMount(){
        //this.props.onWriteView(this.props.match.params.id);

        //console.log(this.props);

            // this.setState({
            //     title: this.props.notice[id].title,
            //     content: this.props.notice[id].content
            // })

        this.props.onWriteView(this.props.match.params.id);
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        // if(nextProps.notice) {
        //     this.setState({
        //         title: this.props.notice[this.props.match.params.id].title,
        //         content: this.props.notice[this.props.match.params.id].content
        //     });
        // }

        if(this.props !== nextProps){
            this.setState({
                title: this.props.notice[this.props.match.params.id].title,
                content: this.props.notice[this.props.match.params.id].content
            });
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

        console.log(this.state)

        return (
            <div>글쓰기
            <div>
                <input type="text" name="title" value={this.props.notice ? this.props.notice[this.props.match.params.id].title : title} onChange={(e) => this.onChange(e)}/>
                <textarea name="content" value={this.props.notice ? this.props.notice[this.props.match.params.id].content : content} onChange={(e) => this.onChange(e)}></textarea>
                <button onClick={() => onWrite(title, content)}>작성완료</button>
            </div>
        </div>
        )
    }
}

export default Write;