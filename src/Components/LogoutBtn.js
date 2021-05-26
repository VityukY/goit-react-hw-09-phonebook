import { connect } from 'react-redux';
import * as operations from '../redux/auth/auth-operations';

const LogoutBtn = ({ logout }) => {
   return (
      <button type="button" onClick={() => logout()}>
         Logout
      </button>
   );
};

const mapDispatchToProps = {
   logout: operations.logout,
};

export default connect(null, mapDispatchToProps)(LogoutBtn);
