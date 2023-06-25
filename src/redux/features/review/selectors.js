export const selectReviewModule = state => state.review;
export const selectReviewIds = state => selectReviewModule(state).ids;
export const selectReview = (state, reviewId) => {
  console.log('\nR: ', reviewId, selectReviewModule(state).entities)
  selectReviewModule(state).entities[reviewId];
}
