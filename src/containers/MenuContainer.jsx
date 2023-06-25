import { useSelector } from 'react-redux';
import { selectRestaurant } from '@/redux/features/restaurant/selectors';
import { DishContainer } from '@/containers/DishContainer';

export const MenuContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) => selectRestaurant(state, restaurantId));
  const { menu } = restaurant

  return menu.map(dishId => <DishContainer key={dishId} dishId={dishId} />)
}
