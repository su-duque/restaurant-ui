import { CircleMinus } from 'lucide-react';

interface OrderCardPRops {
  id: string;
  name: string;
  imageURL: string;
  price: number;
  handleDelete: (id:string) => void;
}

const OrderCard = ({ id, name, imageURL, price, handleDelete }: OrderCardPRops) => {
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
        <button onClick={() => handleDelete(id)}>
          <CircleMinus strokeWidth={1} />
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
