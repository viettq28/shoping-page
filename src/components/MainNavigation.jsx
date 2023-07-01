import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MainNavigation = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const curUser = useSelector((state) => state.auth.curUser?.fullname);

  return (
    <div className="flex items-center justify-between py-4">
      <div className="">
        <ul className="flex space-x-3">
          <Link to="/">
            <li className='text-[--cust-font]'>Home</li>
          </Link>
          <Link to="shop">
            <li>Shop</li>
          </Link>
        </ul>
      </div>
      <div className="text-xl">BOUTIQUE</div>
      <div>
        <ul className="flex space-x-3">
          <Link to="cart">
            <li>Cart</li>
          </Link>
          {isLogin ? (
            <>
              <li>{curUser}</li>
              <li
                className="cursor-pointer"
                onClick={() => {
                  localStorage.removeItem('LOGIN_USER');
                  window.dispatchEvent(new Event('storage'));
                  navigate('/');
                }}
              >
                (Logout)
              </li>
            </>
          ) : (
            <Link to="login">
              <li>Login</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};
export default MainNavigation;