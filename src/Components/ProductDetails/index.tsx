import { CircleX } from 'lucide-react';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import useIngredients from '../../hooks/useIngredients';
import '../../styles/global.css';

const ProductDetails = () => {
  const context = useContext(ShoppingCartContext);
  const { ingredientList } = useIngredients(context.productToShow?.id);

  if (!context.productToShow) return;

  return (
    <aside
      className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} side-panel flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Details</h2>
        <button>
          <CircleX strokeWidth={1} onClick={() => context.closeProductDetails()} />
        </button>
      </div>
      <div className='flex flex-col items-center gap-8'>
        <h2 className='text-2xl px-8 text-center'>{context.productToShow.name}</h2>
        <figure className='px-10'>
          <img
            className='w-full h-full rounded-lg object-cover'
            src={context.productToShow.imageURL}
            alt={context.productToShow.name}
          />
        </figure>
        <div className='px-14 text-center mb-10'>
          <h3 className='font-medium text-xl'>Ingredients:</h3>
          <p className='text-md font-light'>{ingredientList.join(', ') + '.'}</p>
        </div>
      </div>
    </aside>
  );
};

export default ProductDetails;
