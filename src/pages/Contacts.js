import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../Components/styles.css';
import ContactList from '../Components/ContactList';
import Filter from '../Components/Filter';
import Form from '../Components/AddForm';
import * as operations from '../redux/contacts/contact-operations';

export default function Contacts() {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(operations.fetchContacts());
   }, [dispatch]);

   return (
      <div className="phonebook">
         <h1 className="phonebook__titel"> Phonebook</h1>
         <Form />
         <h2> Contacts List</h2>
         <Filter />
         <ContactList />
      </div>
   );
}
