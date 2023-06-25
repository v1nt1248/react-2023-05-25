import { normalizedDishes } from '@/mocks/normalized-fixtures';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: normalizedDishes.reduce((acc, dish) => {
    acc[dish.id] = dish;
    return acc;
  }, {}),
  ids: normalizedDishes.map(dish => dish.id)
};

const dishesSlice = createSlice({
  name: 'Dish',
  initialState,
})

export const dishReducer = dishesSlice.reducer;
