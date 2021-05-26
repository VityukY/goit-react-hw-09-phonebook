import { Component } from 'react';
import { connect } from 'react-redux';
import * as selectors from '../redux/contacts/contacts-selectors.js';
import * as operation from '../redux/contacts/contact-operations';
import shortid from 'shortid';

class Form extends Component {
   state = {
      name: '',
      number: '',
   };

   updateContacts = e => {
      e.preventDefault();
      const { name, number } = this.state;
      if (this.checkDuplicates(name)) {
         alert(`${name} уже в списке`);
         return;
      }
      const newContact = {
         name,
         number,
         id: shortid.generate(),
      };
      this.props.addContact(newContact);
      this.reset();
   };

   checkDuplicates = name => {
      const currentContactsName = this.props.contacts.map(
         contact => contact.name,
      );
      return currentContactsName.includes(name);
   };

   changeHadler = e => {
      this.setState({ [e.currentTarget.name]: e.currentTarget.value });
   };
   reset() {
      this.setState({ name: '', number: '' });
   }

   render() {
      return (
         <form onSubmit={this.updateContacts} className="phonebook_form">
            <div className="phonebook__inputarea">
               <label>
                  <h2>Name</h2>
                  <input
                     value={this.state.name}
                     type="text"
                     name="name"
                     onChange={this.changeHadler}
                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                     title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                     required
                  />
               </label>

               <label>
                  <h2>Number</h2>
                  <input
                     value={this.state.number}
                     type="tel"
                     name="number"
                     onChange={this.changeHadler}
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
}

const mapStateToProps = state => {
   return {
      contacts: selectors.getContact(state),
   };
};

const mapDispatchToProps = dispatch => {
   return {
      addContact: newContact => dispatch(operation.addContact(newContact)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
