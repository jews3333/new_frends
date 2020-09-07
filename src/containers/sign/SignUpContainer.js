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
            db().collection("USER").doc(code).get().then((snapshot) => {
                console.log(snapshot)
                if(snapshot.data() !== undefined){
                    if (Object.keys(snapshot.data()).length === 0){
    
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
                            alert(error.message);
                        });
    
    
                    } else {
                        alert("이미 가입된 정보가 있습니다.");
                    }
                } else {
                    alert("존재하지 않는 코드입니다.");
                }
                
            }).catch((error) => {
                console.log(error)
            });
            
        } else {
            alert("닉네임 중복입니다.");
        }
    });
}

export default SignUpContainer;