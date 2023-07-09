import { useState, useEffect } from 'react';
import { Form, Link } from 'react-router-dom';
import banner from'../../public/resources/banner1.jpg';

import Button from '../UI/Button';
import Input from '../UI/Input';

const Register = () => {
  // State Kiểm tra nhập liệu lần đầu
  const [firstTime, setFirstTime] = useState(true);
  // State lấy giá trị input
  const [formInput, setFormInput] = useState({
    fullname: '',
    email: '',
    password: '',
    phone: '',
  });
  const { fullname, email, password, phone } = formInput;
  // State thông báo nhập liệu sai
  const [msg, setMsg] = useState('');

  useEffect(() => {
    // Thông báo nhập liệu sai
    if (fullname === '' || email === '' || password === '' || phone === '') {
      setMsg((msg) => `${msg}\n- All input must be filled in`);
    }
    if (password.length <= 8) {
      setMsg((msg) => `${msg}\n- Password must be at least 8 characters`);
    }
    return () => setMsg('');
  }, [fullname, email, password, phone]);

  const handleSubmit = (e) => {
    // Cho phép submit nếu như lần đầu nhập liệu
    // Nếu nhập sai, mất lần đầu
    if (firstTime) {
      setFirstTime(false);
    }
    // Kiểm tra thông báo, nếu có không cho post form
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
  // Lưu giá trị nhập liệu
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
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div
        className={`absolute m-auto w-1/2 bg-white ${shadow} inset-1/2 h-3/4 -translate-x-1/2 rounded-md p-10 text-center`}
      >
        {/* Tiêu đề Form */}
        <p className="text-4xl font-light">Sign Up</p>
        {/* Form được post và xử lý bởi action ơ RegisterPage */}
        <Form
          method="post"
          className="mt-20 [&_*]:not-italic"
          onSubmit={handleSubmit}
        >
          <div className="[&>*]:w-full [&>*]:p-5">
            {/* Các trường nhập liêu: fullname, email, password, phone */}
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
            {/* Nhập lần đầu không hiện thông báo lỗi, nhưng lần sau thì có */}
            <p className="whitespace-pre text-xs italic text-red-500">
              {!firstTime && msg}
            </p>
          </div>
          {/* Button submit form */}
          <Button
            className="w-full py-4 disabled:cursor-not-allowed disabled:bg-red-500"
            isDisabled={msg !== '' && !firstTime}
          >SIGN UP</Button>
        </Form>

        {/* Chuyển đến trang Login */}
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
