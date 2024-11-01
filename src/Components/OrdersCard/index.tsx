interface OrdersCardProps {
  date: string;
  totalPrice: number;
  totalProducts: number;
}

const OrdersCard = ({ totalPrice, totalProducts, date }: OrdersCardProps) => {
  return (
    <div className='flex justify-between items-center mb-3 px-6 border border-black rounded-lg'>
      <p>
        <span>Date: {date}</span>
        <span>Total Products: {totalProducts}</span>
        <span>Price: {totalPrice}</span>
      </p>
    </div>
  );
};

export default OrdersCard;
