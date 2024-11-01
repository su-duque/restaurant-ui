import { CalendarFold, ChevronRight, ShoppingBasket } from 'lucide-react';

interface OrdersCardProps {
  date: string;
  totalPrice: number;
  totalProducts: number;
}

const OrdersCard = ({ totalPrice, totalProducts, date }: OrdersCardProps) => {
  return (
    <div className='flex justify-between items-center mb-4 px-6 border border-black rounded-lg p-4 w-80'>
      <div className='flex justify-between w-full'>
        <p className='flex flex-col'>
          <div className='flex gap-2 mb-1'>
            <CalendarFold />
            <span className='font-light'>{date}</span>
          </div>
          <div className='flex gap-2'>
            <ShoppingBasket />
            <span className='font-light'>{totalProducts} articles</span>
          </div>
        </p>
        <p className='flex items-center gap-2'>
          <span className='font-medium text-2xl'>${totalPrice}</span>
          <ChevronRight />
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
