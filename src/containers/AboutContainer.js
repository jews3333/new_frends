import { connect } from 'react-redux';
import About from '../components/About';

const mapStateToProps = (state) => ({
    user: state.sign.user
});

const AppContainer = connect(
    mapStateToProps
)(About);

export default AppContainer;