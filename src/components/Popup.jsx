import { useState, useEffect } from 'react';

import Button from '../UI/Button';

const Popup = ({ closePopup, ...curProduct }) => {
  const [transition, setTransition] = useState(false);
  console.log('hello');
  useEffect(() => {
    const timer = setTimeout(() => {
      setTransition(true);
    });
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setTimeout(() => closePopup(), 300);
    setTransition(false);
  };

  return (
    <>
      <div
        className={`fixed inset-0 backdrop-brightness-50 transition duration-300 ease-in-out ${
          transition ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      ></div>
      <div
        className={`fixed flex left-1/2 top-1/2 h-3/4 min-h-[400px] w-3/4 -translate-x-1/2 -translate-y-1/2 bg-white transition duration-300 ease-in-out ${transition ? 'opacity-100' : '-translate-y-80 opacity-0'}`}
      >
        <img src={curProduct.img} alt="a" className='object-cover p-5'/>
        <div className='italic py-10 px-10 space-y-3'>
            <p className='text-xl font-semibold'>{curProduct.name}</p>
            <p className=' text-xl text-zinc-500'>{curProduct.price}</p>
            <p className="text-sm text-zinc-400 line-clamp-[8]">{curProduct.desc}</p>
            <Button className='text-base -left-3 top-3 relative'>View Detail</Button>
        </div>

      </div>
    </>
  );
};
export default Popup;

