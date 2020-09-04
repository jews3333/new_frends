import { connect } from 'react-redux';
import Notice from '../../components/notice/Notice';
import { db } from '../../firebase/init';
import * as actions from '../../actions';

const mapStateToProps = (state) => ({
    user: state.sign.user,
    notice: state.notice.list
});

const mapDispatchToProps = (dispatch) => ({
    onNoticeList: () => NoticeListHandler(dispatch)
});

const NoticeListHandler = (dispatch) => {
    db().collection("NOTICE").get().then((snapshot) => {
        snapshot.forEach((doc) => {
            dispatch(actions.noticeList(doc));
        });
    });
}

const NoticeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Notice);

export default NoticeContainer;