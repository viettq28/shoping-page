import { useState, useEffect } from 'react';
// Hook kiểm tra sự thay đổi trong localStorage, trả về state là kết quả getItem từ key
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