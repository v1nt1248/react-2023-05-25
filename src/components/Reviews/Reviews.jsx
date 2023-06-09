import { Review } from '@/components/Review/Review';

export const Reviews = ({ reviews }) => {
  if (!reviews?.length) {
    return <span>Empty reviews</span>;
  }

  return (
    <div>
      <h3>Reviews:</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};