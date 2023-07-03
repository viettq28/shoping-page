import { useSelector } from 'react-redux';
import { useRouteLoaderData } from 'react-router-dom';

import CartItem from './CartItem';

const CartBoard = ({setTotal}) => {
  const list = useRouteLoaderData('root');
  const cart = useSelector((state) => state.cart);
  // console.log(cart);
  const products = [];

  for (const key in cart) {
    products.push({...list.find((item) => item.id === key), qty: cart[key]});
  }

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
        {products.map((product) => {
          return (
            <li key={product.id} className='tracking-normal'>
              <CartItem product={product} setTotal={setTotal} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default CartBoard;
