import { useState } from 'react';
import UserPool from '../UserPool';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    UserPool.signUp(email, password, [], [], (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log(data);
      }
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
          Sign Up
        </button>
      </form>
    </div>
  );
}
