import { connect } from 'react-redux';
import LogoutBtn from './LogoutBtn';
import { getUserName } from '../redux/auth/auth-selectors';

const RegistredMenu = ({ userName }) => {
   return (
      <>
         <p>{`Привет ${userName}`} </p>

         <LogoutBtn />
      </>
   );
};

const mapStateToProps = state => ({
   userName: getUserName(state),
});
export default connect(mapStateToProps)(RegistredMenu);
