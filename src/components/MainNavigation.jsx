import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faUser,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';

const MainNavigation = () => {
  // state transition để transit cart icon mỗi khi số lượng hàng trong cart thay đổi
  const [transition, setTransition] = useState(false);
  const navigate = useNavigate();
  // Lấy curuser và cartlength để hiển thị
  const curUser = useSelector((state) => state.auth?.curUser);
  const cart = useSelector((state) => state.cart);
  const cartLength = Object.keys(cart).length;

  // Effect transition cho cart icon
  useEffect(() => {
    if (cartLength) {
      setTransition(true);
      setTimeout(() => setTransition(false), 200);
    }
  }, [cartLength]);

  return (
    <div className="flex items-center justify-between py-4">
      {/* Nav trái gồm 2 tab navigate tới homepage và shoppage */}
      <ul className="flex space-x-4">
        <Link to="/">
          <li className="text-[--cust-font]">Home</li>
        </Link>
        <Link to="shop">
          <li>Shop</li>
        </Link>
      </ul>
      {/* Tiêu để trang web */}
      <div className="text-xl">BOUTIQUE</div>
      {/* Nav phải gồm: */}
      {/* Cart để navigate đến CartPage, nếu người dùng chưa đăng nhập sẽ navigate đến SigninPage */}
      {/* Tên User nếu đã đăng nhập */}
      {/* Nút Login hoặc Logout tùy trạng thái đăng nhập */}
      <ul className="flex space-x-3 [&_li]:flex [&_li]:space-x-1 [&_svg]:m-auto [&_svg]:text-[#a1a1aa]">
        {/* Cart tab */}
        <Link to="cart">
          <li className="relative">
            <div
              className={`transition duration-100 ${
                transition ? 'scale-150' : 'scale-100'
              }`}
            >
              {/* Cart Icon */}
              <FontAwesomeIcon icon={faCartShopping} />
              {/* Cart Notice */}
              {!cartLength || (
                <div className="absolute -top-1 left-2 h-[0.75rem] w-[0.75rem] rounded-full bg-red-500 py-[0.1rem] text-center text-[0.4rem] text-zinc-100 outline outline-[1.5px] outline-white">
                  {cartLength}
                </div>
              )}
            </div>

            <p>Cart</p>
          </li>
        </Link>
        {/* User Tab và Logout button nếu đã đăng nhập */}
        {curUser ? (
          <>
            <li>
              <FontAwesomeIcon icon={faUser} />
              <p>{curUser}</p>
              <FontAwesomeIcon icon={faCaretDown} />
            </li>
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
        // Hoặc nút Login nếu chưa
        ) : (
          <Link to="login">
            <li>Login</li>
          </Link>
        )}
      </ul>
    </div>
  );
};
export default MainNavigation;
