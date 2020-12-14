import React from "react";
import { Form } from "reactstrap";

import { TextBox } from "../Common/FormComponents/TextBox";
import { Password } from "../Common/FormComponents/Password";
import { RoundButton } from "../Common/FormComponents/Button";

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

        <Password
          label="Password"
          placeholder="Enter password"
          type="password"
          name="password"
          onChange={onInputChange}
          value={fields.password || ''}
          error={errors.password}
        />

        <RoundButton submit="submit" id="signUp">
          SignIn
        </RoundButton>
      </Form>
    </div>
  );
};
