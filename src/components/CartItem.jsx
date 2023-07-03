import getPrice from '../tools/getPriceFromString';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateItem, deleteItem } from '../store/cartReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ product, setTotal }) => {
  const dispatch = useDispatch();
  const totalPrice = +product.price * +product.qty;
  useEffect(() => {
    setTotal((total) => {
      return { ...total, [product.id]: totalPrice };
    });
  }, [product.id, totalPrice, setTotal]);

  const handleIncrement = () => {
    dispatch(updateItem({ update: 'increase', id: product.id }));
  };

  const handleDecrement = () => {
    dispatch(updateItem({ update: 'decrease', id: product.id }));
  };

  const handleDeletion = () => {
    setTotal((total) => {
      return { ...total, [product.id]: 0 };
    });
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
        <div
          className="cursor-pointer"
          {...(product.qty > 1 && { onClick: () => handleDecrement() })}
        >
          <FontAwesomeIcon icon={faCaretLeft} size="lg" />
        </div>
        <div>{product.qty}</div>
        <div className="cursor-pointer" onClick={handleIncrement}>
          <FontAwesomeIcon icon={faCaretRight} size="lg" />
        </div>
      </div>
      <p className="px-4 font-normal text-zinc-400">{getPrice(totalPrice)}</p>
      <FontAwesomeIcon
        className="cursor-pointer"
        onClick={handleDeletion}
        icon={faTrashCan}
        size="lg"
      />
    </>
  );
};
export default CartItem;
