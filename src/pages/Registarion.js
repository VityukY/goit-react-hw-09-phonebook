import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as operations from '../redux/auth/auth-operations';

export default function Registarion() {
   const dispatch = useDispatch();

   const [email, setEmail] = useState();

   const emailHandler = e => {
      setEmail(e.target.value);
   };

   const [password, setPassword] = useState();

   const passwordHandler = e => {
      setPassword(e.target.value);
   };

   const [name, setName] = useState();

   const nameHandler = e => {
      setName(e.target.value);
   };

   const onSubmit = e => {
      e.preventDefault();

      dispatch(operations.registration({ name, email, password }));
   };

   return (
      <>
         <h1> Registarion page</h1>
         <form onSubmit={onSubmit}>
            <input
               placeholder="name"
               value={name}
               name="name"
               onChange={e => {
                  nameHandler(e);
               }}
            />

            <input
               placeholder="email"
               value={email}
               name="email"
               onChange={e => {
                  emailHandler(e);
               }}
            />

            <input
               placeholder="password"
               value={password}
               name="password"
               onChange={e => {
                  passwordHandler(e);
               }}
            />

            <button type="submit">Sing Up</button>
         </form>
      </>
   );
}
