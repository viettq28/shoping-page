import { useState, useEffect } from 'react';

const Popup = ({ closePopup }) => {
  const [showed, setShowed] = useState(false);
  console.log('hello');
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowed(true);
    });
    return () => {
      clearTimeout(timer);
    };
  }, []);
    const closeAnimation = () => {
        setShowed(false);
    }  

  return (
    <>
      <div
        className={`fixed inset-0 backdrop-brightness-50 transition duration-300 ease-in-out  ${
          showed ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closePopup.bind(null, closeAnimation)}
      ></div>
      <div
        className={`fixed left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 bg-white transition duration-300 ease-in-out ${
          showed
            ? 'opacity-100'
            : '-translate-y-80 opacity-0'
            
        }`}
      ></div>
    </>
  );
};
export default Popup;
