import { MealDetails } from '../interfaces/meals.interfaces';

export const getRandomPrice = () => {
  return Math.floor(Math.random() * (200 - 100 + 1)) + 100;
};

/**
 * This function calculates the total price of an order
 * @param {Array} productList is and array of objects - MealDetails
 * @returns {number} sum of prices of all products added to the cart
 */
export const totalPrice = (productList: MealDetails[]) => {
  return productList.reduce((sum:number, product:MealDetails) => sum + product.price, 0);
};
