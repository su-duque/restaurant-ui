import { CircleX } from 'lucide-react';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import './styles.css';

const ProductDetails = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>{context.productToShow.name} Details</h2>
        <button>
          <CircleX strokeWidth={1} onClick={() => context.toggleProductDetails()} />
        </button>
      </div>
      <figure className='flex justify-center'>
          <img
            className='w-fit h-1/2 rounded-lg'
            src={context.productToShow.imageURL}
            alt={context.productToShow.name}
          />
        </figure>
    </aside>
  );
};

export default ProductDetails;
