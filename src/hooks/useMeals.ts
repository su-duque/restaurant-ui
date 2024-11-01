import { useEffect, useState } from 'react';
import { MealDetails, MealResponse } from '../interfaces/meals.interfaces';
import { getRandomPrice } from '../utils';

const useMeals = (category: string = 'chicken') => {
  const [meals, setMeals] = useState<MealDetails[]>([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => response.json())
      .then((data) => {
        const mealList = data.meals.map((item: MealResponse) => {
          const { idMeal, strMeal, strMealThumb } = item;
          const meal: MealDetails = {
            id: idMeal,
            category: category,
            name: strMeal,
            imageURL: strMealThumb,
            price: getRandomPrice(),
          };
          return meal;
        });
        setMeals(mealList);
      });
  }, [category]);
  return { meals };
};
export default useMeals;
