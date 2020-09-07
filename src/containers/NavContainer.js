import { connect } from 'react-redux';
import Nav from '../components/Nav';

const mapStateToProps = (state) => ({
    user: state.sign.user
});

const NavContainer = connect(
    mapStateToProps
)(Nav);

export default NavContainer;