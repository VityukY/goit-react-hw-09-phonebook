import { NavLink } from 'react-router-dom';
import routes from '../routs';

const UnregistredMenu = () => {
   return (
      <>
         <NavLink exact to={routes.registarion} className="" activeClassName="">
            Registarion
         </NavLink>
         <NavLink exact to={routes.login} className="" activeClassName="">
            Login
         </NavLink>
      </>
   );
};
export default UnregistredMenu;
