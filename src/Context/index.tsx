import { createContext, useState } from 'react';
import { MealDetails } from '../interfaces/meals.interfaces';

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

interface ShoppingCartContextProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  isProductDetailOpen: boolean;
  toggleProductDetails: () => void;
  productToShow: MealDetails;
  setProductToShow: React.Dispatch<React.SetStateAction<MealDetails>>;
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
  const [productToShow, setProductToShow] = useState({} as MealDetails);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        toggleProductDetails,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
