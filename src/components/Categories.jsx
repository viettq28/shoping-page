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
            <div
              key={i}
              className={`col-span-${i<2 ? 3 : 2} relative after:absolute after:inset-0 after:transition-all hover:after:bg-gray-50 hover:after:opacity-30`}
            >
              <img src={`src/resources/product_${i + 1}.png`} alt={i} />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Categories;
