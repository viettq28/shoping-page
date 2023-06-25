import Button from '../UI/Button';

const Banner = (props) => {
  return (
    <div className="relative lg:h-[450px]">
      <div className="absolute left-[7%] top-1/2 max-w-[50%] -translate-y-1/2 space-y-2 lg:max-w-[30%]">
        <p className="text-sm text-zinc-400">NEW INSPIRATION 2020</p>
        <p className="text-2xl">20% OFF ON NEW SEASON</p>
        <Button title="Browse collections" />
      </div>
      <img
        src="src\resources\banner1.jpg"
        alt="banner"
        className="h-full object-cover"
      ></img>
    </div>
  );
};
export default Banner;
