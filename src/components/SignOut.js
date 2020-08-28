import React, { Component } from 'react';

class SignOut extends Component {

    UNSAFE_componentWillMount(){
        this.props.onSignOut();
    };


    render(){
        return (
            <div>
                로그아웃
            </div>
        )
    }
}

export default SignOut;