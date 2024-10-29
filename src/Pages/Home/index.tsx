import { useEffect, useState } from 'react';
import Card from '../../Components/Card';
import { MealDetails, MealResponse } from '../../interfaces/meals.interfaces';

function Home() {
  const [items, setItems] = useState<MealDetails[]>([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast')
      .then((response) => response.json())
      .then((data) => {
        const mealList = data.meals.map((item: MealResponse) => {
          const { idMeal, strMeal, strMealThumb } = item;
          const meal: MealDetails = {
            id: idMeal,
            name: strMeal,
            imageURL: strMealThumb,
          };
          return meal;
        });
        setItems(mealList);
      });
  }, []);

  return (
    <>
      Home
      <section className="grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg">
        {items?.map((meal) => <Card id={meal.id} key={meal.id} category={'Breakfast'} name={meal.name} imageURL={meal.imageURL} />)}
      </section>
    </>
  );
}

export default Home;
