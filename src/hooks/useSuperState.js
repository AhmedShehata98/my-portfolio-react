import { useState } from "react";

const useSuperState = (Key = "") => {
  /**
   *  declare variable for store key as a string
   *  declare new state and get local storage value as initial Value
   *  set mew local storage item
   */
  let localStorageKey = typeof Key !== "string" ? JSON.stringify(Key) : Key;
  //
  //
  let [data, setData] = useState(window.localStorage.getItem(localStorageKey));
  window.localStorage.setItem(localStorageKey, data);

  /**
   *  getting data from local storage and store it in variable
   */
  let superState = JSON.parse(window.localStorage.getItem(localStorageKey));
  /**
   * [1] return finall data from local storage
   * [2]return useState setter function
   */

  return [superState, setData];
};

export default useSuperState;
