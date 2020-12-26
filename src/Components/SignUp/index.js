import React, {useState,useEffect, useRef} from "react";
import { Form } from "reactstrap";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { format, parse } from 'date-fns';


import { TextBox } from "../Common/FormComponents/TextBox";
import { Password } from "../Common/FormComponents/Password";
import { RoundButton } from "../Common/FormComponents/Button";

export const SignUp = ({ onInputChange, onFormSubmit, fields, errors, handleDateChange,dob }) => {
 
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const onDateChange = value => {
    handleDateChange(format(value, 'dd/MM/yyyy'));
    setOpen(false);
  };

  const parseDate = dob
    ? parse(dob, 'dd/MM/yyyy', new Date())
    : new Date();

    const toggleDatePicker = (evt) => {
      evt.nativeEvent.stopImmediatePropagation();
      setOpen(!open);
    };
  
    const closeOutsideClick = evt => {
      if (menuRef.current && !menuRef.current.contains(evt.target)) {

        console.log('menuRef.current', menuRef.current)
        const node = evt.target.parentNode;

        // if (
        //   node &&
        //   (node.classList.contains('react-calendar__decade-view') ||
        //     node.classList.contains('react-calendar__year-view__months'))
        // ) {
        //   return;
        // }
        setOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('click', closeOutsideClick, false);
  
      return () => {
        document.removeEventListener('click', closeOutsideClick, false);
      };
    },[]);

  return (
    <div className="account-login">
      <Form onSubmit={onFormSubmit}>
        <TextBox
          label="Name"
          placeholder="Enter name"
          type="text"
          name="name"
          onChange={onInputChange}
          value={fields.name || ''}
          error={errors.name}
        /><br/>

        <TextBox
          label="select dob"
          placeholder="select dob"
          type="text"
          name="dob"
          onChange={onInputChange}
          value={ fields.dob ||''}
         // onChange={toggleDatePicker}
         error={errors.dob}
        >
          <span onClick={toggleDatePicker} className="icon-calendar">&#x24;</span>
          </TextBox>
        {open && (
        <div
          ref={ref => {
            menuRef.current = ref;
          }}>
        <Calendar
        onChange={onDateChange}
        value={parseDate}
        />
          </div>
)}
<br/>
        <TextBox
          label="Email Address"
          placeholder="Enter email address"
          type="email"
          name="email"
          onChange={onInputChange}
          value={fields.email || ''}
          error={errors.email}
        />

        <Password
          label="Password"
          placeholder="Enter password"
          type="password"
          name="password"
          onChange={onInputChange}
          value={fields.password || ''}
          error={errors.password}
        />

        <Password
          label="Confirm Password"
          placeholder="Enter confirm password"
          type="password"
          name="confirmPassword"
          onChange={onInputChange}
          value={fields.confirmPassword || ''}
          error={errors.confirmPassword}
        />

        <RoundButton submit="submit" id="signUp">
          Signup
        </RoundButton>
      </Form>
    </div>
  );
};
