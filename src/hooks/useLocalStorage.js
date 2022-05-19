import { useState, useEffect } from "react";

const useLocalStorage = (Key, value) => {
  let [localStorageKey, setlocalStorageKey] = useState(null);
  let [localStorageValue, setlocalStorageValue] = useState(null);
  let [fromStorage, setFromStorage] = useState(null);
  let [localStorageLength, setLocalStorageLength] = useState(0);

  useEffect(() => {
    setlocalStorageKey(Key);
    setlocalStorageValue(value);
  }, [value, Key]);

  localStorage.setItem(localStorageKey, localStorageValue);
  if (localStorageKey !== (null || undefined)) {
    setFromStorage(localStorage.getItem(localStorageKey));
    setLocalStorageLength(localStorage.length);
  } else {
    fromStorage = '"Could not found"';
    throw new Error("Could not found");
  }
  return [fromStorage, localStorageLength];
};

export default useLocalStorage;
