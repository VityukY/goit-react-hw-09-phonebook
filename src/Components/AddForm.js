import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '../redux/contacts/contacts-selectors.js';
import * as operation from '../redux/contacts/contact-operations';
import shortid from 'shortid';

export default function Form() {
   const dispatch = useDispatch();
   const contacts = useSelector(selectors.getContact);

   const [name, setName] = useState('');
   const nameHandler = e => {
      setName(e.currentTarget.value);
   };
   const [number, setNumber] = useState('');
   const numberHandler = e => {
      setNumber(e.currentTarget.value);
   };

   const updateContacts = e => {
      e.preventDefault();

      if (checkDuplicates(name)) {
         alert(`${name} уже в списке`);
         return;
      }
      const newContact = {
         name,
         number,
         id: shortid.generate(),
      };
      dispatch(operation.addContact(newContact));
      reset();
   };

   const checkDuplicates = name => {
      const currentContactsName = contacts.map(contact => contact.name);
      return currentContactsName.includes(name);
   };

   const reset = () => {
      setName('');
      setNumber('');
   };

   return (
      <form onSubmit={updateContacts} className="phonebook_form">
         <div className="phonebook__inputarea">
            <label>
               <h2>Name</h2>
               <input
                  value={name}
                  type="text"
                  name="name"
                  onChange={e => nameHandler(e)}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  required
               />
            </label>

            <label>
               <h2>Number</h2>
               <input
                  value={number}
                  type="tel"
                  name="number"
                  onChange={e => numberHandler(e)}
                  pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                  title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                  required
               />
            </label>
         </div>
         <button type="submit" className="phonebook__addButton">
            Add contact
         </button>
      </form>
   );
}
