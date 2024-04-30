type ReturnType<T> = {
  getStorageItems: (key: string) => T | null;
  setStorageItems: (key: string, data: T) => void;
  removeStorageItems: (key: string) => void;
};

export default function useLocalStorage<T>(): ReturnType<T> {
  const covertToString = (data: T) => {
    return JSON.stringify(data);
  };

  const setStorageItems = (key: string, data: T): void => {
    if (typeof window !== 'undefined') {
      const storageData = covertToString(data);
      localStorage.setItem(key, storageData);
    }
  };

  const getStorageItems = (key: string): T | null => {
    if (typeof window !== 'undefined') {
      const obj = localStorage.getItem(key);
    
      if (obj) return JSON.parse(obj);
    }
    return null;
  };

  const removeStorageItems = (key: string): void => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  };
  return { getStorageItems, setStorageItems, removeStorageItems };
}
