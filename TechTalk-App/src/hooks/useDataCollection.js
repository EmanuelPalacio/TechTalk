import { useState } from 'react';

const useDataCollection = (initialState) => {
  const [inputValues, setInputValues] = useState(initialState);

  const collection = (text, name) => {
    setInputValues({
      ...inputValues,
      [name]: text,
    });
  };

  const resetInputValues = () => {
    setInputValues(initialState);
  };

  return [inputValues, collection, resetInputValues];
};

export default useDataCollection;
