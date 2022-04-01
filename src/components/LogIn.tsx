import { useState } from 'react';
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';

import UserPool from '../UserPool';

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log('onSuccess', data);
      },
      onFailure: (err) => {
        console.error('onFailure', err);
      },
      newPasswordRequired: (data) => {
        console.info('newPasswordRequired', data);
      },
    });
  };

  return (
    <div className="m-5">
      <form>
        <div className="my-2">
          <input
            type="email"
            placeholder="email"
            className="form-control"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="my-2">
          <input
            type="password"
            placeholder="password"
            className="form-control"
            autoComplete="on"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="btn btn-primary"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
