import { useLoaderData } from 'react-router-dom';

import Hover from '../UI/Hover';

const Products = (props) => {
  const products = useLoaderData();
  console.log(products);
  return (
    <>
      <div className="mt-5 py-5">
        <p className="text-xs text-zinc-400">MADE THE HARD WAY</p>
        <p>TOP TRENDING PRODUCTS</p>
      </div>
      <div className="flex flex-wrap justify-between [&>*]:max-w-[23%]">
        {products.map((product) => {
          return (
            <Hover key={Object.values(product._id)[0]}>
              <img
                src={product.img1}
                alt={Object.values(product._id)[0]}
                className=""
              />
              <div className='text-center space-y-1 p-2'>
                <p className="text-sm font-medium">{product.name}</p>
                <p className="text-xs text-zinc-400">
                  {(+product.price).toLocaleString('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                    currencyDisplay: 'code',
                  })}
                </p>
              </div>
            </Hover>
          );
        })}
      </div>
    </>
  );
};
export default Products;

export const loader = async function () {
  const res = await fetch(
    'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74'
  );
  const data = await res.json();
  return data;
};
