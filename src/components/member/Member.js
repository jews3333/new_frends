import React, { Component } from 'react';

class Member extends Component {

    constructor(props){
        super(props);
    }


    componentDidMount(){
        this.props.onMemberList();
    }

    render(){

        const { member } = this.props;

        return (
            <div>회원목록
                <div>
                    {member ?
                        Object.keys(member).map((user, index) => 
                            <p>이름 : {member[user].name} 등급 : {member[user].class}</p>
                        )
                    : null}
                </div>
            </div>
                
        )
    }
}

export default Member;