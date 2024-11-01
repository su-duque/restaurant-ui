import { CircleX } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { ShoppingCartContext } from '../../Context';
import './styles.css';

const ProductDetails = () => {
  const context = useContext(ShoppingCartContext);

  const [ingredientList, setIngredientList] = useState<string[]>([]);

  useEffect(() => {
    if (!context.productToShow.id) return;
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${context.productToShow.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('*** ~ file: index.tsx:15 ~ .then ~ data:', data.meals[0]);
        const product = data.meals[0];
        const ingredients: string[] = Object.keys(product) // get object keys
          .filter((key) => key.startsWith('strIngredient') && product[key]) // get the ingredient keys
          .map((key) => product[key]); // get the value of the ingredient keys
        setIngredientList(ingredients);
      });
  }, [context.productToShow.id]);

  return (
    <aside
      className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
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
            className='w-full h-full rounded-lg'
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
