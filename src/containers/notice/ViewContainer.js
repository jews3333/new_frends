import { connect } from 'react-redux';
import { db } from '../../firebase/init';
import * as actions from '../../actions';
import View from '../../components/notice/View';

const mapStateToProps = (state) => ({
    notice: state.notice.view,
    user: state.sign.user
});

const mapDispatchToProps = (dispatch) => ({
    onNoticeView: (id) => NoticeViewHandler(id, dispatch),
    onNoticeDelete: (id) => NoticeDeleteHandler(id, dispatch)
});

const NoticeViewHandler = (id, dispatch) => {
    db().collection("NOTICE").doc(id).get().then((doc) => {
        dispatch(actions.noticeView(doc));
    })
}

const NoticeDeleteHandler = (id, dispatch) => {
    db().collection("NOTICE").doc(id).delete().then(() => {
        alert("삭제되었습니다.");
    })
}

const ViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(View);

export default ViewContainer;