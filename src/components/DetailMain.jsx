import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartReducer';

import getPrice from '../tools/getPriceFromString';

import Button from '../UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const DetailMain = ({ product }) => {
  // State số lượng sản phẩm
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  // Thêm sản phẩm và sổ lượng vào cart
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
  // Tăng giảm số lượng
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
        {/* 4 hình ảnh khác lấy từ product.[img + i] */}
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
        {/* Ảnh miêu tả chính */}
        <img
          src={product.img1}
          alt="a"
          className="h-fit w-4/5 object-cover p-5"
        />
      </div>
      {/* Chi tiết */}
      <div className="w-1/2 space-y-3 px-5 py-5 italic">
        {/* Tên, giá, miêu tả, phân loại */}
        <p className="text-3xl font-semibold">{product.name}</p>
        <p className=" text-xl text-zinc-500">{getPrice(product.price)}</p>
        <p className="line-clamp-[8] text-sm text-zinc-400">
          {product.short_desc}
        </p>
        <p>
          CATEGORY:
          <span className="ml-2 text-zinc-400">{product.category}</span>
        </p>
        {/* Tăng, giảm, thêm vào cart */}
        <div className="flex">
          <div className="flex w-1/2 border border-zinc-300 p-2">
            <span className="text-zinc-400">QUANTITY</span>
            <div className="flex justify-center ml-auto w-1/4 text-center [&>*]:w-1/3">
              {/* Giảm số lượng (không quá 1) */}
              <div className="cursor-pointer" {...(qty > 1 && { onMouseDown: (e) => handleDecrement(e) })}>
                <FontAwesomeIcon icon={faCaretLeft} size="lg" />
              </div>
              {/* Số lượng hiện tại */}
              <p>{qty}</p>
              {/* Tăng số lương */}
              <div className="cursor-pointer" onMouseDown={handleIncrement}>
                <FontAwesomeIcon icon={faCaretRight} size="lg" />
              </div>
            </div>
          </div>
          {/* Thêm vảo cart */}
          <Button className="text-base leading-6" handleClick={handleClick}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};
export default DetailMain;
