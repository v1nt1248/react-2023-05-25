import { normalizedReviews } from '@/mocks/normalized-fixtures';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;
    return acc;
  }, {}),
  ids: normalizedReviews.map(review => review.id)
};

const reviewsSlice = createSlice({
  name: 'Review',
  initialState,
})

export const reviewReducer = reviewsSlice.reducer;
