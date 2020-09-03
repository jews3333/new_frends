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

        const { onSignIn, user } = this.props;

        const { id, pw } = this.state;

        return (
            <div>
                로그인
                <input type="text" name="id" onChange={(e) => this.onChange(e)}/>
                <input type="password" name="pw" onChange={(e) => this.onChange(e)}/>
                <button onClick={() => onSignIn(id, pw)}>SignIn</button>
                {user ? 
                    <div>
                        <p>{user.id}</p>
                        <p>{user.name}</p>
                        <p>{user.uid}</p>
                        <p>{user.class}</p>
                    </div>
                : null}
            </div>
        )
    }
}

export default SignIn;
