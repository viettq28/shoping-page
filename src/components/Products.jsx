import { useRouteLoaderData } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import getPrice from '../tools/getPriceFromString';

import Popup from './Popup';
import ProductCard from './ProductCard';

const Products = () => {
  // State product hiện tại
  const [curProduct, setCurProduct] = useState(null);
  // Lấy data products từ loader ở LayoutPage
  const products = useRouteLoaderData('root');

  // Open Modal
  const openPopup = (e) => {
    // Kiểm tra người dùng click vào hình sản phẩm
    const target = e.target.firstChild;
    if (target?.nodeName === 'IMG') {
      // Tìm sản phẩm từ loader data từ id của img
      const foundProduct = products.find(
        (product) => Object.values(product._id)[0] === target.id
      );
      // setCurProduct = sản phẩm tìm được
      setCurProduct({
        id: foundProduct.id,
        name: foundProduct.name,
        img: foundProduct.img1,
        price: getPrice(foundProduct.price),
        desc: foundProduct.long_desc,
      });
    }
  };
  // Đóng Modal bằng cách setCurProduct = null
  const closePopup = useCallback(() => {
    setCurProduct(null);
  }, []);

  return (
    <>
    {/* Header */}
      <div className="mt-5 py-5">
        <p className="text-xs text-zinc-400">MADE THE HARD WAY</p>
        <p>TOP TRENDING PRODUCTS</p>
      </div>
      {/* List Products, truyền click listener vào parent node */}
      <div
        className="flex flex-wrap justify-between [&>*]:max-w-[23%]"
        onClick={openPopup}
      >
        {/* Hiển thị các ProductCard */}
        {products.map((product) => {
          return (
            <ProductCard
              key={Object.values(product._id)[0]}
              product={product}
            />
          );
        })}
        {/* Show modal và truyền curProduct cùng phương thức đóng modal vào Popup */}
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
