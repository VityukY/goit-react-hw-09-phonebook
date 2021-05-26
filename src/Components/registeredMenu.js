import { useSelector } from 'react-redux';
import LogoutBtn from './LogoutBtn';
import { getUserName } from '../redux/auth/auth-selectors';

export default function RegistredMenu() {
   const userName = useSelector(getUserName);
   return (
      <>
         <p>{`Привет ${userName}`} </p>

         <LogoutBtn />
      </>
   );
}
