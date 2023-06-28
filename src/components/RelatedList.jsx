import ProductCard from './ProductCard';

const RelatedList = ({ list }) => {
  return (
    <div className='mb-10'>
      <p className="text-lg">RELATED PRODUCTS</p>
      <div className="flex space-x-3 [&>*]:w-1/4">
        {list.map((product) => {
          return (
            <ProductCard key={product.id} product={product} className="py-5" />
          );
        })}
      </div>
    </div>
  );
};
export default RelatedList;
