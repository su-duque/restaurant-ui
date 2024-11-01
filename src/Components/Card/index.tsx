import { Plus, Check } from 'lucide-react';
import { MealDetails } from '../../interfaces/meals.interfaces';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const Card = (data: MealDetails) => {
  const { category, id, name, imageURL, price } = data;
  const context = useContext(ShoppingCartContext);

  const showProductDetails = (product: MealDetails) => {
    context.openProductDetails();
    context.setProductToShow(product);
    context.closeCheckoutPanel();
  };

  const addProductsToCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    productData: MealDetails,
  ) => {
    event.stopPropagation(); // avoid opening the Product Details panel when adding a product to the cart
    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckoutPanel();
    context.closeProductDetails();
  };

  const renderIcon = (id: string) => {
    const isProductInCart = context.cartProducts.filter((product) => product.id === id).length > 0;
    return isProductInCart ? (
      <div className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'>
        <Check color='#ffffff' strokeWidth={3} />
      </div>
    ) : (
      <button
        className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          addProductsToCart(event, data);
        }}
      >
        <Plus className='h-4 w-4' />
      </button>
    );
  };

  return (
    <article
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => showProductDetails(data)}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs capitalize m-2 px-3 py-0.5'>
          {category}
        </span>
        <img className='w-full h-full object-cover rounded-lg' src={imageURL} alt={name} />
        {renderIcon(id)}
      </figure>
      <p className='flex justify-between items-center gap-2 px-2'>
        <span className='text-sm font-light'>{name}</span>
        <span className='text-lg font-medium'>${price}</span>
      </p>
    </article>
  );
};

export default Card;
