import CartBoard from './CartBoard';
import CartTotal from './CartTotal';

const CartBody = () => {
  return (
    <div className="my-6 gap-6 tracking-widest">
      <p className="my-4 text-xl font-medium">SHOPPING CART</p>
      <div className='flex gap-5'>
        <CartBoard />
        <CartTotal />
      </div>
    </div>
  );
};
export default CartBody;
