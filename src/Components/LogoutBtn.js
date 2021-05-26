import { useDispatch } from 'react-redux';
import * as operations from '../redux/auth/auth-operations';

export default function LogoutBtn() {
   const dispatch = useDispatch();
   return (
      <button type="button" onClick={() => dispatch(operations.logout())}>
         Logout
      </button>
   );
}
