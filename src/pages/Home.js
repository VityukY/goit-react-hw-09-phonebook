import { useSelector } from 'react-redux';
import { isAuthenticated } from '../redux/auth/auth-selectors';
import UnregistredMenu from '../Components/UnregisteredMenu';
import LogoutBtn from '../Components/LogoutBtn';

export default function Home() {
   const isSignIn = useSelector(isAuthenticated);
   return (
      <>
         {!isSignIn && (
            <>
               <h1>
                  {' '}
                  Вам нужно залогинится или зарегистрироватся, что бы
                  воспользоватся базой хранения контактов
               </h1>
               <UnregistredMenu />
            </>
         )}
         {isSignIn && (
            <>
               <h1>
                  Вы авторизированы и можете воспольоватся базой хранения
                  контатков
               </h1>
               <LogoutBtn />
            </>
         )}
      </>
   );
}
