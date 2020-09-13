import { connect } from 'react-redux';
import SignUp from '../../components/sign/SignUp';
import { auth, db } from '../../firebase/init';
import * as actions from '../../actions';

const mapStateToProps = (state) => ({
    user: state.sign.user
});

const mapDispatchToProps = (dispatch) => ({
    onSignUp: (id, pw, confirm, name, code) => SignUpHandler(id, pw, confirm, name, code, dispatch)
});

const SignUpContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);

const SignUpHandler = (id, pw, confirm, name, code, dispatch) => {

    if(!id || !pw || !confirm || !name || !code){
        alert("입력칸을 모두 채워주세요.");
        return false;
    }

    if(pw !== confirm){
        alert("패스워드가 일치하지 않습니다.");
        return false;
    }

    db().collection("USER").where("name","==",name).get().then((users) => {
        console.log(users);
        if(users.size === 0){
            db().collection("CODE").doc("CODE").get().then((snapshot) => {//일괄 코드 방식
            // db().collection("USER").doc(code).get().then((snapshot) => { //코드 발급 방식
                if(snapshot.data().code === code){
                    //if (Object.keys(snapshot.data()).length === 0){
    
                        auth().createUserWithEmailAndPassword(id, pw).then((res) => {

                            alert("가입되었습니다");

                            db().collection("USER").doc(code).set({
                                id: id,
                                uid: res.user.uid,
                                name: name,
                                class: "Frend"
                            });

                            dispatch(actions.signup({
                                id: res.user.email,
                                uid: res.user.uid,
                                name: name,
                                class: "Frend"
                            }));
                        }).catch((error) => {
                            alert(error.code);

                            switch(error.code){
                                case "auth/email-already-in-use" : alert("이미 가입된 정보가 있습니다."); break;
                                case "auth/invalid-email" : alert("이메일 형식이 아닙니다."); break;
                                case "auth/weak-password" : alert("패스워드가 너무 간단합니다."); break;
                                default: alert(error.message);
                            }
                        });
    
    
                    // } else {
                    //     alert("이미 가입된 정보가 있습니다.");
                    // }
                } else {
                    alert("코드가 일치하지 않습니다.");
                }
                
            }).catch((error) => {
                console.log(error.code + " : " + error.message)
            });
            
        } else {
            alert("닉네임 중복입니다.");
        }
    });
}

export default SignUpContainer;