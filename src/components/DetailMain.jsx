import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartReducer';

import getPrice from '../tools/getPriceFromString';

import Button from '../UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const DetailMain = ({ product }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      addItem({
        id: product.id,
        value: {
          name: product.name,
          img: product.img1,
          price: product.price,
          qty: qty,
        },
      })
    );
  };
  const handleIncrement = (e) => {
    e.preventDefault()
    setQty(qty => qty + 1);
  }; 
  const handleDecrement = (e) => {
    e.preventDefault()
    setQty(qty => qty - 1);
  }

  return (
    <div className="mt-10 flex min-h-[400px] w-full bg-white">
      <div className="flex w-1/2">
        <div className="px-2 py-5">
          {Array.from({ length: 4 }).map((_, i) => {
            return (
              <img
                key={i}
                src={product['img' + (i + 1)]}
                alt="a"
                className="object-cover"
              />
            );
          })}
        </div>
        <img
          src={product.img1}
          alt="a"
          className="h-fit w-4/5 object-cover p-5"
        />
      </div>
      <div className="w-1/2 space-y-3 px-5 py-5 italic">
        <p className="text-3xl font-semibold">{product.name}</p>
        <p className=" text-xl text-zinc-500">{getPrice(product.price)}</p>
        <p className="line-clamp-[8] text-sm text-zinc-400">
          {product.short_desc}
        </p>
        <p>
          CATEGORY:
          <span className="ml-2 text-zinc-400">{product.category}</span>
        </p>
        <div className="flex">
          <div className="flex w-1/2 border border-zinc-300 p-2">
            <span className="text-zinc-400">QUANTITY</span>
            <div className="flex justify-center ml-auto w-1/4 text-center [&>*]:w-1/3">
              <div className="cursor-pointer" {...(qty > 1 && { onMouseDown: (e) => handleDecrement(e) })}>
                <FontAwesomeIcon icon={faCaretLeft} size="lg" />
              </div>
              <p>{qty}</p>
              <div className="cursor-pointer" onMouseDown={handleIncrement}>
                <FontAwesomeIcon icon={faCaretRight} size="lg" />
              </div>
            </div>
          </div>
          <Button className="text-base leading-6" handleClick={handleClick}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};
export default DetailMain;
