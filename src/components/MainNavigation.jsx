const MainNavigation = (props) => {
  return (
    <div className="flex justify-between py-4 items-center">
      <div className="">
        <ul className="flex space-x-3">
          <li>Home</li>
          <li>Shop</li>
        </ul>
      </div>
      <div className="text-2xl">BOUTIQUE</div>
      <div>
        <ul className="flex space-x-3">
          <li>Cart</li>
          <li>Login</li>
          <li>(Logout)</li>
        </ul>
      </div>
    </div>
  );
};
export default MainNavigation;
