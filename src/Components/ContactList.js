import { useDispatch, useSelector } from 'react-redux';
import * as operations from '../redux/contacts/contact-operations';
import * as selectors from '../redux/contacts/contacts-selectors.js';

export default function ContactList() {
   const dispatch = useDispatch();
   const visibleContacts = useSelector(selectors.visibleContact);

   return (
      <ul className="phonebook__list">
         {visibleContacts.map(contact => (
            <li key={contact.id} className="pnonebook__listItem">
               <p>
                  {contact.name} : {contact.number}
               </p>
               <button
                  type="button"
                  onClick={() => dispatch(operations.deleteContact(contact.id))}
               >
                  Delete contact
               </button>
            </li>
         ))}
      </ul>
   );
}
