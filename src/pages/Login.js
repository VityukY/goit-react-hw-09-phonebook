import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as operations from '../redux/auth/auth-operations';

export default function Login() {
   const dispatch = useDispatch();

   const [email, setEmail] = useState();

   const emailHandler = e => {
      setEmail(e.target.value);
   };
   const [password, setPassword] = useState();

   const passwordHandler = e => {
      setPassword(e.target.value);
   };

   const onSubmit = e => {
      e.preventDefault();
      dispatch(operations.login({ email, password }));
   };

   return (
      <>
         <h1> Login page</h1>
         <form onSubmit={e => onSubmit(e)}>
            <input
               value={email}
               name="email"
               onChange={e => {
                  emailHandler(e);
               }}
            />

            <input
               value={password}
               name="password"
               onChange={e => {
                  passwordHandler(e);
               }}
            />

            <button type="submit">Login</button>
         </form>
      </>
   );
}
