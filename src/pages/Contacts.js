import { Component } from 'react';
import { connect } from 'react-redux';
import '../Components/styles.css';
import ContactList from '../Components/ContactList';
import Filter from '../Components/Filter';
import Form from '../Components/AddForm';
import * as operations from '../redux/contacts/contact-operations';

class Contacts extends Component {
   state = {};
   componentDidMount() {
      this.props.fetchContacts();
   }
   render() {
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
}
const mapDispatchToProps = dispatch => {
   return {
      fetchContacts: () => dispatch(operations.fetchContacts()),
   };
};

export default connect(null, mapDispatchToProps)(Contacts);
