import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authReducer';

const MainNavigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return (
    <div className="flex items-center justify-between py-4">
      <div className="">
        <ul className="flex space-x-3">
          <Link to="/">
            <li>Home</li>
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
          {auth ? (
            <li
              onClick={() => {
                dispatch(logout());
                navigate('/');
              }}
            >
              (Logout)
            </li>
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
