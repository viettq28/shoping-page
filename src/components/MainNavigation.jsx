import { Link } from "react-router-dom";

const MainNavigation = (props) => {
  return (
    <div className="flex justify-between py-4 items-center">
      <div className="">
        <ul className="flex space-x-3">
          <Link to='/'><li>Home</li></Link>
          <Link to='shop'><li>Shop</li></Link>
        </ul>
      </div>
      <div className="text-xl">BOUTIQUE</div>
      <div>
        <ul className="flex space-x-3">
          <Link to='cart'><li>Cart</li></Link>
          <Link to='login'><li>Login</li></Link>
          <Link to=''><li>(Logout)</li></Link>
        </ul>
      </div>
    </div>
  );
};
export default MainNavigation;
