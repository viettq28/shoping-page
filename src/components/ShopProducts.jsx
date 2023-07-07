import { useRouteLoaderData, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ProductCard from './ProductCard';

const ShopProducts = ({ curCat }) => {
  const data = useRouteLoaderData('root');
  const [transition, setTransition] = useState(false);
  let i = 0;

  useEffect(() => {
    const timer = setTimeout(() => {
      setTransition(true);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="basis-full space-y-5">
      <div className="flex justify-between text-xs [&>*]:border [&>*]:border-zinc-400 focus:[&>*]:outline-none">
        <input placeholder="Enter Search Here!" className="w-1/3 px-3 py-3" />
        <select className="h-1/2 w-1/4 text-zinc-900">
          <option defaultValue="Default sorting!">Default sorting!</option>
        </select>
      </div>

      <div className="flex transform-gpu flex-wrap justify-start gap-[8%] [&>*]:max-w-[28%]">
        {data.map((product) => {
          if (product.category === curCat || curCat === 'all') {
            i++;
            return (
              <Link key={product.id} to={`/detail/${product.id}`}>
                <ProductCard
                  product={product}
                  className={`${
                    transition
                      ? 'scale-100 opacity-100 transition-all duration-500'
                      : 'scale-50 opacity-0'
                  }`}
                />
              </Link>
            );
          }
          return null;
        })}
      </div>

      <div className="text-end">
        <div className="ml-auto flex w-fit border border-zinc-500 text-center [&>*]:h-[2rem] [&>*]:w-[2rem]">
          <div>&#171;</div>
          <div className="border border-zinc-500 bg-zinc-800 text-sm leading-7 text-white">
            1
          </div>
          <div>&#187;</div>
        </div>
        <p className="text-sm text-zinc-400">
          Showing {i} of {data.length} results
        </p>
      </div>
    </div>
  );
};
export default ShopProducts;
