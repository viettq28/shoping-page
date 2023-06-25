import { Link, useRouteLoaderData, useSearchParams } from 'react-router-dom';
import { createPortal } from 'react-dom';

import Hover from '../UI/Hover';
import Popup from './Popup';

const Products = () => {
  const products = useRouteLoaderData('root');
  const [searchParams, setSearchParams] = useSearchParams();
  const activeModal = searchParams.get('modal');
  
  console.log(products);

  const closePopup = (closeAnimation) => {
    document.body.style.overflowY = 'auto';
    document.body.style.paddingRight = 0;
    setTimeout(() => setSearchParams(''), 300);
    closeAnimation();
  };

  const openPopup = () => {
    document.body.style.paddingRight = '1.3%';
    document.body.style.overflowY = 'hidden';
  };
  

  return (
    <>
      <div className="mt-5 py-5">
        <p className="text-xs text-zinc-400">MADE THE HARD WAY</p>
        <p>TOP TRENDING PRODUCTS</p>
      </div>
      <div className="flex flex-wrap justify-between [&>*]:max-w-[23%]">
        {products.map((product) => {
          return (
            <Link
              key={Object.values(product._id)[0]}
              to={`/?modal=${Object.values(product._id)[0]}`}
              onClick={openPopup}
            >
              <Hover>
                <img src={product.img1} alt={Object.values(product._id)[0]} />
              </Hover>
              <div className="space-y-1 p-2 text-center">
                <p className="text-sm font-medium">{product.name}</p>
                <p className="text-xs text-zinc-400">
                  {(+product.price).toLocaleString('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                    currencyDisplay: 'code',
                  })}
                </p>
              </div>
            </Link>
          );
        })}
        {activeModal && createPortal(
          <Popup closePopup={closePopup}/>,
          document.getElementById('modal')
        )}
      </div>
    </>
  );
};
export default Products;
