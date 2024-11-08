export interface MealDetails {
  id: string;
  category?: string;
  name: string;
  imageURL: string;
  price: number;
}

export interface MealResponse {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export interface OrderDetails {
  date: string;
  products: MealDetails[];
  totalProducts: number;
  totalPrice: number;
}
