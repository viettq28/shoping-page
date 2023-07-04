import { useSelector } from 'react-redux';

import CartItem from './CartItem';
import CartNavigation from './CartNavigation';

const CartBoard = ({setTotal}) => {
  const products = useSelector((state) => state.cart);
  return (
    <div className="w-[70%] text-sm">
      <div className="flex bg-[--cust-bg] py-3 text-center [&>*]:w-1/6">
        <div>IMAGE</div>
        <div>PRODUCT</div>
        <div>PRICE</div>
        <div>QUANTITY</div>
        <div>TOTAL</div>
        <div>REMOVE</div>
      </div>
      <ul className="text-center [&>li>*]:w-1/6 [&>li>*]:my-auto [&>li]:flex [&>li]:py-3">
        {Object.entries(products).map(([id, product]) => {
          return (
            <li key={id} className='tracking-normal'>
              <CartItem id={id} product={product} setTotal={setTotal} />
            </li>
          );
        })}
      </ul>
      <CartNavigation />
    </div>
  );
};
export default CartBoard;
