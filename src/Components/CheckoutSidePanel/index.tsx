import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CircleX } from 'lucide-react';

import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';

import { totalPrice } from '../../utils';

import './styles.css';

const CheckoutSidePanel = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id: string) => {
    // Return everything that is different from the id (product selected on the panel)
    const filteredProducts = context.cartProducts.filter((product) => product.id != id);
    context.setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.24',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.closeCheckoutPanel();
  };

  if (!context.productToShow) return;

  return (
    <aside
      className={`${context.isCheckoutPanelOpen ? 'flex' : 'hidden'} z-10 side-panel-checkout flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <button>
          <CircleX strokeWidth={1} onClick={() => context.closeCheckoutPanel()} />
        </button>
      </div>
      <div className='overflow-y-auto flex-1'>
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageURL={product.imageURL}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-medium'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to={'/my-orders/last'}>
          <button
            className='bg-black py-3 w-full text-white rounded-lg'
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSidePanel;
