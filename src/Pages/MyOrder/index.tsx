import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  return (
    <>
      <div className='flex w-80 items-center relative justify-center mb-6'>
        <Link to={'/my-orders'} className='absolute left-0'>
          <ChevronLeft />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80'>
        {context.order
          ?.slice(-1)[0]
          .products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageURL={product.imageURL}
              price={product.price}
            />
          ))}
      </div>
    </>
  );
}

export default MyOrder;
