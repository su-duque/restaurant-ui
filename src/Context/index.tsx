import { createContext, useState } from 'react';
import { MealDetails } from '../interfaces/meals.interfaces';

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

interface ShoppingCartContextProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  isProductDetailOpen: boolean;
  openProductDetails: () => void;
  closeProductDetails: () => void;
  productToShow: MealDetails | undefined;
  setProductToShow: React.Dispatch<React.SetStateAction<MealDetails | undefined>>;
  cartProducts: MealDetails[];
  setCartProducts: React.Dispatch<React.SetStateAction<MealDetails[]>>;
}

// Creating a context
export const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

// Creating the provider
export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  // Product Details panel
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetails = () => setIsProductDetailOpen(true);
  const closeProductDetails = () => setIsProductDetailOpen(false);
  const [productToShow, setProductToShow] = useState<MealDetails | undefined>(undefined);

  // Shopping Cart
  const [count, setCount] = useState(0);
  const [cartProducts, setCartProducts] = useState<MealDetails[]>([])

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetails,
        closeProductDetails,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
