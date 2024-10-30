import { Plus } from 'lucide-react';
import { MealDetails } from '../../interfaces/meals.interfaces';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const Card = ({ category, id, name, imageURL, price = 100 }: MealDetails) => {
  const context = useContext(ShoppingCartContext);

  return (
    <article
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => context.toggleProductDetail()}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {`${category} ${id}`}
          {/* TODO: Delete ID de la card */}
        </span>
        <img className='w-full h-full object-cover rounded-lg' src={imageURL} alt={name} />
        <button
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={(e) => {
            e.stopPropagation();
            context.setCount(context.count + 1)
          }}
        >
          <Plus className='h-4 w-4' />
        </button>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{name}</span>
        <span className='text-lg font-medium'>${price}</span>
      </p>
    </article>
  );
};

export default Card;
