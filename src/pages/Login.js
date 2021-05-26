import { Component } from 'react';
import { connect } from 'react-redux';
import * as operations from '../redux/auth/auth-operations';
class Login extends Component {
   state = {
      email: '',
      password: '',
   };

   onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
   };
   onSubmit = e => {
      e.preventDefault();
      this.props.signIn(this.state);
   };
   render() {
      return (
         <>
            <h1> Login page</h1>
            <form onSubmit={this.onSubmit}>
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

               <button type="submit">Login</button>
            </form>
         </>
      );
   }
}
const mapDispatchToProps = {
   signIn: operations.login,
};
export default connect(null, mapDispatchToProps)(Login);
