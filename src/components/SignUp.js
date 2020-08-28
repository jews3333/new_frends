import React, { Component } from 'react';

class SignUp extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            id: "",
            pw: "",
            name: "",
            code: ""
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){

        const { onSignUp, onSignIn, onSignOut } = this.props;

        const { id, pw, name, code } = this.state;

        return (
            <div>
                회원가입
                <input type="text" name="id" onChange={(e) => this.onChange(e)}/>
                <input type="password" name="pw" onChange={(e) => this.onChange(e)}/>
                <input type="text" name="name" onChange={(e) => this.onChange(e)}/>
                <input type="text" name="code" onChange={(e) => this.onChange(e)}/>
                <button onClick={() => onSignUp(id, pw, name, code)}>SignUp</button>
                <button onClick={() => onSignIn(id, pw)}>SignIn</button>
                <button onClick={() => onSignOut()}>SignOut</button>
            </div>
        )
    }
}

export default SignUp;