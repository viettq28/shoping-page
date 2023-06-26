import Hover from "../UI/Hover";

const Categories = () => {
  return (
    <>
      <div className="mt-5 py-5 text-center">
        <p className="text-xs text-zinc-400">CAREFUL CREATED COLLECTIONS</p>
        <p>BROWSE OUR CATEGORIES</p>
      </div>
      <div className="grid grid-cols-6 gap-4">
        {Array.from({ length: 5 }).map((_, i) => {
          return (
            <Hover key={i} className={`${i<2 ? 'col-span-3' : 'col-span-2'}`}>
              <img src={`src/resources/product_${i + 1}.png`} alt={i} />
            </Hover>
          );
        })}
      </div>
    </>
  );
};
export default Categories;
