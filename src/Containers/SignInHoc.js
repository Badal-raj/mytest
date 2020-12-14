
//import React,{useState} from "react";
import React from 'react';
import {SignIn} from "../Components/SignIn";
import * as Constents from '../Constents';
//import history from '../utils/history'



/*********************************************** */



class SignInHoc extends React.Component {
   constructor() {
     super();
     this.state = {
       fields: { email:'', password:''},
       errors: {},
     }

   };

   handleInputChange=(e)=> {
     let fields = this.state.fields;
     fields[e.target.name] = e.target.value;
     this.setState({
       fields
     });

   }
   handleformSubmit=(e)=> {
     e.preventDefault();
     if (this.validateForm()) {         
         const { fields } = this.state;
        
              console.log(fields);

              this.props.history.push(Constents.PROFILE)
        
     }
     
   }

   validateForm() {

     let fields = this.state.fields;
     let errors = {};
     let formIsValid = true;

     if (!fields["email"]) {
       formIsValid = false;
       errors["email"] = "*Please enter your email-id.";
     }

     if (!fields["password"]) {
       formIsValid = false;
       errors["password"] = "*Please enter your password.";
     }

     this.setState({
       errors: errors
     });
     console.log(formIsValid, errors);
     return formIsValid;

   }

 render() {
   const {errors, fields}= this.state
   return (
   <div id="main-registration-container">
    <SignIn
    onInputChange={this.handleInputChange}
    onFormSubmit={this.handleformSubmit}
    fields={fields}
    errors={errors}
  ></SignIn>;
</div>

     );
 }


}

export default SignInHoc;