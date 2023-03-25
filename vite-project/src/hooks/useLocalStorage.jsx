import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const addValue = (newValue) => {
    setValue(newValue);
  };

  const removeValue = (key) => {
    //setValue(value.filter((_, index) => index !== indexToRemove));
    localStorage.removeItem(key);
  };

  return [value, addValue, removeValue];
};

export default useLocalStorage;
