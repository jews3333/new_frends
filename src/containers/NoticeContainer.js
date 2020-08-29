import { connect } from 'react-redux';
import Notice from '../components/notice/Notice';
import { auth, db } from '../firebase/init';
import * as actions from '../actions';

const mapStateToProps = (state) => ({
    user: state.sign.user
});

const mapDispatchToProps = (dispatch) => ({
    
});


const NoticeContainer = connect(
    mapStateToProps
)(Notice);

export default NoticeContainer;