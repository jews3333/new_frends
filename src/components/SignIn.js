import React, { Component } from 'react';

class SignIn extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            id: "",
            pw: "",
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){

        const { onSignIn } = this.props;

        const { id, pw } = this.state;

        return (
            <div>
                로그인
                <input type="text" name="id" onChange={(e) => this.onChange(e)}/>
                <input type="password" name="pw" onChange={(e) => this.onChange(e)}/>
                <button onClick={() => onSignIn(id, pw)}>SignIn</button>
            </div>
        )
    }
}

export default SignIn;