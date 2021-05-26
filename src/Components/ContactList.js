import { connect } from 'react-redux';
import * as operations from '../redux/contacts/contact-operations';
import * as selectors from '../redux/contacts/contacts-selectors.js';

const ContactList = ({ visibleContacts, deleteContact }) => {
   return (
      <ul className="phonebook__list">
         {visibleContacts.map(contact => (
            <li key={contact.id} className="pnonebook__listItem">
               <p>
                  {contact.name} : {contact.number}
               </p>
               <button type="button" onClick={() => deleteContact(contact.id)}>
                  Delete contact
               </button>
            </li>
         ))}
      </ul>
   );
};

const mapStateToProps = state => {
   return {
      visibleContacts: selectors.visibleContact(state),
   };
};

const mapDispatchToProps = dispatch => {
   return {
      deleteContact: id => dispatch(operations.deleteContact(id)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
