import { useState } from 'react';

import CartBoard from './CartBoard';
import CartTotal from './CartTotal';

const CartBody = () => {
  const [total, setTotal] = useState({});
  // console.log(total);
  const totalPrice = Object.values(total).reduce((acc, item) => {return acc + item}, 0)
  
  return (
    <div className="my-6 gap-6 tracking-widest">
      <p className="my-4 text-xl font-medium">SHOPPING CART</p>
      <div className='flex gap-5'>
        <CartBoard setTotal={setTotal}/>
        <CartTotal totalPrice={totalPrice}/>
      </div>
    </div>
  );
};
export default CartBody;
