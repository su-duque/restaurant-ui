import { CircleMinus } from 'lucide-react';
import { MealDetails } from '../../interfaces/meals.interfaces';

const OrderCard = (data: MealDetails) => {
  const { price, name, imageURL } = data;
  return (
    <div className='flex justify-between items-center mb-3 px-6'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={imageURL} alt={name} />
        </figure>
        <p className='text-sm font-light'>{name}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>${price}</p>
        <button>
          <CircleMinus strokeWidth={1} />
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
