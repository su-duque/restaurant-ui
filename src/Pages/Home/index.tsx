import { useParams } from 'react-router-dom';

import useMeals from '../../hooks/useMeals';

import Card from '../../Components/Card';
import ProductDetails from '../../Components/ProductDetails';

function Home() {
  const { category } = useParams();
  const { meals: items } = useMeals(category);
  return (
    <>
      <div className='flex w-80 items-center relative justify-center mb-6'>
        <h1 className='font-medium text-xl capitalize'>{category}</h1>
      </div>
      <section className='grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg'>
        {items?.map((meal) => (
          <Card
            id={meal.id}
            key={meal.id}
            category={meal.category}
            name={meal.name}
            imageURL={meal.imageURL}
            price={meal.price}
          />
        ))}
      </section>
      <ProductDetails />
    </>
  );
}

export default Home;
