import { Component } from 'react';
import { connect } from 'react-redux';
import * as operations from '../redux/auth/auth-operations';
class Registarion extends Component {
   state = {
      name: '',
      email: '',
      password: '',
   };
   onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
   };
   onSubmit = e => {
      e.preventDefault();
      this.props.signUp(this.state);
   };
   render() {
      return (
         <>
            <h1> Registarion page</h1>
            <form onSubmit={this.onSubmit}>
               <input
                  value={this.state.name}
                  name="name"
                  onChange={this.onChange}
               />

               <input
                  value={this.state.email}
                  name="email"
                  onChange={this.onChange}
               />

               <input
                  value={this.state.password}
                  name="password"
                  onChange={this.onChange}
               />

               <button type="submit">Sing Up</button>
            </form>
         </>
      );
   }
}

const mapDispatchToProps = {
   signUp: operations.registration,
};
export default connect(null, mapDispatchToProps)(Registarion);
