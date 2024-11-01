import { useEffect, useState } from 'react';

const useIngredients = (productID: string | undefined) => {
  const [ingredientList, setIngredientList] = useState<string[]>([]);

  useEffect(() => {
    if (productID) {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${productID}`)
        .then((response) => response.json())
        .then((data) => {
          const product = data.meals[0];
          const ingredients: string[] = Object.keys(product) // get object keys
            .filter((key) => key.startsWith('strIngredient') && product[key]) // get the ingredient keys
            .map((key) => product[key]); // get the value of the ingredient keys
          setIngredientList(ingredients);
        });
    }
  }, [productID]);

  return { ingredientList };
};

export default useIngredients;
