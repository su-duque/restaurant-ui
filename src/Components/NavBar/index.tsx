import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import { ShoppingCartContext } from '../../Context';
import { ShoppingCart } from 'lucide-react';

const NavBar = () => {
  const leftMenu = [
    {
      className: 'font-semibold text-lg',
      text: 'Restaurant',
      route: '/',
      hasActiveState: false,
    },
    {
      className: '',
      text: 'All',
      route: '/',
      hasActiveState: true,
    },
    {
      className: '',
      text: 'Breakfast',
      route: '/category/breakfast',
      hasActiveState: true,
    },
    {
      className: '',
      text: 'Chicken',
      route: '/category/chicken',
      hasActiveState: true,
    },
    {
      className: '',
      text: 'Pasta',
      route: '/category/pasta',
      hasActiveState: true,
    },
    {
      className: '',
      text: 'Vegan',
      route: '/category/vegan',
      hasActiveState: true,
    },
    {
      className: '',
      text: 'Dessert',
      route: '/category/dessert',
      hasActiveState: true,
    },
  ];

  const rightMenu = [
    {
      className: '',
      text: 'My Orders',
      route: '/my-orders',
      hasActiveState: true,
    },
  ];

  const activeStyle = 'underline underline-offset-4';
  const context = useContext(ShoppingCartContext);

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        {leftMenu.map((item) => (
          <li key={item.text} className={item.className}>
            <NavLink
              to={item.route}
              className={({ isActive }) =>
                isActive && item.hasActiveState ? activeStyle : undefined
              }
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className='flex items-center gap-3'>
        {context.order.length > 0 && rightMenu.map((item) => (
          <li key={item.text} className={item.className}>
            <NavLink
              to={item.route}
              className={({ isActive }) =>
                isActive && item.hasActiveState ? activeStyle : undefined
              }
            >
              {item.text}
            </NavLink>
          </li>
        ))}
        <li>
          <button
            className='flex items-center gap-0.5'
            onClick={() => {
              context.openCheckoutPanel();
              context.closeProductDetails();
            }}
          >
            <ShoppingCart strokeWidth={1} />
            <div>{context.cartProducts.length}</div>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
