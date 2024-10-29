import { createContext, useState } from 'react';

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

// Creating a context
const ShoppingCartContext = createContext({});

// Creating the provider
export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  const [count, setCount] = useState(0);

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
