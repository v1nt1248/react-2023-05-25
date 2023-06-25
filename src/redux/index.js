import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "@/redux/features/cart";
import { restaurantReducer } from "@/redux/features/restaurant";
import { dishReducer } from "@/redux/features/dish";
import { reviewReducer } from "./features/review";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: restaurantReducer,
    dish: dishReducer,
    review: reviewReducer,
  },
});
