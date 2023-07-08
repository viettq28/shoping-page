import { redirect } from 'react-router-dom';

// Login Page
import Login from '../components/Login';

const LoginPage = () => {
  return <Login />;
};
export default LoginPage;

// Action xử lý form login từ login component 
export async function action({ request }) {
  const formData = await request.formData();
  // Lấy email và password từ formData
  const loginUser = {
    email: formData.get('email'),
    password: formData.get('password'),
  };
  // Tìm user có email và password tương tự
  const users = JSON.parse(localStorage.getItem('USERS')) || [];
  const foundUser = users.find(user => {
    return user.email === loginUser.email && user.password === loginUser.password
  });
  // Nếu có thì setItem LOGIN_USER và redirect về HomePage, không thì alert cho người dùng login lại
  if (foundUser) {
    localStorage.setItem('LOGIN_USER', JSON.stringify(foundUser));
    window.dispatchEvent(new Event('storage'));
    return redirect('/');
  } else alert('No user found!!! Please try another email or password');

  return null;
}
