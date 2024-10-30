import { createContext, useState } from 'react';

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

interface ShoppingCartContextProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  isProductDetailOpen: boolean;
  toggleProductDetails: () => void;
}

// Creating a context
export const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

// Creating the provider
export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  // Cart counter
  const [count, setCount] = useState(0);

  // Product Details panel
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const toggleProductDetails = () => setIsProductDetailOpen(!isProductDetailOpen);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        toggleProductDetails,
        isProductDetailOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
