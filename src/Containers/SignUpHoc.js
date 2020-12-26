import React from 'react';
//import {connect} from 'react-redux';
 import { SignUp } from "../Components/SignUp";
 import * as Constents from '../Constents';
 //import {registerAction} from '../Redux/User/userAction'

class SignUpHoc extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {name:'',dob:'', email:'', password:''},
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

   handleDateChange = date => {
   const {fields}= this.state
   fields.dob=date
    this.setState({fields});
  };

    handleformSubmit=(e)=> {
      e.preventDefault();
      if (this.validateForm()) {         
          const { fields } = this.state;
         
               console.log(fields);
               this.props.history.push(Constents.SIGIN)
        // this.props.registerAction({fields})

          
      }
      
    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["name"]) {
        formIsValid = false;
        errors["name"] = "*Please enter your name.";
      }


      if (!fields["dob"]) {
        formIsValid = false;
        errors["dob"] = "*Please enter your DOB.";
      }
   

      if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "*Please enter your email-ID.";
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

     
      if (!fields["confirmPassword"]){
        formIsValid = false;
        errors["confirmPassword"] = "*conform your password.";
      }
      if(fields["confirmPassword"] !== fields["password"]){
        formIsValid = false;
        errors["confirmPassword"] = "*password are not mached.";
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
     <SignUp
     onInputChange={this.handleInputChange}
     onFormSubmit={this.handleformSubmit}
     fields={fields}
     errors={errors}
     handleDateChange={this.handleDateChange}
   ></SignUp>;
</div>

      )
  }


}

// export default connect(null, {
//   registerAction
// })(SignUpHoc);

export default SignUpHoc;