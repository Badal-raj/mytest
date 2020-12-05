import React from "react";
import { Form } from "reactstrap";

import { TextBox } from "../Common/FormComponents/TextBox";
import { Password } from "../Common/FormComponents/Password";
import { RoundButton } from "../Common/FormComponents/Button";

export const SignIn = () => {
  return (
    <div className="account-login">
      <Form>
        <TextBox
          label="Email Address"
          placeholder="Enter email address"
          type="email"
          name="email"
        />

        <Password
          label="Password"
          placeholder="Enter password"
          type="password"
          name="password"
        />

        <RoundButton submit="submit" id="signUp">
          SignIn
        </RoundButton>
      </Form>
    </div>
  );
};
