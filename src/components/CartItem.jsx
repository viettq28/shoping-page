import getPrice from '../tools/getPriceFromString';
import { useDispatch } from 'react-redux';
import { updateItem, deleteItem } from '../store/cartReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ id, product }) => {
  const dispatch = useDispatch();
  const totalPrice = +product.price * +product.qty;

  const handleIncrement = (e) => {
    e.preventDefault();
    dispatch(updateItem({ update: 'increase', id: id }));
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    dispatch(updateItem({ update: 'decrease', id: id }));
  };

  const handleDeletion = () => {
    dispatch(deleteItem(id));
  };
  return (
    <>
      <img
        src={product.img}
        alt={product.name}
        className="object-cover px-4"
      ></img>
      <p className="px-2 text-base font-medium">{product.name}</p>
      <p className="px-4 font-normal text-zinc-400">
        {getPrice(product.price)}
      </p>
      <div className="flex justify-center px-3 [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:basis-1/3">
        <div
          className="cursor-pointer"
          {...(product.qty > 1 && { onMouseDown: (e) => handleDecrement(e) })}
        >
          <FontAwesomeIcon icon={faCaretLeft} size="lg" />
        </div>
        <div>{product.qty}</div>
        <div className="cursor-pointer" onMouseDown={handleIncrement}>
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
