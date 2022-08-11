import React from 'react';

const useLocalStorage = (itemName, initialValue) => {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);
        let parsedItems;

        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue;
        } else {
          parsedItems = JSON.parse(localStorageItems);
        }

        setItem(parsedItems);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 3000);
  }, []);

  const saveItem = (newItem) => {
    try {
      const stringifiedItems = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItems);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };
  return {
    item,
    saveItem,
    loading,
    error,
  };
};

export { useLocalStorage };
