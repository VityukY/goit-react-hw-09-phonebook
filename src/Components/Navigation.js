import { NavLink } from 'react-router-dom';
import routes from '../routs';
import { connect } from 'react-redux';
import { isAuthenticated } from '../redux/auth/auth-selectors';
import UnregisteredMenu from './UnregisteredMenu';
import RegistredMenu from './registeredMenu';

const Navigation = ({ isLogin }) => {
   return (
      <nav className="linkList">
         <NavLink to={routes.home} className="" activeClassName="">
            Home
         </NavLink>
         <NavLink exact to={routes.contacts} className="" activeClassName="">
            Contacts
         </NavLink>
         {isLogin ? <RegistredMenu /> : <UnregisteredMenu />}
      </nav>
   );
};

const mapStateToProps = state => ({
   isLogin: isAuthenticated(state),
});

export default connect(mapStateToProps, null)(Navigation);
