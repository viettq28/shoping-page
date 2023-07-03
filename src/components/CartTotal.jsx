import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';

import getPrice from '../tools/getPriceFromString';

import Button from '../UI/Button';

const CartTotal = ({ totalPrice }) => {
  return (
    <div className="h-fit w-[30%] space-y-5 bg-[--cust-bg] p-7 font-medium">
      <p className="text-xl">CART TOTAL</p>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <p>SUBTOTAL</p>
          <p className="font-normal tracking-normal text-zinc-400">
            {getPrice(totalPrice)}
          </p>
        </div>
        <div className="border-b border-b-zinc-400"></div>
        <div className="flex justify-between">
          <p>TOTAL</p>
          <p className="text-base font-normal tracking-normal">
            {getPrice(totalPrice)}
          </p>
        </div>
      </div>
      <div className="text-xs [&>*]:w-full">
        <input
          type="text"
          placeholder="Enter your coupon"
          className="p-3 outline outline-zinc-200  placeholder:align-middle placeholder:font-normal placeholder:text-zinc-400 focus:outline-zinc-500"
        />
        <Button className="space-x-2 py-3 outline outline-offset-0 outline-neutral-700 text-xs not-italic">
          <FontAwesomeIcon icon={faGift} style={{ color: '#ffffff' }} /><span>Apply coupon</span>
        </Button>
      </div>
    </div>
  );
};
export default CartTotal;
