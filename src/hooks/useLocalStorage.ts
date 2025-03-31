export function useLocalStorage<T>() {
  const saveToStorage = (key: string, value: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
      throw error; // Re-throw if you want to handle errors in the component
    }
  };

  return { saveToStorage };
}
