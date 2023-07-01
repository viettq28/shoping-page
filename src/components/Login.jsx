import { useState, useEffect } from 'react';
import { Form, Link } from 'react-router-dom';

import Button from '../UI/Button';
import Input from '../UI/Input';

const Login = () => {
  const [firstTime, setFirstTime] = useState(true);
  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formInput;
  const [msg, setMsg] = useState('');

  useEffect(() => {
    if (email === '' || password === '') {
      setMsg((msg) => `${msg}\n- All input must be filled in`);
    }
    if (password.length <= 8) {
      setMsg((msg) => `${msg}\n- Password must be at least 8 characters`);
    }
    return () => setMsg('');
  }, [email, password]);

  const handleSubmit = (e) => {
    if (firstTime) {
      setFirstTime(false);
    }
    if (msg.length !== 0) {
      e.preventDefault();
    } else {
      setFormInput({
        fullname: '',
        email: '',
        password: '',
        phone: '',
      });
    }
  };

  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const shadow =
    'shadow-[rgba(14,30,37,0.12)_0px_2px_4px_0px,rgba(14,30,37,0.32)_0px_2px_16px_0px]';
  return (
    <div
      className="relative h-[800px] w-full bg-contain"
      style={{ backgroundImage: `url('/src/resources/banner1.jpg')` }}
    >
      <div
        className={`absolute m-auto w-1/2 bg-white ${shadow} inset-1/2 h-3/4 -translate-x-1/2 rounded-md p-10 text-center`}
      >
        <p className="text-4xl font-light">Sign in</p>

        <Form
          method="post"
          className="mt-20 [&_*]:not-italic"
          onSubmit={handleSubmit}
        >
          <div className="[&>*]:w-full [&>*]:p-5">
            <Input
              id="email"
              type="email"
              placeholder="Email"
              handleChange={handleChange}
              value={email}
            />
            <Input
              id="password"
              type="password"
              placeholder="Password"
              handleChange={handleChange}
              value={password}
            />
            <p className="whitespace-pre text-xs italic text-red-500">
              {!firstTime && msg}
            </p>
          </div>
          <Button
            title="SIGN IN"
            className="w-full py-4 disabled:cursor-not-allowed disabled:bg-red-500"
            isDisabled={msg !== '' && !firstTime}
          />
        </Form>

        <p className="mt-9 font-thin tracking-wide">
          Create An Account?{' '}
          <Link to="/register" className="text-sky-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
