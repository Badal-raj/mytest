import React from "react";
import { Form } from "reactstrap";

import { TextBox ,LinkButton, Password, RoundButton} from "../Common/FormComponents";
import {SIGNUP} from '../../Constents'

export const SignIn = ({ onInputChange, onFormSubmit, fields, errors }) => {
  return (
    <div className="account-login">
      <Form onSubmit={onFormSubmit}>
        <TextBox
          label="Email Address"
          placeholder="Enter email address"
          type="email"
          name="email"
          onChange={onInputChange}
          value={fields.email || ''}
          error={errors.email}
        />
<br/>
        <Password
          label="Password"
          signinplaceholder="Enter password"
          type="passwsigninord"
          name="password"
          onChange={onInputChange}
          value={fields.password || ''}
          error={errors.password}
        />

        <RoundButton submit="submit" id="signUp">
          SignIn
        </RoundButton ><br/>
        not register yet ?
        <LinkButton path={SIGNUP}>
        <span>register here</span>  
        </LinkButton>
      </Form>
    </div>
  );
};
