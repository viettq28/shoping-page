import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartReducer';

import Button from '../UI/Button';

const MainDetail = ({ product }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(addItem(product.id));
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
        <p className=" text-xl text-zinc-500">{product.price}</p>
        <p className="line-clamp-[8] text-sm text-zinc-400">
          {product.short_desc}
        </p>
        <p>
          CATEGORY:
          <span className="ml-2 text-zinc-400">{product.category}</span>
        </p>
        <div className="flex">
          <div className="flex w-1/2 justify-between border border-zinc-300 p-2">
            <span className="text-zinc-400">QUANTITY</span>
            <span>1</span>
          </div>
          <Button className="text-base leading-6" handleClick={handleClick}>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};
export default MainDetail;
