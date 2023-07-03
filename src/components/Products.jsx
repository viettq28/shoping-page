import { useRouteLoaderData } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import getPrice from '../tools/getPriceFromString';

import Popup from './Popup';
import ProductCard from './ProductCard';

const Products = () => {
  const [curProduct, setCurProduct] = useState(null);
  const products = useRouteLoaderData('root');
  console.log(products);

  const openPopup = (e) => {
    const target = e.target.firstChild;
    if (target?.nodeName === 'IMG') {
      const foundProduct = products.find(
        (product) => Object.values(product._id)[0] === target.id
      );
      setCurProduct({
        id: foundProduct.id,
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
            <ProductCard
              key={Object.values(product._id)[0]}
              product={product}
            />
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
