import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  return <>
    MyOrder
    <div className='flex flex-col w-80'>
      {context.order?.slice(-1)[0].products.map((product) => (
        <OrderCard
          key={product.id}
          id={product.id}
          name={product.name}
          imageURL={product.imageURL}
          price={product.price}
        />
      ))}
    </div>
  </>;
}

export default MyOrder;
