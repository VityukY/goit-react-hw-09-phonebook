import { connect } from 'react-redux';
import { isAuthenticated } from '../redux/auth/auth-selectors';
import UnregistredMenu from '../Components/UnregisteredMenu';
import LogoutBtn from '../Components/LogoutBtn';

const Home = ({ isSignIn }) => {
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
};

const mapStateToProps = state => ({
   isSignIn: isAuthenticated(state),
});

export default connect(mapStateToProps, null)(Home);
