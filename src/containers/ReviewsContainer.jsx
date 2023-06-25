import { useSelector } from 'react-redux';
import { selectRestaurant } from '@/redux/features/restaurant/selectors';
import { ReviewContainer } from '@/containers/ReviewContainer';

export const ReviewsContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) => selectRestaurant(state, restaurantId));
  const { reviews } = restaurant

  return reviews.map(reviewId => <ReviewContainer key={reviewId} reviewId={reviewId} />)
}
