import { CircleX } from 'lucide-react';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';
import './styles.css';

const CheckoutSidePanel = () => {
  const context = useContext(ShoppingCartContext);

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
      <div className='overflow-y-scroll'>
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageURL={product.imageURL}
            price={product.price}
          />
        ))}
      </div>
    </aside>
  );
};

export default CheckoutSidePanel;
