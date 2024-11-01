import { createContext, useState } from 'react';
import { MealDetails, OrderDetails } from '../interfaces/meals.interfaces';

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

interface ShoppingCartContextProps {
  isProductDetailOpen: boolean;
  openProductDetails: () => void;
  closeProductDetails: () => void;
  productToShow: MealDetails | undefined;
  setProductToShow: React.Dispatch<React.SetStateAction<MealDetails | undefined>>;
  cartProducts: MealDetails[];
  setCartProducts: React.Dispatch<React.SetStateAction<MealDetails[]>>;
  openCheckoutPanel: () => void;
  closeCheckoutPanel: () => void;
  isCheckoutPanelOpen: boolean;
  order: OrderDetails[];
  setOrder: React.Dispatch<React.SetStateAction<OrderDetails[]>>;
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
  const [cartProducts, setCartProducts] = useState<MealDetails[]>([]);

  // Checkout side panel
  const [isCheckoutPanelOpen, setIsCheckoutPanelOpen] = useState(false);
  const openCheckoutPanel = () => setIsCheckoutPanelOpen(true);
  const closeCheckoutPanel = () => setIsCheckoutPanelOpen(false);

  // Shopping Cart - Order
  const [order, setOrder] = useState<OrderDetails[]>([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        openProductDetails,
        closeProductDetails,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        openCheckoutPanel,
        closeCheckoutPanel,
        isCheckoutPanelOpen,
        order,
        setOrder,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
