import { redirect } from 'react-router-dom';

import Register from '../components/Register';

const RegisterPage = (props) => {
  return <Register />;
};
export default RegisterPage;

export async function action({ request }) {
  const formData = await request.formData();
  const newUser = {
    id:  new Date().getTime(),
    fullname: formData.get('fullname'),
    email: formData.get('email'),
    password: formData.get('password'),
    phone: formData.get('phone'),
  };
  const users = JSON.parse(localStorage.getItem('USERS')) || [];

  const existedUser = users.find(user => user.email === newUser.email);

  if (!existedUser) {
    const newUsers = [...users, newUser];
    localStorage.setItem('USERS', JSON.stringify(newUsers));
    return redirect('/login');
  }
  else alert('Email is already existing');
  return null;
}
