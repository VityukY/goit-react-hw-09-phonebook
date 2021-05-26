import { NavLink } from 'react-router-dom';
import routes from '../routs';
import { useSelector } from 'react-redux';
import { isAuthenticated } from '../redux/auth/auth-selectors';
import UnregisteredMenu from './UnregisteredMenu';
import RegistredMenu from './registeredMenu';

export default function Navigation() {
   const isLogin = useSelector(isAuthenticated);
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
}
