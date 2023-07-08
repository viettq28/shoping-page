import { redirect } from 'react-router-dom';

import Register from '../components/Register';

// Register Page
const RegisterPage = () => {
  return <Register />;
};
export default RegisterPage;

// Action xử lý form register
export async function action({ request }) {
  const formData = await request.formData();
  // Lấy các data từ formData
  const newUser = {
    id:  new Date().getTime(),
    fullname: formData.get('fullname'),
    email: formData.get('email'),
    password: formData.get('password'),
    phone: formData.get('phone'),
  };
  const users = JSON.parse(localStorage.getItem('USERS')) || [];
  // Tìm user có email trùng lặp
  const existedUser = users.find(user => user.email === newUser.email);
  // Nếu không có user trùng lặp thì add new user vào localStorage và redirect sang /login, không thì alert và cho người dùng nhập lại
  if (!existedUser) {
    const newUsers = [...users, newUser];
    localStorage.setItem('USERS', JSON.stringify(newUsers));
    return redirect('/login');
  }
  else alert('Email is already existing');
  return null;
}
