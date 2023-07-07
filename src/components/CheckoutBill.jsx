import { useSelector } from 'react-redux';

import getPrice from '../tools/getPriceFromString';

const CheckoutBill = () => {
  const cart = useSelector((state) => Object.values(state.cart));
  const total = Object.values(cart).reduce(
    (acc, item) => acc + +item.price * +item.qty,
    0
  );

  return (
    <div className="h-fit w-[30%] space-y-4 bg-[--cust-bg] p-7 font-medium">
      <p className="text-xl">CART TOTAL</p>
      <div className="text-sm tracking-tighter">
        {cart.map((item, i) => {
          return (
            <div
              key={item.name}
              className="flex justify-between [&>*]:max-w-[49%] border-b border-b-zinc-400 py-2"
            >
              <p>{item.name}</p>
              <p className="font-normal tracking-normal text-zinc-400">
                {`${getPrice(item.price)} x ${item.qty}`}
              </p>
            </div>
          );
        })}
        <div className="flex justify-between py-2 text-base">
          <p>TOTAL</p>
          <p className="text-xl font-normal">
            {getPrice(total)}
          </p>
        </div>
      </div>
    </div>
  );
};
export default CheckoutBill;
