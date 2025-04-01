export function useLocalStorage<T>() {
  const saveToStorage = (keyPrefix: string, value: T): void => {
    try {
      const uniqueKey = `${keyPrefix}_${Date.now()}`;
      localStorage.setItem(uniqueKey, JSON.stringify(value));
    } catch (error) {
      console.error(`Failed to save "${keyPrefix}" to localStorage:`, error);
    }
  };

  return { saveToStorage };
}
