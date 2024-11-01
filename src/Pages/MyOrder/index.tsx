import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { totalPrice } from '../../utils';

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const {id} = useParams();
  const currentPathIndex = Number(id);
  const orderToShow = id ? context.order?.[currentPathIndex] : context.order?.[context.order?.length - 1];

  return (
    <>
      <div className='flex w-80 items-center relative justify-center mb-6'>
        <Link to={'/my-orders'} className='absolute left-0'>
          <ChevronLeft />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80'>
        {orderToShow?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageURL={product.imageURL}
            price={product.price}
          />
        ))}
      </div>
      <div className='mb-6'>
        <p className='flex justify-between items-center mb-2 w-80 px-6'>
          <span className='font-medium'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(orderToShow?.products)}</span>
        </p>
      </div>
    </>
  );
}

export default MyOrder;
