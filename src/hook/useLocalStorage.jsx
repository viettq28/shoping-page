import { useState, useEffect } from 'react';

const useLocalStorage = (key) => {
  const [storage, setStorage] = useState(JSON.parse(localStorage.getItem(key)));

  useEffect(() => {
    const handleChangeStorage = () => {
      setStorage(JSON.parse(localStorage.getItem(key)));
    };
    window.addEventListener('storage', handleChangeStorage);
    return () => window.removeEventListener('storage', handleChangeStorage);
  }, [key]);

  return storage;
};

export default useLocalStorage;