import { useRouteLoaderData } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';

import Hover from '../UI/Hover';
import Popup from './Popup';

const Products = () => {
  const [curProduct, setCurProduct] = useState(null);
  const products = useRouteLoaderData('root');

  console.log(products);

  const getPrice = (priceString) => {
    return (+priceString).toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
      currencyDisplay: 'code',
    });
  };

  const openPopup = (e) => {
    const target = e.target.firstChild;
    if (target?.nodeName === 'IMG') {
      const foundProduct = products.find(
        (product) => Object.values(product._id)[0] === target.id
      );
      setCurProduct({
        id: Object.values(foundProduct._id)[0],
        name: foundProduct.name,
        img: foundProduct.img1,
        price: getPrice(foundProduct.price),
        desc: foundProduct.long_desc,
      });
    }
  };

  const closePopup = useCallback(() => {
    setCurProduct(null);
  }, []);

  return (
    <>
      <div className="mt-5 py-5">
        <p className="text-xs text-zinc-400">MADE THE HARD WAY</p>
        <p>TOP TRENDING PRODUCTS</p>
      </div>
      <div
        className="flex flex-wrap justify-between [&>*]:max-w-[23%]"
        onClick={openPopup}
      >
        {products.map((product) => {
          return (
            <div key={Object.values(product._id)[0]}>
              <Hover>
                <img
                  src={product.img1}
                  alt={Object.values(product._id)[0]}
                  id={Object.values(product._id)[0]}
                />
              </Hover>
              <div className="space-y-1 p-2 text-center">
                <p className="text-sm font-medium">{product.name}</p>
                <p className="text-xs text-zinc-400">
                  {getPrice(product.price)}
                </p>
              </div>
            </div>
          );
        })}
        {curProduct &&
          createPortal(
            <Popup closePopup={closePopup} {...curProduct} />,
            document.getElementById('modal')
          )}
      </div>
    </>
  );
};
export default Products;
