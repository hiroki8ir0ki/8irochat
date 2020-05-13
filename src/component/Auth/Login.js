import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div>
        Login 
      </div>
    )
  }
}

export default Login; 




// class Login extends Component {
//   constructor(props) (
//     super(props) {
//     this.state = {
//       name: null,
//       email: null,
//       password: null,
//       password_confrimation: null 
//     }; 
//   )
//     handleSubmit = e => {
//       e.preventDefault();

//       firebase
//       .auth()
//       .createUserWithEmailAndPassword(this.state.email, this.state.password); 

//     };  

//   render() {
//       return <div>
//         Login
//         <form>
//           <input type="text" name="name"  { this.handleChange }/>
//           <input type="email" name="email" { this.handleChange } />
//           <input type="password" name="password" onChange={ this.handlePassword } />
//           <input type="password" name="password-confirmation" onChange={ this.handlePasswordConfirmation } />
//           <input type="submit" value="Register" />
//           </input>
//         </form>
//         );
//     }
// }