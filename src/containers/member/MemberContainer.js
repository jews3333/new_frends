import { connect } from 'react-redux';
import Member from '../../components/member/Member';
import { db } from '../../firebase/init';
import * as actions from '../../actions';

const mapStateToProps = (state) => ({
    member: state.member.member
});

const mapDispatchToProps = (dispatch) => ({
    onMemberList: () => MemberListHandler(dispatch)
});

const MemberListHandler = (dispatch) => {

    db().collection("USER").get().then((snapshot) => {
        snapshot.forEach((doc) => {
            dispatch(actions.memberList(doc));
        });
    });
}

const MemberContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Member);

export default MemberContainer;