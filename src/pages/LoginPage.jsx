import { redirect } from 'react-router-dom';

import Login from '../components/Login';

const LoginPage = () => {
  return <Login />;
};
export default LoginPage;

export async function action({ request }) {
  const formData = await request.formData();
  const loginUser = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const users = JSON.parse(localStorage.getItem('USERS')) || [];
  const foundUser = users.find(user => {
    return user.email === loginUser.email && user.password === loginUser.password
  });

  if (foundUser) {
    localStorage.setItem('LOGIN_USER', foundUser.id);
    return redirect('/');
  } else alert('No user found!!! Please try another email or password');

  return null;
}
