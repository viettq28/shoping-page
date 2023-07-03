import getPrice from '../tools/getPriceFromString';
import { useDispatch } from 'react-redux';
import { updateItem, deleteItem } from '../store/cartReducer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(updateItem({ update: 'increase', id: product.id }));
  };

  const handleDecrement = () => {
    dispatch(updateItem({ update: 'decrease', id: product.id }));
  };

  const handleDeletion = () => {
    dispatch(deleteItem(product.id));
  };
  return (
    <>
      <img
        src={product.img1}
        alt={product.name}
        className="object-cover px-4"
      ></img>
      <p className="px-2 text-base font-medium">{product.name}</p>
      <p className="px-4 font-normal text-zinc-400">
        {getPrice(product.price)}
      </p>
      <div className="flex justify-center space-x-4">
        <div className="cursor-pointer" onClick={handleDecrement}>
          -
        </div>
        <div>{product.qty}</div>
        <div className="cursor-pointer" onClick={handleIncrement}>
          +
        </div>
      </div>
      <p className="px-4 font-normal text-zinc-400">
        {getPrice(+product.price * +product.qty)}
      </p>
      <FontAwesomeIcon className='cursor-pointer' onClick={handleDeletion} icon={faTrashCan} />
    </>
  );
};
export default CartItem;
