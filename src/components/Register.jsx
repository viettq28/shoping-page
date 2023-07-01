import { useState, useEffect } from 'react';
import { Form, Link } from 'react-router-dom';

import Button from '../UI/Button';
import Input from '../UI/Input';

const Register = () => {
  const [firstTime, setFirstTime] = useState(true);
  const [formInput, setFormInput] = useState({
    fullname: '',
    email: '',
    password: '',
    phone: '',
  });
  const { fullname, email, password, phone } = formInput;
  const [msg, setMsg] = useState('');

  useEffect(() => {
    if (fullname === '' || email === '' || password === '' || phone === '') {
      setMsg((msg) => `${msg}\n- All input must be filled in`);
    }
    if (password.length <= 8) {
      setMsg((msg) => `${msg}\n- Password must be at least 8 characters`);
    }
    return () => setMsg('');
  }, [fullname, email, password, phone]);

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
        <p className="text-4xl font-light">Sign Up</p>

        <Form
          method="post"
          className="mt-20 [&_*]:not-italic"
          onSubmit={handleSubmit}
        >
          <div className="[&>*]:w-full [&>*]:p-5">
            <Input
              id="fullname"
              placeholder="Fullname"
              handleChange={handleChange}
              value={fullname}
            />
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
            <Input
              id="phone"
              type="tel"
              placeholder="Phone"
              handleChange={handleChange}
              value={phone}
            />
            <p className="whitespace-pre text-xs italic text-red-500">
              {!firstTime && msg}
            </p>
          </div>
          <Button
            title="SIGN UP"
            className="w-full py-4 disabled:cursor-not-allowed disabled:bg-red-500"
            isDisabled={msg !== '' && !firstTime}
          />
        </Form>

        <p className="mt-9 font-thin tracking-wide">
          Login?{' '}
          <Link to="/login" className="text-sky-500">
            Click
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Register;
