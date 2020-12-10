import React,{useState} from "react";

import { SignUp } from "../Components/SignUp";
import * as Constents from '../Constents';

export const SignUpHoc = ({history}) => {
  console.log('history', history)
  const [dobDate, setDobDate] = useState();
const [errors, setErrors]=useState('')
  const [fields, setFields]=useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  const handleInputChange=(event)=>{
    const { name, value } = event.target ? event.target : event;
    setFields({ ...fields, [name]: value });
  }
  const handleformSubmit=(e)=>{
    e.preventDefault();
//  const data= {...fields}
  fields.dob=dobDate
    console.log({fields})
   // history.push(Constents.PROFILE)
  
  }

  const handleDateChange = date => {
    setDobDate(date);
  };


//  const  validateForm=(event)=> {
//     // let fields = this.state.fields;
//     // let errors = {};
//     //const { name } = event.target ? event.target : event;

//     let fields={}
//     let formIsValid = true;
  
//     if (!fields['name']) {
//       formIsValid = false;
//       setErrors('*name is required');
//     }
  
//     setErrors({...errors})
//     return formIsValid;
//   }


  return <SignUp
    onInputChange={handleInputChange}
    onFormSubmit={handleformSubmit}
    fields={fields}
    errors={errors}
    handleDateChange={handleDateChange}
    dob={dobDate}
  ></SignUp>;
};
